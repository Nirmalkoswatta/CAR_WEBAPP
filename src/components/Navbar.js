import React from "react";
import CarIcon from "./CarIcon";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-center">
        <a href="/" className="nav-brand" aria-label="Home">
          <CarIcon />
          <span className="navbar-logo">CAR AI</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
