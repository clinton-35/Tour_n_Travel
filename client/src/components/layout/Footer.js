import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <div className="container-fluid my-5">
      <footer style={{ backgroundColor: "white" }}>
        <div className="container p-4">
          <div className="row">
            <div className="col-lg-6 col-md-12 mb-4">
              <h5 className="mb-3" style={{ letterSpacing: "2px", color: "#818963" }}>
                About Us
              </h5>
              <p>
                Welcome to Vacation Vibes! We are a passionate team dedicated to bringing you
                unforgettable travel experiences. Explore the world with us and discover your dream
                destinations. Let us inspire you to create memories that will last a lifetime.
              </p>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <h5 className="mb-3" style={{ letterSpacing: "2px", color: "#818963" }}>
                Links
              </h5>
              <ul className="list-unstyled mb-0">
                <li className="nav-item">
                  <Link to="destinations" className="nav-link active" style={{ color: "#4f4f4f" }}>
                    Our Destinations
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="packages" className="nav-link active" style={{ color: "#4f4f4f" }}>
                    Our Packages
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="feedback" className="nav-link active" style={{ color: "#4f4f4f" }}>
                    Reviews
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="contacts" className="nav-link active" style={{ color: "#4f4f4f" }}>
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <h5 className="mb-1" style={{ letterSpacing: "2px", color: "#818963" }}>
                Contact Info
              </h5>
              <p style={{ color: "#4f4f4f" }}>
                <FontAwesomeIcon icon={faMapMarkerAlt} /> 124 Moi Ave. Street, Nairobi
              </p>
              <p style={{ color: "#4f4f4f" }}>
                <FontAwesomeIcon icon={faPhone} /> +254 712 345 678
              </p>
              <p style={{ color: "#4f4f4f" }}>
                <FontAwesomeIcon icon={faEnvelope} /> contact@vacationvibes.com
              </p>
            </div>
          </div>
        </div>
        <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
          © {new Date().getFullYear()} Vacation Vibes. All rights reserved.
        </div>
      </footer>
    </div>
);
}

export default Footer;
