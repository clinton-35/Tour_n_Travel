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
import LoginPage from "./components/Admin/LoginPage";
import AdminDashboard from './components/Admin/AdminDashboard';
import Create from './components/Admin/Create';
import Update from './components/Admin/Update';
import Delete from './components/Admin/Delete';
import { AuthProvider } from "./components/context/Authcontext";
import BookNow from "./components/Packages/book";
import BookingSuccess from "./components/Packages/success";


function App() {
  return (
    <BrowserRouter>
    <AuthProvider>
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/destinations" element={<Destination />} />
      <Route path="/packages" element={<Packages />} />
      <Route path="/packages/:packageId" element={<PackageDetails />} />
      <Route path="/packages/:packageId/book-now" element={<BookNow />} />
      <Route path="booking-success" element={<BookingSuccess />} />
      <Route path="/sign-in" element = {<SignIn />}/>
      <Route path="/register" element = {<Register />}/>
      <Route path="/contacts" element = {<Contacts/>}/>
      <Route path="/feedback" element = {<Feedback />}/>
      <Route path="/login" element={<LoginPage />} />
      <Route  path="/my-account" element={<AdminDashboard />} />
      <Route  path="create" element={<Create/>} />
      <Route  path="/update" element={<Update/>} />
      <Route  path="/delete" element={<Delete/>} />
        
      
      
        
      </Route>
    </Routes>
    </AuthProvider>
  </BrowserRouter>
  );
}

export default App;
