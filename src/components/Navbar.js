import React from "react";
import CarIcon from "./CarIcon";
import "./Navbar.scss";

const Navbar = ({ user }) => {
  return (
    <nav className="navbar">
      <div className="navbar-title">Car Modification Web APP</div>
      {user && user.email && (
        <div className="navbar-user">{user.email}</div>
      )}
    </nav>
  );
};

export default Navbar;
