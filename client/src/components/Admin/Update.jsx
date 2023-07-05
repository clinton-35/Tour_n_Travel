import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Update = () => {
  const { packageId } = useParams();
  const [packageList, setPackageList] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    image_url: '',
    package_id: '',
  });

  useEffect(() => {
    // Fetch the list of packages
    fetch('/packages')
      .then((response) => response.json())
      .then((data) => setPackageList(data))
      .catch((error) => console.error('Failed to fetch packages:', error));
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send form data to the back end for updating
    fetch(`/packages/${packageId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle success or display error message
        console.log('Update successful!', data);
      })
      .catch((error) => {
        // Handle error
        console.error('Update failed:', error);
      });
  };

  return (
    <div className='Update'>
      <div className="container my-5">
        <div className="col-md-8 mx-auto update h-100">
          <div
            className="card shadow px-3 py-5"
            style={{ width: "600px", backgroundColor: "#E8F9FD" }}
          >
            <h2 className="card-title text-center">Update Destination</h2>
            <div>
              {packageList.map((pkg) => (
                <div key={pkg.id}>
                  <h3>{pkg.name}</h3>
                  <form onSubmit={handleSubmit}>
                    <label htmlFor={`name_${pkg.id}`}>Name:</label>
                    <input
                      className="form-control"
                      type="text"
                      id={`name_${pkg.id}`}
                      name="name"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                    <label htmlFor={`image_url_${pkg.id}`}>Image URL:</label>
                    <input
                      className="form-control"
                      type="text"
                      id={`image_url_${pkg.id}`}
                      name="image_url"
                      placeholder="Image URL"
                      value={formData.image_url}
                      onChange={handleInputChange}
                    />
                    <label htmlFor={`package_id_${pkg.id}`}>Package ID:</label>
                    <input
                      className="form-control"
                      type="text"
                      id={`package_id_${pkg.id}`}
                      name="package_id"
                      placeholder="Package ID"
                      value={formData.package_id}
                      onChange={handleInputChange}
                    />
                    <button className="btn btn-primary" type="submit">
                      Update
                    </button>
                  </form>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Update;