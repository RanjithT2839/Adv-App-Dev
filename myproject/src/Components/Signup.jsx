import React from 'react'
import'./Login.css';
import { Link } from 'react-router-dom';
function Signup() {
  return (
    <div><div className="login-box">
    <h2>Signup</h2>
    <form>
      <div className="user-box">
        <input type="text" name="" required="" />
        <label>Username</label>
      </div>
      <div className="user-box">
        <input type="password" name="" required="" />
        <label>Email Address</label>
      </div>
      <div className="user-box">
        <input type="password" name="" required="" />
        <label>Password</label>
      </div>
      <div className="user-box">
        <input type="password" name="" required="" />
        <label>Confirm Password</label>
      </div>
      <div className="user-box">
        <input type="password" name="" required="" />
        <label>Mobile Number</label>
      </div>
      <Link to="/login">
        <span />
        <span />
        <span />
        <span />
        Register
      </Link>
    </form>
  </div>
  </div>
  )
}

export default Signup