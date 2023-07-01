import React, { useState, useEffect, useRef } from 'react';
import Masonry from 'masonry-layout'
import { Link } from 'react-router-dom';

const Destination = () => {
  const [destinations, setDestinations] = useState([]);
  const masonryRef = useRef(null)

  useEffect(() => {
    // Fetch data from the API endpoint
    fetch('/destinations')
      .then(response => response.json())
      .then(data => setDestinations(data))
      .catch(error => console.error(error));
  }, []);
  useEffect(() => {
    // Initialize masonry layout
    const masonry = new Masonry(masonryRef.current, {
      itemSelector: '.destination-item',
      columnWidth: '.grid-sizer',
      gutter: 20,
      percentPosition: true,
    });
  
    // Update masonry layout when the component rerenders
    masonry.layout();
  }, [destinations]);

  return (
    <div className="masonry" ref={masonryRef}>
    <div className="grid-sizer" />
    {destinations.map(destination => (
      <Link to={`/package/${destination.id}`} key={destination.id} className="destination-link">
        <div className="destination-item">
          <img src={destination.image} alt={destination.name} className="destination-image" />
          <div className="destination-name">{destination.name}</div>
        </div>
      </Link>
    ))}
  </div>
  );
};

export default Destination;