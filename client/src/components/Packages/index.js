import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Masonry from 'react-masonry-css';
import './styles.css'

const Packages = () => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    // Fetch data from the API endpoint
    fetch('/packages')
      .then(response => response.json())
      .then(data => setPackages(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <Masonry breakpointCols={3} className="masonry-grid" columnClassName="masonry-grid-column">
      {packages.map(pkg => (
        <Link to={`/packages/${pkg.id}`} key={pkg.id} className="package-link">
          <div className="package-item">
            <img src={pkg.image} alt={pkg.name} className="package-image" />
            <div className="package-name">{pkg.name}</div>
          </div>
        </Link>
      ))}
    </Masonry>
  );
};

export default Packages;