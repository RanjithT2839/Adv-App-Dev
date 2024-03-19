import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../assets/css/ViewService.css';

const AvailableService = () => {
    const [services, setServices] = useState([
        {
            serviceType: 'Cleaning',
            serviceDescription: 'Home cleaning service',
            charge: '$50',
            duration: '2 hours',
            available: true,
            image: 'https://www.ecomaids.com/northfield-oh/wp-content/uploads/sites/33/2021/02/EcomaidsWideCounter1080-768x768-1.jpg'
        },
        {
            serviceType: 'Cooking',
            serviceDescription: 'Meal preparation service',
            charge: '$30',
            duration: '1 hour',
            available: false,
            image: 'https://images.pexels.com/photos/5093677/pexels-photo-5093677.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            serviceType: 'Gardening',
            serviceDescription: 'Garden maintenance service',
            charge: '$40',
            duration: '1.5 hours',
            available: true,
            image: 'https://images.pexels.com/photos/5231088/pexels-photo-5231088.jpeg?auto=compress&cs=tinysrgb&w=600  '
        }
    ]);

    return (
        <div className="container my-3 py-3">
            <h2 className="display-5 text-center">Latest Services</h2>
            <hr />
            <div className="services-grid">
                {services.map((service, index) => (
                    <div className="card" style={{ width: "18rem" }} key={index}>
                        <img className="card-img-top" src={service.image} alt="Service" />
                        <div className="card-body">
                            <h5 className="card-title">{service.serviceType}</h5>
                            <p className="card-text">{service.serviceDescription}</p>
                        </div>
                        <ul className="list-group list-group-flush" style={{ marginTop: '10px' }}>
                            <li className="list-group-item">Duration: {service.duration}</li>
                            <li className="list-group-item">Charges: {service.charge}</li>
                            <li className="list-group-item">Available: {service.available ? 'Yes' : 'No'}</li>
                        </ul>
                        <div className="card-body">
                            {service.available ? (
                                <Link to='/BookService' className="card-link">
                                    <button className="btn btn-dark">Book now</button>
                                </Link>
                            ) : (
                                <button className="btn btn-dark" disabled>Booking not available</button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            <Link to='/UserDashboard'>
                <button style={{ width: "100px", float: "right", backgroundColor: "green", color: "white" }}>Back to Dashboard</button>
            </Link>
        </div>
    );
};

export default AvailableService;
