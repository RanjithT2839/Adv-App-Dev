import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/Admin_Login.css';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const validateLogin = async (e) => {
    e.preventDefault();

    if (email === 'homecare123@gmail.com' && password === '1234') {
      localStorage.setItem('token', 'your_mocked_token'); // Mocked token
      navigate('/AdminHome');
    } else {
      setError('Invalid email or password.');
    }
  };

  return (
    <div className='admin'>
      <div className='adminlogin'>
        <form className='loginform'>
          <h2 style={{ fontFamily: 'italic', marginTop: '20px' }}>
            Admin Login
          </h2>
          {error && <div className="error">{error}</div>}
          <input
            type="text"
            className='adminInput'
            id="email"
            name="email"
            placeholder='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            className='adminInput'
            id="password"
            name="password"
            placeholder='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br /><br />
          <center>
            <button
              className="adminbutton"
              type="button"
              style={{ backgroundColor: 'green' }}
              onClick={(e) => validateLogin(e)}>
              Login
            </button>
          </center>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
