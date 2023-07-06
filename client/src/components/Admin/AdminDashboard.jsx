import React from 'react';
import { FaUser } from 'react-icons/fa'; // Import the avatar icon from a library
import './AdminDashboard.css'; // Import the CSS file for styling

const AdminDashboard = () => {
  return (
    <div className="admindashboard">
      <div className="user-profile">
        <div className="avatar">
          <FaUser size={40} />
        </div>
        <div className="user-info">
          <h2>Welcome, Admin!</h2>
          <p>Role: Administrator</p>
        </div>
      </div>
      <div className="card">
        <h3>Admin Actions</h3>
        <div className="action-buttons">
          <a href="/create">Create Package and Destination</a>
          <a href="/update">Update Package and Destination</a>
          <a href="/delete">Delete Package</a>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
