import React, { useState } from 'react';

const LoginPage = () => {
  const [adminname, setAdminname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
     // Inside the handleSubmit function in LoginForm.js
  const handleLogin = (e) => {
  e.preventDefault();
  
  // Send login request to the back end
  fetch('http//localhost:/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ adminname, email, password }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        // Redirect to admin pages
        window.location.href = '/admindashboard';
      } else {
        // Show error message
        setError('You are not an admin yet.');
      }
    })
    .catch((error) => {
      setError('An error occurred. Please try again.');
    });
};

    
    
  return (
    <div className='admin_login'>
    <div className="container my-5">
      <div className="col-md-8 mx-auto login h-100">
        <div
          className="card shadow px-3 py-5"
          style={{ width: "600px", backgroundColor: "#E8F9FD" }}
        >
          <h2 className="card-title text-center">Login</h2>
          <form className="vstack gap-2" >
            <label htmlFor="name">Name:</label>
            <input
              className="form-control"
              type="name"
              id="name"
              placeholder="Name"
              
              onChange={(e) => (e.target.value)}
            />
            <label htmlFor="email">Email:</label>
            <input
              className="form-control"
              type="email"
              id="email"
              placeholder="Email"
              
              onChange={(e) => (e.target.value)}
            />
            <label htmlFor="password">Password:</label>
            <input
              className="form-control"
              type="password"
              id="password"
              placeholder="Password"
              
              onChange={(e) => (e.target.value)}
            />
            <button className="btn btn-primary" type="submit">
              Log In
            </button>
            
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default LoginPage;
