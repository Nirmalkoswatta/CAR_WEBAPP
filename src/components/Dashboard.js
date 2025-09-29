
import "./Dashboard.scss";
import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
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
    <div
      className="App"
      style={{
        minHeight: '100dvh',
        width: '100vw',
        background: `url(${process.env.PUBLIC_URL + '/back2.jpg'}) no-repeat center center fixed`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: '#111',
        position: 'relative',
        zIndex: 1,
        overflow: 'hidden',
      }}
    >
      <button
        onClick={handleLogout}
        style={{
          position: 'absolute',
          top: 24,
          right: 32,
          zIndex: 10,
          background: '#e53935',
          color: '#fff',
          border: 'none',
          borderRadius: 8,
          padding: '0.6rem 1.2rem',
          fontWeight: 600,
          fontSize: '1rem',
          boxShadow: '0 2px 8px rgba(229,57,53,0.08)',
          cursor: 'pointer',
          transition: 'background 0.2s',
        }}
        onMouseOver={e => e.currentTarget.style.background = '#b71c1c'}
        onMouseOut={e => e.currentTarget.style.background = '#e53935'}
      >
        Logout
      </button>
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
    </div>
  );
};

export default Dashboard;
