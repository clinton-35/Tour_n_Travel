import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./components/Home";
import './App.css';
import React from 'react';
import SignIn from "./components/SignIn";
import Register from "./components/Register";



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/sign-in" element = {<SignIn />}/>
      <Route path="/register" element = {<Register />}/>
      
        
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
