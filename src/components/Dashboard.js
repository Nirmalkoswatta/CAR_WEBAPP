import React from "react";
import Navbar from "./Navbar";
import StarfallBackground from "./StarfallBackground";

const Dashboard = () => {
  return (
    <div className="App" style={{ minHeight: '100vh', background: '#000', position: 'relative', zIndex: 1 }}>
      <StarfallBackground />
      <div style={{ position: 'relative', zIndex: 2 }}>
        <Navbar />
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '60vh',
          color: '#fff',
          fontSize: '2rem',
          fontWeight: 600
        }}>
          Welcome to your Dashboard!
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
