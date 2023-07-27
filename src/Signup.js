import { useState } from "react";
import "./Signup.css"
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
import React from 'react'
import {login } from "./Redux/userSlice";
import {useDispatch} from 'react-redux';
import Profile from "./Profile";
const Signup = () => {
  

  const[name,setName] = useState("");
  const[email,setMail] = useState("");
  const[password,setPassword] = useState("");
  const[contact,setCont] = useState("");
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const handleChange = async(e) => 
  {
      e.preventDefault()
      if(email.length !== 0 && (/^\S+@\S+\.\S+$/).test(email) && (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=]).{8,}$/).test(password) && password.length >= 8 && name.length !==0 && contact.length>9)
      {
        try{
          const response= await axios
           .post('http://127.0.0.1:8181/api/v1/auth/register', {
             
               name: name,
               email: email,
               password: password,
               contact: contact,
             });
               // Assuming your server responds with user data upon successful login
               if(response.status ===200){
                 const user=response.data;
                 dispatch(login({ user: user.name }));
                //  dispatch(mailin({ mail: user.mail }));
              
               navigate('/');
               
               setName('');
               setMail('');
               setPassword('');
               setCont('');
               let ucontact=contact;
               localStorage.setItem('ucontact',ucontact);
               let urole=response.data.role;
               localStorage.setItem('urole',urole);
               
               <Profile user={user} />
               console.log(urole)
 
               }
         }
             catch(error) {
               console.error('Login failed:', error);
             };
            }
            dispatch(login({user:name}));
 }

  return (
    <>
   <div class="bg">
      <div class="boxout">
       <div class="box1">
       <h1 class="h1">Signup</h1>
    <form action="index.html" autocomplete="off" class="iform1">
       

        <p>Name:
            <input type="text" class="name" value={name} required onChange = {e => setName(e.target.value)}/>
            <div className='error'>{name.length===0?"Please enter your valid Name":""}</div>
        </p>
        <p>Email:
              <input type="email" class="email"required value={email} onChange = {e => setMail(e.target.value)}/>
              <div className='error'> {email.length === 0 || !((/^\S+@\S+\.\S+$/).test(email))?"Please enter your validEmail-ID" : ""}</div>
        </p>
        <p>Password:
              <input type="password"class="password" value={password} pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=]).{8,}$"
                title="Password may only contain letters [ Both Uppercase and LowerCase ] and numbers" required  onChange = {e => setPassword(e.target.value)}/>
              <div className='error'>{password.length < 8 || !((/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=]).{8,}$/).test(password)) ?"Please enter your Password:" : ""} </div>
        </p>
        <p>Contact:
              <input type="tel" class="cotq"minLength="10" pattern="[0-9]{10}" value={contact} required onChange = {e => setCont(e.target.value)}/>
              <div className='error'>{contact.length<10?"Please enter your Contact Number:":""}</div>
        </p>
        <Link to="/Home1"><button onClick={handleChange} class="g11" >Create account</button></Link>
        <br></br>
          <h4>Already have an account?<Link to="/"> Login</Link></h4>
    </form>
    </div>
    </div></div>
    </>
  )
}

export default Signup