import React from 'react';
import '../assets/css/Service.css';
import { Link } from 'react-router-dom';

const Service = () => {

    const transport = 'https://cityfurnish.com/blog/wp-content/uploads/2023/08/healthy-positive-happy-woman-holding-paper-shopping-bag-full-fruit-vegetables-min.jpg';
    const postCare = 'https://images.squarespace-cdn.com/content/v1/5c8eb795f4e5317be3025d10/1563225487036-F5IEHL6VSKBX261QDSPD/carer-with-elderly-lady-walking-aids.jpg';
    const homecare = 'https://www.asiliahealthcare.com/wp-content/uploads/2020/07/8-1.jpg';
    const appliances = 'https://img.freepik.com/free-vector/flat-design-household-renovation-professions-concept_23-2148655549.jpg';
    const personalUrl = 'https://emis.imgix.net/emis-health/production/uploads/Life-Sciences/Happy-patient.jpg?ar=610%3A572&auto=compress%2Cformat&crop=focalpoint&fit=crop&fm=webp&fp-x=0.7224&fp-y=0.3345&w=800&s=8b83850ea03d39dc102a58216fd3a149';

    return (
            <div className='service' id='Service'>
                <div className="home-care-services">
                    <h1 style={{ color: 'black', marginLeft: '20rem', fontStyle: "italic", fontWeight: 'bold', paddingTop: '50px' }}>
                        Professional and Proficient <br></br><span style={{marginLeft:'25rem'}}>Nursing Services!!!</span></h1>
                    <div className="service">
                        
                        
                    </div>
                    <div className="service">
                        <div className="service-icon"><br></br>
                            <img src={personalUrl} alt="Service Icon 2" />
                        </div>
                        <div className="service-info">
                            <h2 style={{ color: 'black' }}>Personal Care Assistance</h2><br></br>
                            <p>Our caregivers offer personal care assistance to help seniors with daily activities and personal hygiene.</p>
                        </div>
                    </div>
                    <div className="service">
                        <div className="service-icon"><br></br>
                            <img src={homecare} alt="Service Icon 2" />
                        </div>
                        <div className="service-info">
                            <h2 style={{ color: 'black' }}>Home Care</h2><br></br>
                            <p>The biggest service and benefit that services provide is the increase in your senior's quality of life.
                                <br></br>Their goal is to keep your senior safe and comfortable while assuring you peace of mind.</p>
                        </div>
                    </div>
                    <div className="service">
                        <div className="service-icon"><br></br>
                            <img src={transport} alt="Service Icon 2" />
                        </div>
                        <div className="service-info">
                            <h2 style={{ color: 'black' }}>Transportation Service</h2><br></br>
                            <p>Go to all your appointments on time<br></br>
                                Run errands and get groceries for fresh home cooked meals<br></br>
                                Go to senior centers to socialize and get out of the home<br></br>
                                Go pick up medication at the pharmacy</p></div>
                    </div>
                    <div className="service">
                        <div className="service-icon"><br></br>
                            <img src={postCare} alt="Service Icon 2" />
                        </div>
                        <div className="service-info">
                            <h2 style={{ color: 'black' }}>Post-Hospital Care</h2><br></br>
                            <p>We truly believe we have the best team full of compassion caregivers<br></br> Our local caregivers are trained, background-checked, insured, and bonded.</p></div>
                    </div>
                </div>
                <Link to='/BookService' className="book-service-link">
                    <h1 style={{color:'black'}}>Book Service</h1>
                </Link>

            </div>
    );
};

export default Service;
