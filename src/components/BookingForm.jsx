import React, { useState } from 'react';

/**
 * Booking Form Component
 * Handles user input for stadium booking with validation
 */
const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    sport: '',
    date: ''
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const sportOptions = ['Cricket', 'Football', 'Badminton'];

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Validate form inputs
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.sport) {
      newErrors.sport = 'Please select a sport';
    }

    if (!formData.date) {
      newErrors.date = 'Please select a date';
    } else {
      const selectedDate = new Date(formData.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      if (selectedDate < today) {
        newErrors.date = 'Please select a future date';
      }
    }

    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage('');

    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Success - show message and reset form
    setSuccessMessage(
      `Booking confirmed! ${formData.name}, your ${formData.sport} stadium is booked for ${formData.date}.`
    );
    setFormData({
      name: '',
      sport: '',
      date: ''
    });
    setErrors({});
  };

  return (
    <section className="booking-section" id="booking-form">
      <div className="booking-container">
        <h2 className="booking-title">Book Your Stadium</h2>
        <p className="booking-subtitle">Fill in the details below to reserve your spot</p>

        {successMessage && (
          <div className="success-message" role="alert">
            {successMessage}
          </div>
        )}

        <form className="booking-form" onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Full Name <span className="required">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className={`form-input ${errors.name ? 'error' : ''}`}
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              aria-required="true"
              aria-invalid={errors.name ? 'true' : 'false'}
            />
            {errors.name && <span className="error-message">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="sport" className="form-label">
              Sport Type <span className="required">*</span>
            </label>
            <select
              id="sport"
              name="sport"
              className={`form-input ${errors.sport ? 'error' : ''}`}
              value={formData.sport}
              onChange={handleChange}
              aria-required="true"
              aria-invalid={errors.sport ? 'true' : 'false'}
            >
              <option value="">Select a sport</option>
              {sportOptions.map((sport) => (
                <option key={sport} value={sport}>
                  {sport}
                </option>
              ))}
            </select>
            {errors.sport && <span className="error-message">{errors.sport}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="date" className="form-label">
              Booking Date <span className="required">*</span>
            </label>
            <input
              type="date"
              id="date"
              name="date"
              className={`form-input ${errors.date ? 'error' : ''}`}
              value={formData.date}
              onChange={handleChange}
              aria-required="true"
              aria-invalid={errors.date ? 'true' : 'false'}
            />
            {errors.date && <span className="error-message">{errors.date}</span>}
          </div>

          <button type="submit" className="submit-button">
            Submit Booking
          </button>
        </form>
      </div>
    </section>
  );
};

export default BookingForm;
