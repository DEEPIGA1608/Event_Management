import { useState } from "react";
import "./Login1.css"
import {useDispatch} from 'react-redux';
import React from 'react'
import axios from 'axios';
import { login } from "./Redux/userSlice";
import { Link,useNavigate } from "react-router-dom";
function Login() {
  const[name,setName] = useState("");
  const[email,setMail] = useState("");
  const[password,setPassword] = useState("");
  const dispatch=useDispatch();
  const navigate=useNavigate();

  const handleChange = async (e) => {
    e.preventDefault();
    if (
      email.length !== 0 &&
      (/^\S+@\S+\.\S+$/).test(email) &&
      (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=]).{8,}$/).test(password) &&
      password.length >= 8 &&
      name.length !== 0
    ) {
      try {
        const response = await axios.post(
          'http://127.0.0.1:8181/api/v1/auth/authenticate',
          {
            name: name,
            email: email,
            password: password,
          }
        );
  
        let user = response.data.userResponse;
        let token = response.data.token;
        
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
  
        // Move navigation inside the try block
        navigate('/Home1');
  
        dispatch(login({ user: name }));
      } catch (error) {
        console.error('Login failed:', error);
      }
    }
  };
  

  return (
    <>
   <div class="bg">
      <div class="boxout">
       <div class="box">
       <h1 class="h1">Login</h1>
    <form action="index.html" autocomplete="off" class="iform1">
        <p>Name:
            <input type="text" class="name" required onChange = {e => setName(e.target.value)}/>
            <div className='error'>{name.length===0?"Please enter your valid Name":""}</div>
        </p>
        <p>Email:
              <input type="email" class="email"required onChange = {e => setMail(e.target.value)}/>
              <div className='error'> {email.length === 0 || !((/^\S+@\S+\.\S+$/).test(email))?"Please enter your validEmail-ID" : ""}</div>
        </p>
        <p>Password:
              <input type="password"class="password" attern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=]).{8,}$"
                title="Password may only contain letters [ Both Uppercase and LowerCase ] and numbers" required  onChange = {e => setPassword(e.target.value)}/>
              <div className='error'>{password.length < 8 || !((/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=]).{8,}$/).test(password)) ?"Please enter your valid Password" : ""} </div>
        </p>
      
        <Link to="/Home1"><button onClick={handleChange} class="g1">Login</button></Link>
        <br></br>
          <h4>Don't have an account?<Link to="/Signup"> Signup</Link></h4>
    </form>
    </div>
    </div></div>
    </>
  )
}

export default Login