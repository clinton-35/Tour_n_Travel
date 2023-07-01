import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

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
    <div>
      <h2>{packageDetails.name}</h2>
      <p>{packageDetails.description}</p>
    </div>
  );
};

export default PackageDetails;