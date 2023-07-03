import React, { useState } from 'react';

const Read = () => {
  const [formData, setFormData] = useState({
    // Initialize form fields and their values
    title: '',
    description: '',
    // Add more fields as needed
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send form data to the back end for creating
    fetch('http//localhost/api/items', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle success or display error message
      })
      .catch((error) => {
        // Handle error
      });
  };

  return (
    <div>
      <h2>Read Item</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          placeholder="Title"
        />
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          placeholder="Description"
        />
        {/* Add more input fields as needed */}
        <button type="submit">Read</button>
      </form>
    </div>
  );
};

export default Read;