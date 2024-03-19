import React, { useState } from 'react';
import '../assets/css/ViewBooking.css';

function BookingHistory() {
  const [bookings, setBookings] = useState([
    {
      bookingId: 1,
      name: 'John Doe',
      phoneNumber: '123-456-7890',
      serviceType: 'Cleaning',
      description: 'Home cleaning service',
      date: '2024-03-19',
      duration: '2 hours',
      careBeneficiary: 'Elderly parent',
      address: '123 Main St, City, Country',
      status: 'completed'
    },
    {
      bookingId: 2,
      name: 'Jane Smith',
      phoneNumber: '456-789-0123',
      serviceType: 'Cooking',
      description: 'Meal preparation service',
      date: '2024-03-20',
      duration: '1 hour',
      careBeneficiary: 'Child',
      address: '456 Oak St, Town, Country',
      status: 'completed'
    }
  ]);

  return (
    <div className="back">
      <div className="overlay8"></div>

      <div className="bookingform">
        <h2>Booking History</h2>
        <div className="row">
          {bookings.map((booking) => (
            <div className="col-sm-6" style={{ width: '18rem', backgroundColor: 'white', color: 'black' }} key={booking.bookingId}>
              <div className="card">
                <div className="card-body">
                  <div>
                    <p>Booking Id: {booking.bookingId}</p>
                    <p>Name: {booking.name}</p>
                    <p>Phone Number: {booking.phoneNumber}</p>
                    <p>Service: {booking.serviceType}</p>
                    <p>Description: {booking.description}</p>
                    <p>Date: {booking.date}</p>
                    <p>Duration: {booking.duration}</p>
                    <p>Care Beneficiary: {booking.careBeneficiary}</p>
                    <p>Address: {booking.address}</p>
                    <p>Status: {booking.status}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BookingHistory;
