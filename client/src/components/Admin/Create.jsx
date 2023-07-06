import React, { useState, useContext } from 'react';
import { PostContext } from '../context/Postcontext';

const Create = () => {
  const { addPackage, addDestination } = useContext(PostContext);

  const [destinationFormData, setDestinationFormData] = useState({
    name: '',
    image_url: '',
    package_id: '',
  });
  const [packageFormData, setPackageFormData] = useState({
    name: '',
    location: '',
    description: '',
    durations: '',
    price: '',
    rating: '',
    image: '',
  });
  

  const handleDestinationInputChange = (e) => {
    setDestinationFormData({
      ...destinationFormData,
      [e.target.id]: e.target.value,
    });
  };

  const handlePackageInputChange = (e) => {
    setPackageFormData({
      ...packageFormData,
      [e.target.id]: e.target.value,
    });
  };

  const handleDestinationSubmit = (e) => {
    e.preventDefault();
    

    addDestination(
      destinationFormData.name,
      destinationFormData.image_url,
      destinationFormData.package_id
    )
      .then((response) => {
        
        console.log(response); // Handle the response data
      })
      .catch((error) => {
        console.error(error); // Handle any network or other errors
      });
  };

  const handlePackageSubmit = (e) => {
    e.preventDefault();
    

    addPackage(
      packageFormData.name,
      packageFormData.location,
      packageFormData.description,
      packageFormData.durations,
      packageFormData.price,
      packageFormData.rating,
      packageFormData.image
    )
      .then((response) => {
        
        console.log(response); // Handle the response data
      })
      .catch((error) => {
        console.error(error); // Handle any network or other errors
      });
  };

  return (
    
    <div className="Create">
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6">
          <div className="card shadow px-3 py-5 mb-4">
            <h2 className="card-title text-center">Create Destination</h2>
            <form onSubmit={handleDestinationSubmit} className="vstack gap-2">
              <label htmlFor="name">Name:</label>
              <input
                className="form-control"
                type="text"
                id="name"
                placeholder="Name"
                value={destinationFormData.name}
                onChange={handleDestinationInputChange}
              />
              <label htmlFor="image_url">Image:</label>
              <input
                className="form-control"
                type="text"
                id="image_url"
                placeholder="Image URL"
                value={destinationFormData.image_url}
                onChange={handleDestinationInputChange}
              />
              <label htmlFor="package_id">Package ID:</label>
              <input
                className="form-control"
                type="text"
                id="package_id"
                placeholder="Package ID"
                value={destinationFormData.package_id}
                onChange={handleDestinationInputChange}
              />
              <button className="btn btn-primary" type="submit">
                Create Destination
              </button>
            </form>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card shadow px-3 py-5">
            <h2 className="card-title text-center">Create Package</h2>
            <form onSubmit={handlePackageSubmit} className="vstack gap-2">
              <label htmlFor="name">Name:</label>
              <input
                className="form-control"
                type="text"
                id="name"
                placeholder="Name"
                value={packageFormData.name}
                onChange={handlePackageInputChange}
              />
              <label htmlFor="location">Location:</label>
              <input
                className="form-control"
                type="text"
                id="location"
                placeholder="Location"
                value={packageFormData.location}
                onChange={handlePackageInputChange}
              />
              <label htmlFor="description">Description:</label>
              <textarea
                className="form-control"
                id="description"
                placeholder="Description"
                value={packageFormData.description}
                onChange={handlePackageInputChange}
              ></textarea>
              <label htmlFor="durations">Duration:</label>
              <input
                className="form-control"
                type="text"
                id="durations"
                placeholder="Duration"
                value={packageFormData.durations}
                onChange={handlePackageInputChange}
              />
              <label htmlFor="price">Price:</label>
              <input
                className="form-control"
                type="text"
                id="price"
                placeholder="Price"
                value={packageFormData.price}
                onChange={handlePackageInputChange}
              />
              <label htmlFor="rating">Rating:</label>
              <input
                className="form-control"
                type="text"
                id="rating"
                placeholder="Rating"
                value={packageFormData.rating}
                onChange={handlePackageInputChange}
              />
              <label htmlFor="image">Image:</label>
              <input
                className="form-control"
                type="text"
                id="image"
                placeholder="Image URL"
                value={packageFormData.image}
                onChange={handlePackageInputChange}
              />
              <button className="btn btn-primary" type="submit">
                Create Package
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
    );
  };
export default Create;
