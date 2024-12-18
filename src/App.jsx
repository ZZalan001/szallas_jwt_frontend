import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route, NavLink} from 'react-router-dom';
import {Login} from './Login';
import {SzallasList} from './SzallasList';
import {Logout} from './Logout'; 
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export const App=()=> {
  return (
   <Router>
    <nav className='navbar navbar-expand navbar-dark bg-dark'>
      <div className='container-fluid'>
      <div className='navbar-brand'>SzallasokJWT</div>
      <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav'>
        <span className='navbar-toggler-icon'></span>
      </button>

      <div className='collapse navbar-collapse' id='navbarNav'>
      <ul className='navbar-nav'>
        <li className='nav-item'>
          <NavLink to="/" className={({isActive}) => "nav-link " + (isActive ? 'active' : '')}><span className='nav-link'>Login</span></NavLink>
        </li>
        <li className='nav-item'>
          <NavLink to="/szallasok" className={({isActive}) => "nav-link " + (isActive ? 'active' : '')}><span className='nav-link'>Szallasok</span></NavLink>
        </li>
        <li className='nav-item'>
          <NavLink to="/logout" className={({isActive}) => "nav-link " + (isActive ? 'active' : '')}><span className='nav-link'>Logout</span></NavLink>
        </li>
      </ul>
      </div>
      </div>
    </nav>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/szallasok" element={<SzallasList/>}/>
      <Route path="/logout" element={<Logout/>}/>
    </Routes>
   </Router>
  );
}


