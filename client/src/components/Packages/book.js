import React, { useState } from 'react';
import { useNavigation } from 'react-router-dom';

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

  const navigation = useNavigation();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBookingData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform booking submission logic here
    // You can send the bookingData to your API or perform any other necessary action

    // Redirect to a success page or display a success message
    navigation.navigate('BookingSuccess');
  };

  return (
    <div>
      <h2>Book Now</h2>
      <form onSubmit={handleSubmit}>
        <div>
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