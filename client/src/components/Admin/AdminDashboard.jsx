import React from 'react';

const AdminDashboard = () => {
  return (
    <div className="admindashboard">
      <h2>Welcome, Admin!</h2>
      <nav>
        <a href="/admin/create">Create</a>{' '}
        <a href="/admin/read">Read</a>{' '}
        <a href="/admin/update">Update</a>{' '}
        <a href="/admin/delete">Delete</a>
      </nav>
    </div>
  );
};

export default AdminDashboard;

