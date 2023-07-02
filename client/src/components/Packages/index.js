import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Masonry from 'react-masonry-css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import './styles.css';

const Packages = () => {
  const [packages, setPackages] = useState([]);
  const { pathname } = useLocation();

  useEffect(() => {
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
            {pathname === '/packages' ? (
              <img
                src={pkg.image.split(',')[0].trim()}
                alt="Package"
                className="package-image"
              />
            ) : (
              <Carousel>
                {pkg.image.split(',').map((imageUrl, index) => (
                  <div key={index}>
                    <img src={imageUrl.trim()} alt={`Img ${index + 1}`} className="package-image" />
                  </div>
                ))}
              </Carousel>
            )}
            <div className="package-name">{pkg.name}</div>
          </div>
        </Link>
      ))}
    </Masonry>
  );
};

export default Packages;