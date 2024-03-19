import React, { useState } from 'react';
import '../assets/css/About.css';

const AdminAbout = () => {
    const initialContent = {
        aboutUs: "Welcome to Golden Home Healthcare, where we are dedicated to providing exceptional home care services for seniors. Our focus is on ensuring the comfort, dignity, and well-being of your loved ones as they age in place.",
        mission: "Our mission is to deliver personalized and compassionate care that enhances the quality of life for seniors. We believe in creating a supportive environment where seniors can thrive and maintain their independence with dignity.",
        expertise: "Golden Home Healthcare is distinguished by its dedicated team of caregivers who are committed to providing reliable and respectful care. We tailor our services to meet the unique needs of each senior, fostering a sense of trust and companionship."
    };

    const [content, setContent] = useState(initialContent);
    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        // You can save the updated content to your backend or perform any other necessary actions here
        setIsEditing(false);
    };

    const handleInputChange = (event, key) => {
        setContent({ ...content, [key]: event.target.value });
    };

    return (
        <div className='aboutus' id='AdminAbout'>
            <div className="about-us-container">
                <div className="about-us-image" style={{ marginLeft: "-200px" }}>
                    <img
                        src="https://t3.ftcdn.net/jpg/03/19/94/76/360_F_319947627_CFEw9yXLkP2Aw6x6ylawmgKYgIG13nc5.jpg"
                        alt="Home Care Logo"
                        style={{ width: '30rem', height: '30rem', borderRadius: '50%', marginTop: '5rem' }}
                    />
                    {isEditing ? (
                        <button onClick={handleSaveClick} className='editabout'>Save Changes</button>
                    ) : (
                        <button onClick={handleEditClick} className='editabout'>Edit Content</button>
                    )}
                </div>
                <div className="about-us-content">
                    <div className="about-us-row" style={{ marginRight: '-10rem' }}>
                        <div className={`about-us-card ${isEditing && content.aboutUs !== initialContent.aboutUs ? 'edited' : ''}`}>
                            <h1 style={{ marginTop: '10px', color: 'black' }}>About Us,..</h1>
                            {isEditing ? (
                                <textarea
                                    value={content.aboutUs}
                                    onChange={(e) => handleInputChange(e, 'aboutUs')}
                                />
                            ) : (
                                <p style={{ color: 'black', lineHeight: '1.5', textAlign: 'center', margin: '20px 0', padding: "20px" }}>
                                    {content.aboutUs}
                                </p>
                            )}
                        </div>
                        <div className={`about-us-card ${isEditing && content.mission !== initialContent.mission ? 'edited' : ''}`} style={{ marginRight: '-25px' }}>
                            <h1 style={{ marginTop: '10px', color: 'black' }}>Our Mission,..</h1>
                            {isEditing ? (
                                <textarea
                                    value={content.mission}
                                    onChange={(e) => handleInputChange(e, 'mission')}
                                />
                            ) : (
                                <p style={{ color: 'black', lineHeight: '1.5', textAlign: 'center', margin: '20px 0' }}>
                                    {content.mission}
                                </p>
                            )}
                        </div>
                    </div>
                    <div className="about-us-row">
                        <div className={`about-us-card ${isEditing && content.expertise !== initialContent.expertise ? 'edited' : ''}`} style={{ marginLeft: '16rem' }}>
                            <h1 style={{ marginTop: '30px', color: 'black' }}>Why Trust Our Expertise,..</h1>
                            {isEditing ? (
                                <textarea
                                    value={content.expertise}
                                    onChange={(e) => handleInputChange(e, 'expertise')}
                                />
                            ) : (
                                <p style={{ color: 'black', lineHeight: '1.8', textAlign: 'center', margin: '20px 0', padding: "10px" }}>
                                    {content.expertise}
                                </p>
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AdminAbout;
