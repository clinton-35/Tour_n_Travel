import React, { createContext, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom"
import Swal from 'sweetalert2';

export const AuthContext = createContext();

export  function AuthProvider({ children }) {


  const nav = useNavigate() 
  const [current_user, set_currentUser] = useState();
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
        } else if (response.success) {
            nav("/")
          Swal.fire('Success', response.success, 'success');setonChange(!onChange)

        } else {
          Swal.fire('Error', 'Something went wrong', 'error');
        }
      });
  };
  // registration
  const register = (username,email, password) => {
    fetch('/users', {
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
  // Fetching current user
  useEffect(() => {
    fetch('/current_user', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.json())
      .then((response) => {
        console.log(response)
        if (response.user) {
          set_currentUser(response.user);
        }
      })
      .catch((error) => {
        console.error('Error fetching current user:', error);
      });
  }, [onChange]);

  

  // Logging out
  const logout = () => {
    fetch('/logout', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
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
        console.error('Error logging out the user:', error);
      });
  };


  const contextData = {
    login,   
    logout,
    register,
    current_user,
  };

  return <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>;
}