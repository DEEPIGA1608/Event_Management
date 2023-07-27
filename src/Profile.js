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

function Profile({user}) {
  
    const navigate=useNavigate();
    const[name,setName] = useState("");
    const[email,setMail] = useState("");
    const[contact,setContact] = useState("");
    const uid=localStorage.getItem('uid');
    const uname=localStorage.getItem('uname');
    const upass=localStorage.getItem('upass');
    const urole=localStorage.getItem('urole');
    const ucontact=localStorage.getItem('ucontact');
    const uemail=localStorage.getItem('uemail');
    const token = localStorage.getItem('token');
console.log(uid);
const handleUpdate = async() => 
{
      try 
      {
        console.log(urole)
        await axios.put('http://127.0.0.1:8181/update/user', {
        id: `${uid}`, // Assuming you get the user id from the server
        contact: contact,
        email: email,
        name: name,
        password: upass,
        role: "USER",
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'cache-control': 'no-cache',
        },
      }
      );
      alert('User details updated successfully!');

    } 
         catch (error)
      {
        console.error('User Updation failed:', error);
      }
      
    };
    const handleDelete = async () => {
      try 
      {
        await axios.delete(`http://127.0.0.1:8181/delete/user/${uid}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'cache-control': 'no-cache',
          },
        }
        );
        alert('Account deleted successfully!');
        navigate('/Signup');
      } 
      catch (error) 
      {
              console.error("Delete failed:", error);
      }
  };

  return (
    <>
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
        <h1>User Profile</h1>
    <p>Id: {uid}</p>
      <label>Name:</label>
      <input type="text" placeholder={`${uname}`} onChange={e => setName(e.target.value)}></input><br></br>
      <label>Email:</label>
      <input type="text" placeholder={`${uemail}`} onChange={e => setMail(e.target.value)}></input><br></br>
      <label>Contact:</label>
      <input type="text" placeholder={`${ucontact}`} onChange={e => setContact(e.target.value)}></input><br></br>
      <button onClick={handleUpdate}>Update Details</button>
      <button onClick={handleDelete}>Delete Account</button>


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
  </>
)
}


export default Profile