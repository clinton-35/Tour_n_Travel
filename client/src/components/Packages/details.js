import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FaStar } from 'react-icons/fa';
import "../Destinations/style.css"

const PackageDetails = () => {
  const { packageId } = useParams();
  const [packageDetails, setPackageDetails] = useState(null);

  useEffect(() => {
    fetch(`/packages/${packageId}`)
      .then(response => response.json())
      .then(data => setPackageDetails(data))
      .catch(error => console.error(error));
  }, [packageId]);

  if (!packageDetails) {
    return <div>Loading...</div>;
  }

  // Function to generate star icons based on the rating value
  const renderRatingStars = () => {
    const rating = Math.floor(packageDetails.rating);
    const starElements = [];
    for (let i = 0; i < rating; i++) {
      starElements.push(<FaStar key={i} />);
    }
    return starElements;
  };

  return (
    <div className='package-details'>
      <h2 className='package-name'>{packageDetails.name}</h2>
      <Carousel>
        {packageDetails.image.split(',').map((imageUrl, index) => (
          <div key={index}>
            <img src={imageUrl.trim()} alt={`Img ${index + 1}`} className='package-id-image' />
          </div>
        ))}
      </Carousel>
      <p className='package-description'>{packageDetails.description}</p>
      <p>Location: {packageDetails.location}</p>
      <p>Price: sh {packageDetails.price}</p>
      <p>Duration: {packageDetails.duration}</p>
      <p>Rating: {renderRatingStars()}</p>
      <button><Link to={`/packages/${packageId}/book-now`}>Book Now</Link></button>
    </div>
  );
};

export default PackageDetails;
