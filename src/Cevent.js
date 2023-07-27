import React from 'react'
import { Link } from 'react-router-dom';
import "./Cevent.css";
const OpenSidebar = () => {
  document.getElementById("sidePanel").style.width = "225px";
}

function CloseSideBar() {
  document.getElementById("sidePanel").style.width = "0px";
}
export default function Cevent() {
  return (

      <div class="homebg1">
        <div className='sidebar'></div>
        <div id = "sidePanel" className = "side-panel">
        <a href="javascript:void(0)" className="close-side-bar" onClick={CloseSideBar}><i  class="fa fa-remove" style={{fontSize:36}}></i></a>
        <Link to="/Profile">Profile</Link>		
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
    <Link to="/Cevent"class="active">Create Event</Link>
    <Link to="/Chatroom"class="nav">Chatroom</Link>
    <Link to="/"class="nav">Logout</Link>
    </div>
    <p class="hero-image">
  <p class="hero-text">
    <Link to="/Cevent1" class="white"><h3>Create new Event</h3></Link>
 </p> </p>
    <p class="hero-image1">
  <p class="hero-text1">
   <Link to="/Mevent1" class="white"> <h3>View  events</h3></Link>
 </p> </p>
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

