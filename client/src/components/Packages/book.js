import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './book.css';

const BookNow = () => {
  const [bookingData, setBookingData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    checkInDate: '',
    checkOutDate: '',
    adults: '',
    children: '',
    tripPreference: '',
  });

  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBookingData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
      });

      if (response.ok) {
        navigate('/booking-success');
      } else {
        const responseData = await response.json();
        if (responseData.errors) {
          setErrors(responseData.errors);
        } else {
          console.error('Booking submission failed');
        }
      }
    } catch (error) {
      console.error('Booking submission error:', error);
    }
  };

  return (
    <div className='book-now-container'>
      <h2>Book Now</h2>
      {errors.length > 0 && (
        <div className='error-container'>
          <ul>
            {errors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='firstName'>First Name:</label>
          <input
            type='text'
            id='firstName'
            name='firstName'
            value={bookingData.firstName}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor='lastName'>Last Name:</label>
          <input
            type='text'
            id='lastName'
            name='lastName'
            value={bookingData.lastName}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            id='email'
            name='email'
            value={bookingData.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor='phone'>Phone:</label>
          <input
            type='text'
            id='phone'
            name='phone'
            value={bookingData.phone}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor='checkInDate'>Check-in Date:</label>
          <input
            type='date'
            id='checkInDate'
            name='checkInDate'
            value={bookingData.checkInDate}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor='checkOutDate'>Check-out Date:</label>
          <input
            type='date'
            id='checkOutDate'
            name='checkOutDate'
            value={bookingData.checkOutDate}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor='adults'>No. of Adults:</label>
          <input
            type='number'
            id='adults'
            name='adults'
            value={bookingData.adults}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor='children'>No. of Children:</label>
          <input
            type='number'
            id='children'
            name='children'
            value={bookingData.children}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor='tripPreference'>Trip Preference:</label>
          <textarea
            id='tripPreference'
            name='tripPreference'
            value={bookingData.tripPreference}
            onChange={handleInputChange}
          />
        </div>
        <button type='submit'>Book Now</button>
      </form>
    </div>
  );
};

export default BookNow;