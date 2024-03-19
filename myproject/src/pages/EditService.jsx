// EditService.jsx
import React, { useState } from 'react';
import '../assets/css/EditService.css';

function EditService({ service, onSave }) {
    const [editedService, setEditedService] = useState(service);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedService({ ...editedService, [name]: value });
    };

    const handleSaveChanges = () => {
        onSave(editedService);
    };

    return (
        <div className="edit-service">
            <h1>Edit Service</h1>
            <form>
                <div className="form-group">
                    <label htmlFor="serviceType">Service Type:</label>
                    <input
                        type="text"
                        id="serviceType"
                        name="serviceType"
                        value={editedService.serviceType}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="serviceDescription">Service Description:</label>
                    <textarea
                        id="serviceDescription"
                        name="serviceDescription"
                        value={editedService.serviceDescription}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="charge">Charge:</label>
                    <input
                        type="number"
                        id="charge"
                        name="charge"
                        value={editedService.charge}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="duration">Duration:</label>
                    <input
                        type="text"
                        id="duration"
                        name="duration"
                        value={editedService.duration}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="available">Service Availability:</label>
                    <select
                        id="available"
                        name="available"
                        value={editedService.available}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Availability</option>
                        <option value="Available">Available</option>
                        <option value="Not Available">Not Available</option>
                    </select>
                </div>

                <button type="button" onClick={handleSaveChanges}>
                    Save Changes
                </button>
            </form>
        </div>
    );
}

export default EditService;
