import React from 'react';
import '../assets/css/About.css';

const About = () => {
    return (
        <div className='aboutus' id='UserAbout'>
            <div className="about-us-container" >
                <div className="about-us-image" style={{marginLeft:"-200px"}}>
                    <img
                        src="https://t3.ftcdn.net/jpg/03/19/94/76/360_F_319947627_CFEw9yXLkP2Aw6x6ylawmgKYgIG13nc5.jpg"
                        alt="Home Care Logo"
                        style={{ width: '30rem', height: '30rem',borderRadius:'50%',marginTop:'5rem' }}
                    />
                </div>
                <div className="about-us-content">
                    <div className="about-us-row" style={{marginRight:'-10rem'}}>
                        <div className="about-us-card" >
                            <h1 style={{ marginTop: '10px', color: 'black' }}>About Us,..</h1>
                            <p style={{ color: 'black', lineHeight: '1.5', textAlign: 'center', margin: '20px 0',padding:"20px" }}>
                                Welcome to Golden Home Healthcare, where we are dedicated to providing exceptional home care services for seniors. Our focus is on ensuring the comfort, dignity, and well-being of your loved ones as they age in place.
                            </p>
                        </div>
                        <div className="about-us-card" style={{marginRight:'-25px'}}>
                            <h1 style={{ marginTop: '10px', color: 'black' }}>Our Mission,..</h1>
                            <p style={{ color: 'black', lineHeight: '1.5', textAlign: 'center', margin: '20px 0' }}>
                                Our mission is to deliver personalized and compassionate care that enhances the quality of life for seniors. We believe in creating a supportive environment where seniors can thrive and maintain their independence with dignity.
                            </p>
                        </div>
                    </div>
                    <div className="about-us-row">
                        <div className="about-us-card" style={{marginLeft:'16rem'}}>
                            <h1 style={{ marginTop: '30px', color: 'black' }}>Why Trust Our Expertise,..</h1>
                            <p style={{ color: 'black', lineHeight: '1.8', textAlign: 'center', margin: '20px 0',padding:"10px"  }}>
                                Golden Home Healthcare is distinguished by its dedicated team of caregivers who are committed to providing reliable and respectful care. We tailor our services to meet the unique needs of each senior, fostering a sense of trust and companionship.
                            </p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
    );
};

export default About;
