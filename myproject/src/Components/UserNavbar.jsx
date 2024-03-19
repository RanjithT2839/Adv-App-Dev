// import { FaBars, FaTimes } from "react-icons/fa";
// import "../assets/css/UserNavbar.css";
// import React, { useRef } from 'react';
// import { Link as ScrollLink } from 'react-scroll';
// import { Link } from "react-router-dom";

// function UserNavbar() {
//     const navRef = useRef();

//     const toggleMenu = () => {
//         navRef.current.classList.toggle("show");
//     };

//     const closeMenu = () => {
//         navRef.current.classList.remove("show");
//     };

//     const logoUrl = 'https://thumbs.dreamstime.com/b/elderly-caring-nurse-home-care-logo-design-vector-symbol-graphic-concept-business-roof-hand-house-real-sweet-illustration-168953811.jpg';

//     return (
//             <div className="navheader">
//                 <img src={logoUrl} className="userlogo" alt="logo" />
//                 <div className="navlink" ref={navRef} >
//                     <ul>
//                         <li>
//                         <ScrollLink to='UserHome' smooth={true} duration={500} onClick={closeMenu} className="usernavlink">Home</ScrollLink>     
//                         </li>
//                         <li>
//                         <ScrollLink to='Service' smooth={true} duration={500} onClick={closeMenu} className="usernavlink">Services</ScrollLink>
//                         </li>
//                         <li>
//                         <ScrollLink to='Providers' smooth={true} duration={500} onClick={closeMenu} className="usernavlink">Providers</ScrollLink>
//                         </li>
//                         <li>
//                         <ScrollLink to='About' smooth={true} duration={500} onClick={closeMenu} className="usernavlink">About Us</ScrollLink>
//                         </li>
//                         <li>
//                         <ScrollLink to='Contact' smooth={true} duration={500} onClick={closeMenu} className="usernavlink">Contact Us</ScrollLink>
//                         </li>
//                         <li>
//                         <Link to='/User_Login' className="usernavlink" onClick={closeMenu}>Login</Link>
//                         </li>
//                     </ul>
//                     <button
//                         className="nav-btn nav-close-btn"
//                         onClick={toggleMenu}>
//                         <FaTimes />
//                     </button>
//                 </div>
//                 <button
//                     className="nav-btn"
//                     onClick={toggleMenu}>
//                     <FaBars />
//                 </button>
//             </div>
//     );
// }

// export default UserNavbar;




import { FaBars} from "react-icons/fa";
import "../assets/css/UserNavbar.css";
import React,{ useRef } from 'react';
import { Link } from "react-router-dom";

function UserNavbar() {
    const navRef = useRef();

    const toggleMenu = () => {
        navRef.current.classList.toggle("show");
    };


    const logoUrl = 'https://thumbs.dreamstime.com/b/elderly-caring-nurse-home-care-logo-design-vector-symbol-graphic-concept-business-roof-hand-house-real-sweet-illustration-168953811.jpg';

    return (
        <div className="navheader">
            <img src={logoUrl} className="userlogo" alt="logo" />
            <div>
      <header>
      <nav style={{float:'right'}}>
        <li><a className="list" href="#UserHome">Home</a></li>
        <li><a className="list" href="#Service">Services</a></li>
        <li><a className="list" href="#Providers">Providers</a></li>
        <li><a className="list" href="#UserAbout">About</a></li>
        <li><a className="list" href="#Contact">Contact</a></li>
        <li><Link to='/User_Login' className="list">Login</Link></li>

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
