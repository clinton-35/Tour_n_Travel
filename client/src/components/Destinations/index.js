import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Destination = () => {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    // Fetch data from the API endpoint
    fetch('/destinations')
      .then(response => response.json())
      .then(data => setDestinations(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="masonry">
      {destinations.map(destination => (
        <Link to={`/packages/${destination.id}`} key={destination.id}>
          <div className="destination-item">
            <img src={destination.image} alt={destination.name} />
            <div className="destination-name">{destination.name}</div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Destination;