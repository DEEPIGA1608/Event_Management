import React from 'react'
import "./Home1.css";
import { Link } from 'react-router-dom';
import { selectUser } from './Redux/userSlice'
import {useSelector} from 'react-redux/es/hooks/useSelector'
 const OpenSidebar = () => {
    document.getElementById("sidePanel").style.width = "225px";
}

function CloseSideBar() {
    document.getElementById("sidePanel").style.width = "0px";
}
export default function Home1() {
  const user=useSelector(selectUser);
  return (
    <>

      <div>
        <div className='sidebar'></div>
        <div id = "sidePanel" className = "side-panel">
        <a href="javascript:void(0)" className="close-side-bar" onClick={CloseSideBar}><i  class="fa fa-remove" style={{fontSize:36}}></i></a>
        <Link to="/Profile">Profile</Link>		
        <a href="https://calendar.google.com/calendar/r/eventedit">Add to Calendar</a>		
        <a href="#">Feedback</a>		
        <Link to="/Contact">Contact</Link>			
        </div>
	<div class="topnav">
    <h2><center><span class="design1">I</span>
    <span class="design2">Do</span>
    <span class="design3">Event</span>
    <span class="design4">Z</span></center></h2>
    <hr></hr>
    <button class="menubutton"onClick = {OpenSidebar}><i class="fa fa-reorder" style={{fontSize:30,color:"white"}}></i></button>
    <a class="active" href="#home">Home</a>
    <Link to="/Cevent"class="nav">Create Event</Link>
    <Link to="/Chatroom"class="nav">Chatroom</Link>
    <Link to="/"class="nav">Logout</Link>
    </div>
    
 <div class="bgimg-1">
  <div class="homecaption">
  <span class="border">WELCOME {user}!!</span>
  </div>
</div>

<div class="pardiv1">
  <h3 class ="par">IdoEventZ</h3>
    <p>It is a full service event management firm based in Calgary, Alberta that was created by pairing together our passion for business and events. We bring a fresh, unique approach to the event management industry.
  Our team understands that a properly executed event can be leveraged to support an organization’s strategic vision, incorporated into a company’s marketing plan,
  or used to build networks and client loyalty.</p>
  </div>

  <div class="bgimg-2">
    <div class="homecaption">
    <span class="border" >Event Planning IS OUR PASSION</span>
    </div>
  </div>

  <div class="pardiv2">
    <div  class="parup">
    <p>We learn about your business, we focus on your challenges, and we plan events to support your goals.</p>
    </div>
  </div>

  <div class="bgimg-3">
    <div class="homecaption">
    <span class="border">Event Planning Is Hard.WE CAN HELP YOU.</span>
    </div>
  </div>

  <div class="pardiv2">
    <div class="pardiv3">
    <p>Grow eventfully.</p>
    </div>
  </div>

  <div class="bgimg-1">
    <div class="homecaption"><span class="border">COOL!</span></div>
  </div>

    <footer class="foot">
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
    </>
  )
}
