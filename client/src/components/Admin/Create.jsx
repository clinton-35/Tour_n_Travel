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
    <div className='Create'>
    <div className="container my-5">
      <div className="col-md-8 mx-auto create h-100">
        <div
          className="card shadow px-3 py-5"
          style={{ width: "600px", backgroundColor: "#E8F9FD" }}
        >
          <h2 className="card-title text-center">Create Destination</h2>
          <form className="vstack gap-2" >
            <label htmlFor="name">Name:</label>
            <input
              className="form-control"
              type="name"
              id="name"
              placeholder="Name"
              
              onChange={(e) => (e.target.value)}
            />
            <label htmlFor="image">Image:</label>
            <input
              className="form-control"
              type="image_url"
              id="image_url"
              placeholder="Image_url"
              
              onChange={(e) => (e.target.value)}
            />
            <label htmlFor="package_id">Package_id:</label>
            <input
              className="form-control"
              type="package_id"
              id="package_id"
              placeholder="Package_id"
              
              onChange={(e) => (e.target.value)}
            />
            <button className="btn btn-primary" type="submit">
              Create
            </button>
            
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Create;
