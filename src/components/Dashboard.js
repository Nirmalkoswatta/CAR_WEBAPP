
import "./Dashboard.scss";
import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  const user = auth.currentUser;
  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
  navigate("/");
      })
      .catch((error) => {
        alert("Logout failed: " + error.message);
      });
  };

  return (
    <div style={{ position: 'relative', zIndex: 2 }}>
      <div className="dashboard-cards-container">
        <div className="dashboard-card" tabIndex={0}>
          <span role="img" aria-label="car" style={{fontSize: '2.5rem'}}>🚗</span>
          <h3>Vehicles</h3>
          <p>Manage your vehicles, add new ones, and view details.</p>
        </div>
        <div className="dashboard-card" tabIndex={0}>
          <span role="img" aria-label="parts" style={{fontSize: '2.5rem'}}>🛠️</span>
          <h3>Parts</h3>
          <p>Track, add, or update car parts and accessories.</p>
        </div>
        <div className="dashboard-card" tabIndex={0}>
          <span role="img" aria-label="shop" style={{fontSize: '2.5rem'}}>🛒</span>
          <h3>Shop</h3>
          <p>Browse and purchase car parts and services.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
