import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import './App.css';
import React from 'react';



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
