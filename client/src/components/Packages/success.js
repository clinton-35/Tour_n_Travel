import React from "react";
import './book.css';

const BookingSuccess = () => {
    return (
      <div className='success-card'>
        <div className='success-icon'>
          <i className='fas fa-check-circle'></i>
        </div>
        <h3>Booked Successfully!</h3>
        <p>You'll receive a confirmation email from us.</p>
      </div>
    );
  };
  export default BookingSuccess