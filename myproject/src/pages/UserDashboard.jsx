import React from 'react';
import '../assets/css/UserDashboard.css';
import { Link } from 'react-router-dom';

const UserDashboard = () => {

    const book = 'https://cdn-production.checkfront.com/wp-content/uploads/2022/05/better-online-booking.jpg';
    const edit = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScq7UsPxr54m3DgUyO6TkhEYl6dp29GEZAFA&usqp=CAU';
    const del = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgpjYe34rYLom9yu4oM_PShryZrLVq5DB66I4AnNoYki1ZxWO1BatLsGwyIRLDmN-Rb7U&usqp=CAU';
    const history = 'https://cdn.pixabay.com/photo/2016/03/31/19/50/checklist-1295319_1280.png';
    const profile = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStjt304IEFaJ1QzAbNkeifMxnd5Q6Alxl59mx1hkyPhQOdla4gaIBBZQLOqqMwA9EcOp8&usqp=CAU';

    return (
        <div className="dashboard-container">
            <div className="image-container">
                <img src="https://t3.ftcdn.net/jpg/04/81/63/56/360_F_481635623_LYdEwpGr7aROuaofgwCAz1l2JAAD9pvK.jpg" style={{ border: '50%' }} alt="Left Side Image" />
            </div>
            <div className="user-info">
                <div className='usercontent' >
                    <div className='logout' style={{ width: '20%',marginLeft:"30rem"}}>
                        <Link to='/Main' style={{ textDecoration: 'none' }}>
                            <div className="card">
                                <p>Logout</p>
                            </div>
                        </Link>
                    </div>
                    <h3 style={{ fontSize: '200' }}>Personalized dashboard to experience the feature,..</h3>

                    <div className="appointments">
                        <h3 style={{ marginTop: '20px' }}>Services</h3>
                        <br></br>
                        <ul>
                        <Link to='/AvailableService' className='dashboardlink'>
                                <li >
                                    <div className="card">
                                        <img src={book} alt="Service Available" />
                                        <p>Available Service</p>
                                    </div>
                                </li>
                            </Link>
                            <Link to='/BookService' className='dashboardlink'>
                                <li >
                                    <div className="card">
                                        <img src={book} alt="Book Service" />
                                        <p >Book Service</p>
                                    </div>
                                </li>
                            </Link>
                            <Link to='/ViewBooking' className='dashboardlink'>
                                <li>
                                    <div className="card">
                                        <img src={edit} alt="Edit Booking" />
                                        <p>View Booking</p>
                                    </div>
                                </li>
                            </Link>
                        </ul>
                    </div>
                    <div className="quick-links">
                        <h3>Quick Links</h3><br></br>
                        <ul>
                            <Link to='/BookingHistory' className='dashboardlink'>
                                <li>
                                    <div className="card">
                                        <img src={history} alt="Booking History" style={{ height: '13rem', width: '20rem', marginLeft: 'auto', marginRight: 'auto', display: 'block' }} />
                                        <p>Booking History</p>
                                    </div>
                                </li>
                            </Link>
                            <Link to='/Profile' className='dashboardlink'>
                                <li>
                                    <div className="card">
                                        <img src={profile} alt="Update Profile" style={{ height: '13rem', width: '15rem', marginLeft: 'auto', marginRight: 'auto', display: 'block' }} />
                                        <p>Update Profile</p>
                                    </div>
                                </li>
                            </Link>
                        </ul>
                    </div>
                    <h2 style={{ paddingRight: '10rem', marginRight: "15px" }}>No longer, they can take care of themselves,..</h2>
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;
