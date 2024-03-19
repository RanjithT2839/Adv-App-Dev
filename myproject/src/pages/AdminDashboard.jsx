import '../assets/css/AdminDashboard.css'
import { Link } from 'react-router-dom';

function AdminDashboard() {
  return (
    <div id="AdminDashboard">
      <section className="hero">
        <div className='overlay4'></div>
        <div className="background-image"></div>
        <div className="hero-content-area">
          <h1 style={{ color: 'antiquewhite' }}>Empowering Aging Gracefully: Your Home, Your Health, Our Care</h1>
          <h3 style={{ color: "azure" }}>Tailored Home Care Solutions for Every Senior Journey</h3>
          <p className='heading'>SERVICES</p>
          <Link to="/AddService"><a className="btn">POST SERVICES</a></Link>
          <Link to="/ViewService"><a className="btn">View SERVICES</a></Link>
          <br></br>
          <p className='heading1'>BOOKINGS</p>
          <Link to="/AdminViewBook"><a className="btn">VIEW BOOKINGS</a></Link>
        </div>
      </section>
    </div>
  );
}

export default AdminDashboard;