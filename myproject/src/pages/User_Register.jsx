import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/css/User_Register.css';

const User_Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    mobileNumber: '',
  });

  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let formErrors = {};

    if (!formData.name.trim()) {
      formErrors.name = 'Username is required';
    }

    if (!formData.email.trim()) {
      formErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      formErrors.email = 'Invalid email address';
    }

    if (!formData.password.trim()) {
      formErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      formErrors.password = 'Password must be at least 6 characters';
    }

    if (formData.confirmPassword !== formData.password) {
      formErrors.confirmPassword = 'Passwords must match';
    }

    if (!formData.mobileNumber.trim()) {
      formErrors.mobileNumber = 'Phone number is required';
    } else if (!/^[0-9]*$/.test(formData.mobileNumber)) {
      formErrors.mobileNumber = 'Invalid phone number';
    }

    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formErrors = validateForm();

    if (Object.keys(formErrors).length === 0) {
      // Simulating successful registration without backend
      console.log('Simulating successful registration...');
      navigate('/User_Login');
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className='register'>
      <div className='userregistration' style={{ paddingBottom: '6.5rem' }}>
        <form onSubmit={handleSubmit}>
          <h1 style={{ color: 'black', marginTop: '5rem' }}>Register</h1>

          <div className='userregistrationinputbox'>
            <label htmlFor='name'></label>
            <input
              type='text'
              id='name'
              name='name'
              placeholder='Username'
              style={{ border: '2px solid black' }}
              value={formData.name}
              onChange={handleChange}
              required
            />
            {errors.name && (
              <div className='error-message' style={{ color: 'black' }}>
                {errors.name}
              </div>
            )}
          </div>

          <div className='userregistrationinputbox'>
            <label htmlFor='email'></label>
            <input
              type='email'
              id='email'
              name='email'
              placeholder='email'
              style={{ border: '2px solid black' }}
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && (
              <div className='error-message' style={{ color: 'black' }}>
                {errors.email}
              </div>
            )}
          </div>

          <div className='userregistrationinputbox'>
            <label htmlFor='password'></label>
            <input
              type='password'
              id='password'
              name='password'
              placeholder='Password'
              value={formData.password}
              style={{ border: '2px solid black' }}
              onChange={handleChange}
              required
            />
            {errors.password && (
              <div className='error-message' style={{ color: 'black' }}>
                {errors.password}
              </div>
            )}
          </div>

          <div className='userregistrationinputbox'>
            <label htmlFor='confirmPassword'></label>
            <input
              type='password'
              id='confirmPassword'
              name='confirmPassword'
              placeholder='Confirm Password'
              style={{ border: '2px solid black' }}
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            {errors.confirmPassword && (
              <div className='error-message' style={{ color: 'black' }}>
                {errors.confirmPassword}
              </div>
            )}
          </div>

          <div className='userregistrationinputbox'>
            <label htmlFor='mobileNumber'></label>
            <input
              type='tel'
              id='mobileNumber'
              name='mobileNumber'
              placeholder='Mobile number'
              style={{ border: '2px solid black' }}
              value={formData.mobileNumber}
              onChange={handleChange}
              required
            />
            {errors.mobileNumber && (
              <div className='error-message' style={{ color: 'black' }}>
                {errors.mobileNumber}
              </div>
            )}
          </div>

          <button className='userregistrationbutton' style={{ backgroundColor: 'blue', color: 'white' }} type='submit'>
            Register
          </button>

          <div className='login-link' style={{ marginTop: '60px' }}>
            <p>
              Already have an account? <Link to='/User_Login'>Login</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default User_Register;
