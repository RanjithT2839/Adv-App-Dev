import React, { useState } from 'react';
import '../assets/css/DeleteBooking.css';

const DeleteBooking = () => {
  const [serviceSearch, setServiceSearch] = useState('');
  const [bookings, setBookings] = useState([
    // Initialize bookings with your initial data
    { id: 1, service: 'nursing' },
    { id: 2, service: 'gardening' },
    // Add more bookings as needed
  ]);

  const handleServiceSearchChange = (e) => {
    setServiceSearch(e.target.value);
  };

  const handleDeleteBooking = () => {
    const updatedBookings = bookings.filter(
      (booking) => booking.service.toLowerCase() !== serviceSearch.toLowerCase()
    );
    setBookings(updatedBookings);
    alert('Booking successfully deleted!');
  };

  return (
    <div className='deletebooking'>
      <div className="booking-delete-form">
        <h2>Booking Delete Form</h2>
        <form>
          <label htmlFor="serviceSearch">Search Service :</label>
          <input
            type="text"
            id="serviceSearch"
            value={serviceSearch}
            placeholder='enter the service'
            onChange={handleServiceSearchChange}
          />
          <button type="button" onClick={handleDeleteBooking} className='deletebookingbutton'>
            Delete Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default DeleteBooking;
