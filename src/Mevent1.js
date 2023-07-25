import axios from "axios";
import React from "react";
import { useState,useEffect } from "react";
import { Link } from 'react-router-dom';



function Mevent1() {
  const [allDetails, setAllDetails] = useState([]);

  // New function to fetch all details from the table
  const fetchAllDetails = async () => {
    const token = localStorage.getItem('token');
    try {
      const response = await axios.get('http://127.0.0.1:8181/show/eventdetails', {
        headers: {
          Authorization: `Bearer ${token}`,
          'cache-control': 'no-cache',
        },
      });

      // Assuming the response data contains an array of event details
      const allDetails = response.data;
      setAllDetails(allDetails); // Set the fetched details to the state
    } catch (error) {
      console.error('Error fetching all details:', error);
    }
  };

  // Call the fetchAllDetails function when the component mounts
  useEffect(() => {
    fetchAllDetails();
  }, []);
 return ( 
  <div>
        {allDetails.map((eventData) => (
          <div key={eventData._id}>
            <Link to={{
                pathname: '/Ticket',
                state: { eventData }, // Pass the event details as state
              }}
            >
              <h2>{eventData.eventname}</h2>
            </Link>
            <p>Organizer: {eventData.organizername}</p>
            <p>Event Name: {eventData.eventname}</p>
            <p>Start Date: {eventData.startdate}</p>
            <p>End Date: {eventData.enddate}</p>
            <p>Start Time: {eventData.starttime}</p>
            <p>End Time: {eventData.endtime}</p>
            <p>Venue: {eventData.venue}</p>
            <p>Description: {eventData.eventdescription}</p>
            <p>Agenda: {eventData.eventagenda}</p>
            <p>Capacity: {eventData.capacity}</p>
            <p>Price Per Person: {eventData.priceperperson}</p>
            
          </div>
        ))}
        </div>
 )
}


export default Mevent1