import { useState } from 'react';
import '../assets/css/AddService.css';
import { Link, useNavigate } from 'react-router-dom';

const AddService = () => {
  const [formData, setFormData] = useState({
    serviceType: '',
    serviceDescription: '',
    charge: '',
    duration: '',
    available: '',
    image: ''
  });
  const [errors, setErrors] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    if (!formData.serviceType) {
      newErrors.serviceType = 'Service Type is required';
      valid = false;
    }

    if (!formData.serviceDescription) {
      newErrors.serviceDescription = 'Service Description is required';
      valid = false;
    }

    if (!formData.charge) {
      newErrors.charge = 'Charge is required';
      valid = false;
    }

    if (!formData.duration) {
      newErrors.duration = 'Duration is required';
      valid = false;
    }

    if (!formData.available) {
      newErrors.available = 'Availability is required';
      valid = false;
    }

    if (!formData.image) {
      newErrors.image = 'Image address is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      try {
        // Simulate a successful submission
        console.log('Service added!');
        setFormData({
          serviceType: '',
          serviceDescription: '',
          charge: '',
          duration: '',
          available: '',
          image: ''
        });
        setIsSuccess(true);
        setErrors({});
      } catch (error) {
        console.error('Form submission failed:', error);
        setErrors({ submit: 'Failed to add service. Please try again.' });
        setIsSuccess(false);
      }
    } else {
      console.log('Form validation failed');
      setIsSuccess(false);
    }
  };

  return (
    <div className="background">
      <div className='overlay8'></div>

      <div className="booking-form">
        <h2>ADD SERVICE FORM</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="serviceType">Service Type</label>
            <input type="text" name="serviceType" id="serviceType" value={formData.serviceType} onChange={handleChange} required />
            {errors.serviceType && <span className="error">{errors.serviceType}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="serviceDescription">Service Description</label>
            <textarea name="serviceDescription" id="serviceDescription" value={formData.serviceDescription} onChange={handleChange} rows='2' style={{ height: '50px' }} required />
            {errors.serviceDescription && <span className="error">{errors.serviceDescription}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="charge">Charge</label>
            <input type="number" name="charge" id="charge" value={formData.charge} onChange={handleChange} required />
            {errors.charge && <span className="error">{errors.charge}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="duration">Duration</label>
            <input type="text" name="duration" id="duration" value={formData.duration} onChange={handleChange} required />
            {errors.duration && <span className="error">{errors.duration}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="available">Availability</label>
            <input type="text" name="available" id="available" value={formData.available} onChange={handleChange} required />
            {errors.available && <span className="error">{errors.available}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="image">Image address</label>
            <input type="text" name="image" id="image" value={formData.image} onChange={handleChange} required />
            {errors.image && <span className="error">{errors.image}</span>}
          </div>

          {isSuccess && <div className="success-message">Service added successfully!</div>}
          {errors.submit && <div className="error-message">{errors.submit}</div>}

          <button type="submit">Add Service</button>
          <Link to='/AdminDashboard'><button type='button'>Back to Dashboard</button></Link>
        </form>
      </div>
    </div>
  );
};

export default AddService;
