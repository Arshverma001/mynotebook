const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const Notes = require('../models/Notes');
const { body, validationResult } = require('express-validator');

// ROUTE 1: Get All the Notes using: GET "/api/notes/fetchallnotes". Login required
router.get('/fetchallnotes', fetchuser, async (req, res) => { 
        const notes = await Notes.find({ user: req.user.id });
        res.json(notes)
})

//ROUTE 2: Add a new note using POST"/api/notes/addnotes.Login required"
router.get('/addnotes', fetchuser,[
  body('title',"Enter title with 5 or more characters").isLength({min :5}),
  body('description',"Enter description which is greater than 5 characters").isLength({ min: 5 })
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  res.json(notes)


})


module.exports=router