const express = require('express');
const router = express.Router();
const User =require('../models/User')
const { body, validationResult } = require('express-validator');
const bcrypt=require("bcryptjs")
const jwt=require("jsonwebtoken")
const fetchUser=require('../middleware/fetchuser')
                         

const JWT_SECRET="arshverma"


//ROUTE 1:create a user using POST "/api/auth/createuser".No login required
router.post('/createuser',[
  body('name',"Enter name with 5 or more characters").isLength({min :5}),
  body('email',"Enter valid email").isEmail(),
  body('password',"Enter password which is greater than 5 characters").isLength({ min: 5 })
] , async(req,res)=>{
  //if errors,return bad request 
   const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }


    try {
      //check whether a user with same email exist or not
      let user=await User.findOne({email : req.body.email})
    //console.log(user)
    if(user)
    {
      return res.status(400).json({error:"Sorry a user with same email already exists"})
    }

    //Create a new user
    const salt= await bcrypt.genSalt(10);
    const secPass=await bcrypt.hash(req.body.password,salt)
   user=await User.create({
      name: req.body.name,
      password: secPass,
      email:req.body.email,
    })
    const data={
      user:{
        id:user.id,

      }
    }

   const authToken=jwt.sign(data,JWT_SECRET);
   res.send({authToken})

   
    } catch (error) {
      console.log(error.message)
      res.status(500).send("Internal error occured")
    }


    // ROUTE 2: create a user using POST "/api/auth/login".No login required
    router.post('/login', [
      body('email', 'Enter a valid email').isEmail(),
      body('password', 'Password cannot be blank').exists(),
    ], async (req, res) => {
      let success = false;
      // If there are errors, return Bad request and the errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
    
      const { email, password } = req.body;
      try {
        let user = await User.findOne({ email });
        if (!user) {
          success = false
          return res.status(400).json({ error: "Please try to login with correct credentials" });
        }
    
        const passwordCompare = await bcrypt.compare(password, user.password);
        if (!passwordCompare) {
          success = false
          return res.status(400).json({ success, error: "Please try to login with correct credentials" });
        }
    
        const data = {
          user: {
            id: user.id
          }
        }
        const authtoken = jwt.sign(data, JWT_SECRET);
        success = true;
        res.json({ success, authtoken })
    
      } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
      }
 })

 // ROUTE 3: Get logined user details using POST "/api/auth/getuser". login required
 router.post('/getuser',fetchUser, async (req, res) => {
  try {
    userId=req.user.id;
    const user=await User.findById(userId).select("-password")
    res.send(user)
  } catch (error) {
    console.error(error.message);
        res.status(500).send("Internal Server Error");
  }
})
})


module.exports=router