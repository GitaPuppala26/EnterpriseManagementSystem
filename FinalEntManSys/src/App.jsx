// App.jsx
import React from 'react';
import Sidebar from './Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar.jsx';
import Home from './Home';
import Products from './Products';
import Orders from './Orders';
import Report from './Report';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className='d-flex'>
        <div className='w-auto'>
          <Sidebar />
        </div>
        <div className='col'>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/orders" element={<Orders />} /> 
            <Route path="/report" element={<Report />} /> 
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
