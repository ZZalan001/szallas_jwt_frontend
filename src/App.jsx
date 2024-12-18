import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route, NavLink} from 'react-router-dom';
import {Login} from './Login';
import {SzallasList} from './SzallasList';

export const App=()=> {
  return (
   <Router>
    <nav className='navbar navbar-expand navbar-dark bg-dark'>
      <ul className='navbar-nav'>
        <li className='nav-item'>
          <NavLink to="/">Login</NavLink>
        </li>
        <li className='nav-item'>
          <NavLink to="/szallasok">Szallasok</NavLink>
        </li>
      </ul>
    </nav>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/szallasok" element={<SzallasList/>}/>
    </Routes>
   </Router>
  );
}


