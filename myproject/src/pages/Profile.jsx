import React, { useState } from 'react';
import '../assets/css/Profile.css';

const Profile = () => {
  const [userData, setUserData] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    mobileNumber: '123-456-7890'
  });
  const [isEditing, setEditing] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({ ...prevUserData, [name]: value }));
  };

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveClick = () => {
    // Handle saving data here, e.g., make API call
    console.log('User data updated successfully');
    setEditing(false);
  };

  return (
    <div className="profile-container">
      <img src='https://i.pinimg.com/564x/57/00/c0/5700c04197ee9a4372a35ef16eb78f4e.jpg' style={{ height: '15rem', width: '15rem', marginLeft: '3rem' }} alt="Profile" />
      <h1 style={{ marginTop: 0 }}>User Profile</h1>
      <form>
        <div className="field-box">
          <label htmlFor="name">User Name:</label>
          <input
            className="edit-input"
            type="text"
            id="name"
            name="name"
            value={userData.name}
            onChange={handleInputChange}
            disabled={!isEditing}
          />
        </div>

        <div className="field-box">
          <label htmlFor="email">Email:</label>
          <input
            className="edit-input"
            type="email"
            id="email"
            name="email"
            value={userData.email}
            onChange={handleInputChange}
            disabled={!isEditing}
          />
        </div>

        <div className="field-box">
          <label htmlFor="mobileNumber">Mobile Number:</label>
          <input
            className="edit-input"
            type="tel"
            id="mobileNumber"
            name="mobileNumber"
            value={userData.mobileNumber}
            onChange={handleInputChange}
            disabled={!isEditing}
          />
        </div>

        {isEditing ? (
          <button className="save-button" type="button" onClick={handleSaveClick}>
            Save
          </button>
        ) : (
          <button className="edit-button" type="button" onClick={handleEditClick}>
            Edit
          </button>
        )}
      </form>
    </div>
  );
};

export default Profile;
