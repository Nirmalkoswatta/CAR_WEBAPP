import React from "react";
import CarIcon from "./CarIcon";
import "./Navbar.scss";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = ({ user }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const handleLogout = async () => {
    const auth = getAuth();
    await signOut(auth);
    navigate("/");
  };
  const showLogout = location.pathname === "/dashboard";
  return (
    <nav className="navbar">
      <div className="navbar-title">Car Modification Web APP</div>
      <div className="navbar-actions">
        {user && (user.displayName || user.email) && (
          <div className="navbar-user">{user.displayName ? user.displayName : user.email}</div>
        )}
        {showLogout && (
          <button className="navbar-logout" onClick={handleLogout}>Logout</button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
