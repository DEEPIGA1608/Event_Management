import React from 'react'
import "./Cevent1.css";import { Link  } from 'react-router-dom'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
function Updateeve() {
    const[eventid,setEventid]=useState("");
    const[organizer,setOrganizer] = useState("");
    const[eventname,setEventname] = useState("");
    const[fromdate,setFdate] = useState("");
    const[todate,setTodate] = useState("");
    const[fromtime,setFromtime] = useState("");
    const[totime,setTotime] = useState("");
    const[venue,setVenue] = useState("");
    const[description,setDescription] = useState("");
    const[agenda,setAgenda] = useState("");
    const[capacity,setCapacity] = useState("");
    const[price,setPrice] = useState("");
    const [allDetails, setAllDetails] = useState([]);
  
    const handleUpdateEvent = async (e) => {
      e.preventDefault();
      const token = localStorage.getItem('token');
      try {
        const response = await axios.post(
          'http://127.0.0.1:8181/save/eventdetails',
          {
            eventid:eventid,
            organizername: organizer,
            eventname: eventname,
            startdate: fromdate,
            enddate: todate,
            starttime: fromtime,
            endtime: totime,
            venue: venue,
            eventdescription: description,
            eventagenda: agenda,
            capacity: capacity,
            priceperperson: price,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'cache-control': 'no-cache',
            },
          }
        );
        
        alert('Form Submitted Successfully!');
        
      } catch (error) {
        console.error('Form submission failed:', error);
      }
    }
    
    return (
        <>
        <div class="div">
        <div class="one">Section 1</div>
        <div class="two">
            <form className='oform'>
            <label>Create Your Events & Publicize it</label><br></br>
            <p>Event id:</p>
            <input type="text" class="jname" value={eventid} onChange={(e)=>setEventid(e.target.value)} placeholder="Event id"/>
            <p>Organizer Name:</p>
            <input type="text" class="jname" value={organizer} onChange={(e)=>setOrganizer(e.target.value)} placeholder="Organizer Name"/>
            <p>Event name:</p>
            <input type="text" class="jname" value={eventname} onChange={(e)=>setEventname(e.target.value)} placeholder="Event Name"/>
            <p>Date [ From ]:</p>
            <input type="date" class="jname" value={fromdate} onChange={(e)=>setFdate(e.target.value)}/>
            <p>Date [ To ]:</p>
            <input type="date" class="jname" value={todate} onChange={(e)=>setTodate(e.target.value)}/>
            <p>Timings [ From ]:</p>
            <input type="time" class="jname" value={fromtime} onChange={(e)=>setFromtime(e.target.value)}/>
            <p>Timings [ To ]:</p>
            <input type="time" class="jname" value={totime} onChange={(e)=>setTotime(e.target.value)}/>
            <p>Price Per Person:</p>
            <input type="number" class="jname" min="1" value={price} onChange={(e)=>setPrice(e.target.value)}/>
            <p>Capacity:</p>
            <input type="number" class="jname" min="1" value={capacity} onChange={(e)=>setCapacity(e.target.value)}/>
            <p>Event Venue:</p>
            <textarea id="lname" placeholder="Event Venue"  class="jname" rows="2" cols="10" value={venue} onChange={(e)=>setVenue(e.target.value)}/>
            <p>Event Description:</p>
            <textarea id="lname" placeholder="Description"  class="jname" rows="2" cols="10" value={description} onChange={(e)=>setDescription(e.target.value)}/>
            <p>Event Agenda:</p>
            <textarea id="lname" placeholder="Agenda" class="jname"  rows="1" cols="10" value={agenda} onChange={(e)=>setAgenda(e.target.value)}/>
           <br></br> <button type='Submit' className='orgsub' onClick={handleUpdateEvent}>Update</button>
          </form>

      </div>
      </div>
      </>
    )
  
}
export default Updateeve;
