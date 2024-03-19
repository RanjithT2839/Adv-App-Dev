import React, { useState } from 'react';
import '../assets/css/ViewBooking.css';

function AdminViewBook() {
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
      status: 'pending'
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
      status: 'on-going'
    }
  ]);
  const [editingBooking, setEditingBooking] = useState(null);

  const handleEdit = (bookingId) => {
    const bookingToEdit = bookings.find((booking) => booking.bookingId === bookingId);
    setEditingBooking(bookingToEdit);
  };

  const handleCancelEdit = () => {
    setEditingBooking(null);
  };

  const handleSaveEdit = (updatedBooking) => {
    setBookings((prevBookings) => {
      return prevBookings.map((booking) =>
        booking.bookingId === updatedBooking.bookingId ? updatedBooking : booking
      );
    });

    setEditingBooking(null);
  };

  return (
    <div className="back">
      <div className="overlay8"></div>

      <div className="bookingform">
        <h2>VIEW BOOKING FORM</h2>
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
                    {editingBooking === booking ? (
                      <>
                        <EditBookingForm booking={booking} onSave={handleSaveEdit} onCancel={handleCancelEdit} />
                      </>
                    ) : (
                      <button onClick={() => handleEdit(booking.bookingId)}>Edit</button>
                    )}
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

function EditBookingForm({ booking, onSave, onCancel }) {
  const [updatedBooking, setUpdatedBooking] = useState({ ...booking });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedBooking((prevBooking) => ({
      ...prevBooking,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(updatedBooking);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Status: </label>
        <select name="status" value={updatedBooking.status} onChange={handleChange} disabled={booking.status === 'completed'}>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
          <option value="on-going">On-going</option>
        </select>

        <button type="submit">Save</button>
        <button type="button" onClick={onCancel}>Cancel</button>
      </form>
    </div>
  );
}

export default AdminViewBook;
