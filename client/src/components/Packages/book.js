import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './book.css'

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

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBookingData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Perform booking submission logic here
      // You can send the bookingData to your API or perform any other necessary action
      const response = await fetch('/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
      });
  
      if (response.ok) {
        // Redirect to a success page or display a success message
        navigate('/booking-success');
      } else {
        // Handle error case
        console.error('Booking submission failed');
      }
    } catch (error) {
      console.error('Booking submission error:', error);
    }
  };
  return (
    <div className='book-now-container'>
      <h2>Book Now</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={bookingData.firstName}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={bookingData.lastName}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={bookingData.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={bookingData.phone}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="checkInDate">Check-in Date:</label>
          <input
            type="date"
            id="checkInDate"
            name="checkInDate"
            value={bookingData.checkInDate}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="checkOutDate">Check-out Date:</label>
          <input
            type="date"
            id="checkOutDate"
            name="checkOutDate"
            value={bookingData.checkOutDate}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="adults">No. of Adults:</label>
          <input
            type="number"
            id="adults"
            name="adults"
            value={bookingData.adults}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="children">No. of Children:</label>
          <input
            type="number"
            id="children"
            name="children"
            value={bookingData.children}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="tripPreference">Trip Preference:</label>
          <textarea
            id="tripPreference"
            name="tripPreference"
            value={bookingData.tripPreference}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Book Now</button>
      </form>
    </div>
  );
};

export default BookNow;