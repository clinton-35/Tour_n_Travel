import React, { useState } from 'react';

const Create = () => {
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
    fetch('/api/items', {
      method: 'POST',
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
    <div className="create">
      <h2>Create Item</h2>
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
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default Create;
