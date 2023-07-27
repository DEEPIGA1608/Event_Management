import React from 'react'
import "./Cevent1.css";import { Link  } from 'react-router-dom'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
function Cevent1() {
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
  
    const handleChange = async (e) => {
      e.preventDefault();
      const token = localStorage.getItem('token');
      try {
        const response = await axios.post(
          'http://127.0.0.1:8181/save/eventdetails',
          {eventid:eventid,
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
    const handleDeleteEvent = async () => {
      const eventIdToDelete = prompt('Please enter the Event ID to delete:');
      if (eventIdToDelete) {
        const token = localStorage.getItem('token');
        try {
          const response = await axios.delete(
            `http://127.0.0.1:8181/delete/eventdetails/${eventIdToDelete}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
                'cache-control': 'no-cache',
              },
            }
          );
          if (response.status === 200) {
            alert('Event details deleted successfully!');
          }
        } catch (error) {
          console.error('Event deletion failed:', error);
        }
      } else {
        alert('Event ID cannot be empty. Deletion canceled.');
      }
    };
    
    return (
        <>
        <div class="div">
        <div class="one">
      <img class="picevent1" src="https://as1.ftcdn.net/v2/jpg/01/65/37/34/1000_F_165373429_r5eYGZeRmLyLSesZS62nTNIJkWjQlqvT.jpg"/>
        </div>
        <div class="two">
            <form className='oform'>
            <center><label>Create Your Events & Publicize it</label></center><br></br>
            <p>Event id:   
            &nbsp;<input type="text" class="jname" value={eventid} onChange={(e)=>setEventid(e.target.value)} placeholder="Event id"/></p>
            <p>Organizer Name:
            &nbsp;<input type="text" class="jname" value={organizer} onChange={(e)=>setOrganizer(e.target.value)} placeholder="Organizer Name"/></p>
            <p>Event name:
            &nbsp;<input type="text" class="jname" value={eventname} onChange={(e)=>setEventname(e.target.value)} placeholder="Event Name"/></p>
            <p >Capacity:
            &nbsp;<input type="number" class="jname" min="1" value={capacity} onChange={(e)=>setCapacity(e.target.value)}/></p>
            <p>Date [ From ]:
            &nbsp;<input type="date" class="jname" value={fromdate} onChange={(e)=>setFdate(e.target.value)}/></p>
            <p>Date [ To ]:
            <input type="date" class="jname" value={todate} onChange={(e)=>setTodate(e.target.value)}/></p>
            <p >Timings [ From ]:
            &nbsp;<input type="time" class="jname" value={fromtime} onChange={(e)=>setFromtime(e.target.value)}/></p>
            <p >Timings [ To ]:
            &nbsp;<input type="time" class="jname" value={totime} onChange={(e)=>setTotime(e.target.value)}/></p>
            <p>Price Per Person:
            &nbsp;<input type="number" class="jname" min="1" value={price} onChange={(e)=>setPrice(e.target.value)}/></p>
            <p>Event Venue:
            <textarea id="lname" placeholder="Event Venue"  class="jname" rows="10" cols="10" value={venue} onChange={(e)=>setVenue(e.target.value)}/></p>
            <p>Event Description:
            &nbsp;<textarea id="lname" placeholder="Description"  class="jname" rows="2" cols="10" value={description} onChange={(e)=>setDescription(e.target.value)}/></p>
            <p>Event Agenda:
            &nbsp;<textarea id="lname" placeholder="Agenda" class="jname"  rows="1" cols="10" value={agenda} onChange={(e)=>setAgenda(e.target.value)}/></p>
           <br></br> 
           <Link to="/Updateeve"><button type="button" className="cevbutton1">Update Event</button></Link>
           <button type='Submit' className='cevbutton' onClick={handleChange}>Submit</button>
            <button type="button" className="cevbutton2" onClick={handleDeleteEvent}>Delete Event</button>
          </form>

      </div>
      </div>
      </>
    )
  
}
export default Cevent1;
