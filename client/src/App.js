import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./components/Home";
import './App.css';
import React from 'react';
import SignIn from "./components/SignIn";
import Register from "./components/Register";
import Destination from "./components/Destinations";
import PackageDetails from "./components/Packages/details";
import Packages from "./components/Packages";
import Contacts from "./components/Contacts";
import Feedback from "./components/Feedback";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/destinations" element={<Destination />} />
      <Route path="/packages" element={<Packages />} />
      <Route path="/packages/:packageId" element={<PackageDetails />} />
      <Route path="/sign-in" element = {<SignIn />}/>
      <Route path="/register" element = {<Register />}/>
      <Route path="/contacts" element = {<Contacts/>}/>
      <Route path="/feedback" element = {<Feedback />}/>
      
        
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
