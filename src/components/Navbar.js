import React from "react";
import "./Navbar.scss";


const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-center">
      <span style={{ fontSize: '2rem', marginRight: '1rem' }}>🚗</span>
      <span className="navbar-logo">CAR WEBAPP</span>
    </div>
  </nav>
);

export default Navbar;
