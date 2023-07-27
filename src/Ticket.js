import React, { useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
const Ticket = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const receivedValue = queryParams.get('data1');
  const receivedValue1 = queryParams.get('data2');

  const [numTickets, setNumTickets] = useState(1);

  const handleNumTicketsChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setNumTickets(value);
  };
  const totalAmount = receivedValue * numTickets;


  return (
    <div class="div">
        <div class="one">
      <img class="picevent1" src="https://as1.ftcdn.net/v2/jpg/01/65/37/34/1000_F_165373429_r5eYGZeRmLyLSesZS62nTNIJkWjQlqvT.jpg"/>
        </div>
        <div class="two">
      <h2>Ticket Booking</h2>
      <p>
        Event Name:
        <input type="text" placeholder={receivedValue1} disabled/>
      </p>
      <p>
        Number of Tickets:
        <input type="number" value={numTickets} onChange={(e) => setNumTickets(e.target.value)} />
      </p>
      <button onChange={handleNumTicketsChange}>calculate</button>
      <p>Total Amount to be Paid: {totalAmount}</p>
    </div>
    </div>
  );
};

export default Ticket;
