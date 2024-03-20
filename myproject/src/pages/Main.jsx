import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Main.css';
import { FaUserPlus } from "react-icons/fa";
import { GrUserSettings } from "react-icons/gr";

const MainPage = () => {
    const [selectedRole, setSelectedRole] = useState(null);
    const imgGif = '';
    return (
        <div className="main-page-container">
            <div className='mainpageright'>
                <img src={imgGif} className='imgGif' alt='gif' />
            </div>
            <div className='mainpageleft'>
                <h2>Golden Years Companion!!!</h2>
                <div className="additional-content">
                    <br></br>
                    <p>
                        Golden Years Companion is here to make your experience better.
                        <br></br>
                       
                    </p>
                    <br></br>
                    <h2>Please select your role</h2>

                    <div className='main-buttons'>
                        <div className="button-container">
                            <Link to="/Admin_Login">
                                <button className="admin-button" onClick={() => setSelectedRole('admin')}>
                                    <GrUserSettings style={{ fontSize: '1.5rem', color: "white" }} />
                                    <span style={{fontSize:"100",color:'white'}}>Admin</span>
                                </button>
                            </Link>{' '}

                            <Link to="/UserHome">
                                <button className="user-button" onClick={() => setSelectedRole('user')}>
                                    <FaUserPlus style={{ fontSize: '1.5rem' }} />
                                    <span style={{fontSize:"100",color:'white'}}>User</span>
                                </button>
                            </Link>
                        </div>
                    </div>
                    <br></br>
                    
                </div>
            </div>

        </div>
    );
};

export default MainPage;
