// ServiceList.jsx
import React from 'react';
import '../assets/css/ServiceList.css';

function ServiceList({ services, onEdit, onDelete }) {
    const handleEdit = (service) => {
        // Call the onEdit function with the service data
        onEdit(service);
    };

    const handleDelete = async (serviceType) => {
        try {
            // Call the onDelete function with the serviceType
            await onDelete(serviceType);
            // After successful deletion, update the UI
            // Here, we assume onDelete updates the services state
        } catch (error) {
            console.error('Error deleting service:', error);
        }
    };

    return (
        <div className="service-list">
            <table>
                <thead>
                    <tr>
                        <th>Service Type</th>
                        <th>Description</th>
                        <th>Charges</th>
                        <th>Timing</th>
                        <th>Service Availability</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {services.map((service) => (
                        <tr key={service.serviceType}>
                            <td>{service.serviceType}</td>
                            <td>{service.serviceDescription}</td>
                            <td>{service.charge}</td>
                            <td>{service.duration}</td>
                            <td>{service.available ? 'Available' : 'Not Available'}</td>
                            <td>
                                <button onClick={() => handleEdit(service)}>Edit</button>
                                {/* Pass serviceType to handleDelete */}
                                <button onClick={() => handleDelete(service.serviceType)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ServiceList;
