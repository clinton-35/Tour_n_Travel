import React, { useState, useEffect } from 'react';
import Masonry from 'react-masonry-css';
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
    <Masonry breakpointCols={3} className="masonry-grid" columnClassName="masonry-grid-column">
      {destinations.map(destination => (
        <Link to={`/packages/${destination.id}`} key={destination.id} className="destination-link">
          <div className="destination-item">
            <img src={destination.image} alt={destination.name} className="destination-image" />
            <div className="destination-name">{destination.name}</div>
          </div>
        </Link>
      ))}
    </Masonry>
  );
};

export default Destination;