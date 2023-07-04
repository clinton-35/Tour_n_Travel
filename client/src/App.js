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
import Read from './components/Admin/Read';
import Update from './components/Admin/Update';
import Delete from './components/Admin/Delete';
import { AuthProvider } from "./components/context/Authcontext";
import BookNow from "./components/Packages/book";


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
      <Route path="/sign-in" element = {<SignIn />}/>
      <Route path="/register" element = {<Register />}/>
      <Route path="/contacts" element = {<Contacts/>}/>
      <Route path="/feedback" element = {<Feedback />}/>
      <Route path="login" element={<LoginPage />} />
      <Route  path="my-account" element={<AdminDashboard />} />
      <Route exact path="/admin/create" action={Create} />
          <Route exact path="/admin/read" action={Read} />
          <Route exact path="/admin/update" action={Update} />
          <Route exact path="/admin/delete" action={Delete} />
        
      
      
        
      </Route>
    </Routes>
    </AuthProvider>
  </BrowserRouter>
  );
}

export default App;
