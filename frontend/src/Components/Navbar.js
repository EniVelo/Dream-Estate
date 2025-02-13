import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
    <ul className="nav-links">
    <h1 className="logo">DreamEstate</h1>
   
      <li><Link to="/">Home</Link></li>   
      <li><Link to="/about">About</Link></li>
      <li><Link to="/create">Create</Link></li>
      <li><Link to="/read">Read</Link></li>
    </ul>
    <button className="contact-button">
    <Link to="/contact">Contact</Link>
    </button>
    </nav>
  );
};

export default Navbar;

