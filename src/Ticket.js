import React, { useState } from 'react';
import axios from 'axios';

const Ticket = () => {
  const [numTickets, setNumTickets] = useState(0);
  const [ticketPrice, setTicketPrice] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const handleCalculateTotal = () => {
    const total = numTickets * ticketPrice;
    setTotalAmount(total);
  };

  const handleBookTickets = async () => {
    try {
      // Assuming you have an API endpoint to book tickets
      const response = await axios.post('http://your-api-endpoint/book-tickets', {
        numTickets: numTickets,
        ticketPrice: ticketPrice,
      });
      // Assuming your server responds with the booking confirmation
      console.log('Booking confirmation:', response.data);
      // You can show a success message or navigate to another page on successful booking
    } catch (error) {
      console.error('Ticket booking failed:', error);
      // You can show an error message to the user
    }
  };

  return (
    <div>
      <h2>Ticket Booking</h2>
      <p>
        Number of Tickets:
        <input type="number" value={numTickets} onChange={(e) => setNumTickets(e.target.value)} />
      </p>
      <p>
        Ticket Price:
        <input type="number" value={ticketPrice} onChange={(e) => setTicketPrice(e.target.value)} />
      </p>
      <button onClick={handleCalculateTotal}>Calculate Total</button>
      <p>Total Amount to be Paid: {totalAmount}</p>
      <button onClick={handleBookTickets}>Book Tickets</button>
    </div>
  );
};

export default Ticket;
