import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
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
      <p>Price :sh {packageDetails.price}</p>
      <p>Duration: {packageDetails.duration}</p>
      <p>Rating :{packageDetails.rating}</p>
    </div>
  );
};

export default PackageDetails;

