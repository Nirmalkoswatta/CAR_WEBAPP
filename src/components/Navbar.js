import React from "react";
import "./Navbar.scss";


const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-center">
  <img src={process.env.PUBLIC_URL + '/image.png'} alt="Car Logo" style={{ height: '2.2rem', marginRight: '1rem', verticalAlign: 'middle' }} />
  <span className="navbar-logo">CAR AI WEB</span>
    </div>
  </nav>
);

export default Navbar;
