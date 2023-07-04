import React, { createContext,  useState } from 'react';
import { useNavigate } from "react-router-dom"
import Swal from 'sweetalert2';

export const AuthContext = createContext();

export  function AuthProvider({ children }) {


  const nav = useNavigate() 
  
  const [onChange, setonChange] = useState(false)


  const login = (username, password) => {
    fetch('/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.error) {
            
          Swal.fire('Error', response.error, 'error');
        } else if (response.message) {
            nav("/")
          Swal.fire('Success', response.message, 'success');setonChange(!onChange)

        } else {
          Swal.fire('Error', 'Something went wrong', 'error');
        }
      });
  };
  // registration
  const register = (username,email, password) => {
    fetch('http://127.0.0.1:3000/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username,email, password }),
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.error) {
          Swal.fire('Error', response.error, 'error');
        } else if (response.success) {
          nav('/sign-in');
          Swal.fire('Success', response.success, 'success');
          setonChange(!onChange);
        } else {
          Swal.fire('Error', 'Something went wrong', 'error');
        }
      })
      .catch((error) => {
        console.error('Error registering user:', error);
      });
  };

  

  // Logging out
  const logout = () => {
    fetch('http://127.0.0.1:3000/logout', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.error) {
          Swal.fire('Error', response.error, 'error');
        } else if (response.message) {
          nav('/sign-in');
          Swal.fire('Success', response.message, 'success');
          setonChange(!onChange);
        } else {
          Swal.fire('Error', 'Something went wrong', 'error');
        }
      })
      .catch((error) => {
        console.error('Error registering user:', error);
      });
  };


  const contextData = {
    login,   
    logout,
    register
  };

  return <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>;
}