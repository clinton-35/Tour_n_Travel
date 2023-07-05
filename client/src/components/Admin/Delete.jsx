import React, { useState } from 'react';

const Delete = () => {
  const [formData, setFormData] = useState({
    name: '',
    image_url: '',
    package_id: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    fetch(`http://127.0.0.1:3000/destinations/1`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        setIsLoading(false);
        if (response.ok) {
          setSuccessMessage('Delete operation successful.');
          setErrorMessage('');
        } else {
          setSuccessMessage('');
          return response.json().then((err) => setErrorMessage(err.message));
        }
      })
      .catch((error) => {
        setIsLoading(false);
        setSuccessMessage('');
        setErrorMessage('An error occurred while deleting.');
        console.error(error);
      });
  };

  return (
    <div className="Delete">
      <div className="container my-5">
        <div className="col-md-8 mx-auto delete h-100">
          <div
            className="card shadow px-3 py-5"
            style={{ width: '600px', backgroundColor: '#E8F9FD' }}
          >
            <h2 className="card-title text-center">Delete Destination</h2>
            <form onSubmit={handleSubmit} className="vstack gap-2">
              <label htmlFor="name">Name:</label>
              <input
                className="form-control"
                type="text"
                id="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
              />
              <label htmlFor="image_url">Image:</label>
              <input
                className="form-control"
                type="text"
                id="image_url"
                placeholder="Image URL"
                value={formData.image_url}
                onChange={handleInputChange}
              />
              <label htmlFor="package_id">Package ID:</label>
              <input
                className="form-control"
                type="text"
                id="package_id"
                placeholder="Package ID"
                value={formData.package_id}
                onChange={handleInputChange}
              />
              <button className="btn btn-primary" type="submit">
                Delete
              </button>
              {isLoading && <p>Loading...</p>}
              {successMessage && <p className="text-success">{successMessage}</p>}
              {errorMessage && <p className="text-danger">{errorMessage}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delete;
