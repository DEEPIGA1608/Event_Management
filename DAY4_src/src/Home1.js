import React from 'react'
import "./Home1.css";
import { Link } from 'react-router-dom';
 const OpenSidebar = () => {
    document.getElementById("sidePanel").style.width = "225px";
}

function CloseSideBar() {
    document.getElementById("sidePanel").style.width = "0px";
}
export default function () {
  return (
    <>

      <div class="homebg">
        <div className='sidebar'></div>
        <div id = "sidePanel" className = "side-panel">
        <a href="javascript:void(0)" className="close-side-bar" onClick={CloseSideBar}><i  class="fa fa-remove" style={{fontSize:36}}></i></a>
        <a href="#">Profile</a>		
        <a href="#">Settings</a>		
        <a href="#">Feedback</a>		
        <a href="#">Contact</a>			
        </div>
	<div class="topnav">
    <h2><center><span class="design1">I</span>
    <span class="design2">Do</span>
    <span class="design3">Event</span>
    <span class="design4">Z</span></center></h2>
    <hr></hr>
    <button class="menubutton"onClick = {OpenSidebar}><i class="fa fa-reorder" style={{fontSize:30,color:"white"}}></i></button>
    <a class="active" href="#home">Home</a>
    <Link to="Cevent"class="nav">Create Event</Link>
    <Link to="Guidelines"class="nav">GuideLines</Link>
    <Link to="Login"class="nav">Logout</Link>
    </div>
    <div class="hero-image">
  <div class="hero-text">
    <h1>Welcome</h1>
    
 
  </div>
</div>
    <footer class="foot">
    <br></br>
      <Link to="" class="contact">Contact</Link>
      <Link to="" class="policy"> Privacy policy </Link>
    <Link to="" class="qn">FAQs</Link></footer>

    </div>
    </>
  )
}
