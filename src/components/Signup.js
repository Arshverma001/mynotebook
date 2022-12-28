import React,{useState} from 'react'
import { useHistory } from 'react-router-dom';

const Signup = (props) => {

    const [credentials, setCredentials] = useState({email: "", password: "",name:"" , cpassword:""}) 
    let history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const{name,password,email}=credentials
        const response = await fetch("http://localhost:5000/api/auth/createuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email,name,password})
        });
        const json = await response.json()
        console.log(json);
         if(json.success)
         {
          // Save the auth token and redirect
          localStorage.setItem('token', json.authtoken); 
          history.push("/");
         
          props.showAlert("Invalid credentials","danger")
         }
         else{
          props.showAlert("Account Created Successfull !","success")
         }
          

      
    }

    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

  return (
    <div className='mt-3 container'> 
    <h1 className='mb-3 '>Create An Account In iNotebook</h1>
    <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text" className="form-control" id="name" name='name' aria-describedby="emailHelp"  onChange={onChange} required/>
   
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email</label>
    <input type="email" className="form-control" id="email" name='email' onChange={onChange}  required />
  </div>


  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" id="password" name='password' onChange={onChange} required minLength={5}/>
  </div>

  <div className="mb-3">
    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
    <input type="password" className="form-control" id="cpassword" name='cpassword' onChange={onChange} required minLength={5}/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default Signup