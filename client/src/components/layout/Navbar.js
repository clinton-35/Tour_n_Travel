import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container">
      <Link to="/">
          <b>Vacation Vibes</b>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto  mr-5">
            
            <li className="nav-item">
              <Link to="destinations" className="nav-link  active ">
                Destinations
              </Link>
            </li>
            <li className="nav-item">
              <Link to="packages " className="nav-link active ">
                Packages
              </Link>
            </li>
            <li className="nav-item">
              <Link to="feedback " className="nav-link active ">
                Feedback
              </Link>
            </li>
            <li className="nav-item">
              <Link to="Contacts " className="nav-link active ">
                Contacts
              </Link>
            </li>
            <li className="nav-item">
              <Link to="sign-in" className="nav-link active">
                Sign in
              </Link>
            </li>
            <li className="nav-item">
              <Link to="my-account" className="nav-link active">
                Profile
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
