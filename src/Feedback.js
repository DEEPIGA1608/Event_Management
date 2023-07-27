import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import "./Cevent.css";
const OpenSidebar = () => {
  document.getElementById("sidePanel").style.width = "225px";
}

function CloseSideBar() {
  document.getElementById("sidePanel").style.width = "0px";
}
function Feedback() {
    const[email,setEmail] = useState("");
    const[feedback,setFeedback] = useState("");
    const navigate = useNavigate();
    let token = localStorage.getItem('token');
    console.log(token);


    const handleChange = async(event) => {
      if( email.length !== 0 && (/$^|.+@.+..+/).test(email)&& feedback.length !== 0){
        console.log(<i class="fa fa-exclamation-circle" aria-hidden="true"></i>);
        try{
            const response= axios.post("http://localhost:8181/api/v1/users/addUserFeedback",{ 
              email:email,
              feedback:feedback,
            },
            {
              headers:{
                "Authorization":`Bearer ${token}`,
                "cache-control":'no-cache', 
              }
            }
        
            );
            window.alert('Response submitted')
            navigate('/Home1')
          
          }
            catch(error){
              console.log(error);
            }
            }
          }
  return (
    <div class="homebg1">
        <div className='sidebar'></div>
        <div id = "sidePanel" className = "side-panel">
        <a href="javascript:void(0)" className="close-side-bar" onClick={CloseSideBar}><i  class="fa fa-remove" style={{fontSize:36}}></i></a>		
        <a href="https://calendar.google.com/calendar/r/eventedit">Add to Calendar</a>		
        <Link to="/Feedback">Feedback</Link>		
        <Link to="/Contact">Contact</Link>			
        </div>
        <div class="topnav">
    <h2><center><span class="design1">I</span>
    <span class="design2">Do</span>
    <span class="design3">Event</span>
    <span class="design4">Z</span></center></h2>
    <hr></hr>
    <button class="menubutton"onClick = {OpenSidebar}><i class="fa fa-reorder" style={{fontSize:30,color:"white"}}></i></button>
    <Link to="/Home1" class="nav">Home</Link>
    <Link to="/Cevent"class="nav">Create Event</Link>
    <Link to="/Chatroom"class="nav">Chatroom</Link>
    <Link to="/"class="nav">Logout</Link>
    </div>
    <div className='feedback-background'>


        <center><h2 className='feedback-title'>FEEDBACK</h2></center>
        <br/>
        <form>
    <p>Enter your email address:
        <textarea required label = "Email-id" onChange = {e => setEmail(e.target.value)} sx = {{width:350}}></textarea>
        <div className = "error">
        {email.length === 0 || !((/^\S+@\S+\.\S+$/).test(email))?"Enter a valid email" : ""}</div></p>
        <p>Comments:<textarea id="feedback" required label="feedback" multiline rows={4} defaultValue="Give your Feedback.." style = {{width:600}} onChange = {e => setFeedback(e.target.value)}/>
        <div className = "error">
        {feedback.length === 0 ?"*required" : ""}
        </div></p>

        <button onClick = {handleChange} className = "feedback-login" variant = "contained" type = "submit" sx = {{width:70,position:"absolute",left:500}}>SUBMIT</button>
</form>

    </div>
<footer class="foot1">
    <br></br>
    <Link to="/Policy" class="policy"> Privacy policy </Link>
    <Link to="/Qns" class="hqn">FAQs</Link>
      <div  class="hcontact">Follow us on:
      <a href="https://www.facebook.com" class="fa fa-facebook"></a>
      <a href="https://www.twitter.com" class="fa fa-twitter"></a>
<a href="https://www.instagram.com" class="fa fa-instagram"></a>
      <a href="https://www.youtube.com" class="fa fa-youtube"></a>
</div></footer>
    </div>
  )
}


export default Feedback