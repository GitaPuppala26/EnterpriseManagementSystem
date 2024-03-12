// Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Sidebar() {
  return (
    <div className='sidebar d-flex justify-content-between flex-column bg-dark text-white py-3 ps-3 pe-5 vh=100' style={{ width: '20vw', height:'100vh' }} >
      <div>
        <a href="" className='p-3'>
          <i className='bi bi-code fs-4 me-4'></i>
          <span className='fs-5'>Code With Gita</span>
        </a>
        <hr className='text-white mt-2'/>
        <ul className='nav nav-pills flex-column mt-2'>
          <li className='nav-item'>
            <Link to="/dashboard" className='p-1'>
              <i className='bi bi-speedometer2 me-3 fs-4'></i>
              <span className='fs-5'><strong>Dashboard</strong></span>
            </Link>
          </li> 
          <li className='nav-item'>
            <Link to="/products" className='p-1'>
              <i className='bi bi-cart me-3 fs-4'></i>
              <span className='fs-5'><strong>Products</strong></span>
            </Link>
          </li>
          <li className='nav-item'>
            <Link to="/orders" className='p-1'>
              <i className='bi bi-table me-3 fs-4'></i>
              <span className='fs-5'><strong>Orders</strong></span>
            </Link>
          </li>
          <li className='nav-item'>
            <Link to="/report" className='p-1'>
              <i className='bi bi-grid me-3 fs-4'></i>
              <span className='fs-5'><strong>Report</strong></span>
            </Link>
          </li>
        </ul>            
      </div>
      <div>
        <hr className='text-white'/>
        <li className='nav-item p-2'>
          <a href="" className='p-1'>
            <i className='bi bi-person-circle me-3 fs-4'></i>
            <span className='fs-4'><strong>Gitanjali</strong></span>
          </a>
        </li>
      </div>
    </div>
  );
}

export default Sidebar;
