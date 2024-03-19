import { LuMenuSquare } from "react-icons/lu";
import { FaBars} from "react-icons/fa";
import "../assets/css/UserNavbar.css";
import React, { useRef } from 'react';
import { Link } from "react-router-dom";

function UserNavbar() {
    const navRef = useRef();

    const toggleMenu = () => {
        navRef.current.classList.toggle("show");
    };

    const closeMenu = () => {
        navRef.current.classList.remove("show");
    };

    const logoUrl = 'https://thumbs.dreamstime.com/b/elderly-caring-nurse-home-care-logo-design-vector-symbol-graphic-concept-business-roof-hand-house-real-sweet-illustration-168953811.jpg';

    return (
        <div className="navheader">
            <img src={logoUrl} className="userlogo" alt="logo" />
            <div>
      <header>
      <nav style={{float:'right'}}>
        <li><a className="list" href="#AdminHome">Home</a></li>
        <li><a className="list" href="#Service">Services</a></li>
        <li><a className="list" href="#Providers">Providers</a></li>
        <li><a className="list" href="#AdminAbout">About</a></li>
        <li><a className="list" href="#Contact">Contact</a></li>
        <li><Link to='/AdminDashboard' className="list">Menu</Link></li>
        <li><Link to='/Main' className="list">Logout</Link></li>
      </nav>
    </header>
          </div>
            <button
                className="nav-btn"
                onClick={toggleMenu}>
                <FaBars />
            </button>
        </div>
    );
}

export default UserNavbar;
