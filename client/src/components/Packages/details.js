import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "../Destinations/style.css"

const PackageDetails = () => {
  const { packageId } = useParams();
  const [packageDetails, setPackageDetails] = useState(null);

  useEffect(() => {
    // Fetch the specific package details using packageId
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
      <p className='package-description'>{packageDetails.description}</p>
      <p>{packageDetails.price}</p>
    </div>
  );
};

export default PackageDetails;

