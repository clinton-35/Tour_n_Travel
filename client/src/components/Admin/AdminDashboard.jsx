import React from 'react';

const AdminDashboard = () => {
  return (
    <div className="admindashboard">
      <h2>Welcome, Admin!</h2>
      <nav>
        <a href="/create">Create</a>{' '}
        <a href="/update">Update</a>{' '}
        <a href="/delete">Delete</a>
      </nav>
    </div>
  );
};

export default AdminDashboard;

