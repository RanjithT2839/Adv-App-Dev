import React, { useState, useEffect } from 'react';
import '../assets/css/ViewBooking.css';

function ViewBooking() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editBookingId, setEditBookingId] = useState(null);
  const [editedBooking, setEditedBooking] = useState({});

  useEffect(() => {
    // Simulating fetching bookings data from backend
    const fetchBookings = async () => {
      // Simulating loading state
      setLoading(true);

      try {
        // Simulating fetching bookings data
        // const response = await axios.get(`http://localhost:8080/bookdto/get/${name}`);
        // setBookings(response.data);

        // Simulating setBookings with mock data
        setBookings([
          {
            bookingId: 1,
            name: 'John Doe',
            phoneNumber: '123-456-7890',
            serviceType: 'Cleaning',
            description: 'Cleaning service',
            date: '2024-03-20',
            duration: '2 hours',
            careBeneficiary: 'Self',
            address: '123 Main St',
            status: 'Pending'
          },
          // Add more mock bookings data as needed
        ]);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  const handleEdit = (bookingId, booking) => {
    setEditBookingId(bookingId);
    setEditedBooking({ ...booking }); // Make a copy of the booking object
  };

  const handleSaveChanges = async (bookingId) => {
    // Simulating saving changes to a booking
    // Replace this section with actual backend logic when integrated
    console.log('Saving changes for bookingId:', bookingId);
    console.log('Edited booking data:', editedBooking);

    // Simulating clear edit mode
    setEditBookingId(null);
    setEditedBooking({});
  };

  const handleDelete = async (bookingId) => {
    // Simulating deleting a booking
    // Replace this section with actual backend logic when integrated
    console.log('Deleting bookingId:', bookingId);

    // Simulating removing the booking from state
    setBookings(bookings.filter(booking => booking.bookingId !== bookingId));
  };

  const handleCancelEdit = () => {
    // Simulating canceling edit mode
    setEditBookingId(null);
    setEditedBooking({});
  };

  const handleChange = (e, field) => {
    setEditedBooking({ ...editedBooking, [field]: e.target.value });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="back">
      <div className="overlay8"></div>

      <div className="bookingform">
        <h2>VIEW BOOKING FORM</h2>
        <div className="row">
          {bookings.map((booking) => (
            <div key={booking.bookingId} className="col-sm-6" style={{ width: '18rem', backgroundColor: 'white', color: 'black' }}>
              <div className="card">
                <div className="card-body">
                  <div>
                    {editBookingId === booking.bookingId ? (
                      <div>
                        <label>User Name:</label>
                        <input
                          type="text"
                          value={editedBooking.name || booking.name}
                          onChange={(e) => handleChange(e, 'name')}
                          disabled
                        />
                        {/* Add more input fields for editing */}
                        <button onClick={() => handleSaveChanges(booking.bookingId)}>Save Changes</button>
                        <button onClick={handleCancelEdit}>Cancel</button>
                      </div>
                    ) : (
                      <div>
                        {/* Display booking details */}
                        <p>Booking Id: {booking.bookingId}</p>
                        <p>Name: {booking.name}</p>
                        {/* Display more booking details */}
                        <button onClick={() => handleEdit(booking.bookingId, booking)}>Edit</button>
                        <button onClick={() => handleDelete(booking.bookingId)}>Delete</button>
                      </div>
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

export default ViewBooking;
