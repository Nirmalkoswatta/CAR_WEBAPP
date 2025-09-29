import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import StarfallBackground from './components/StarfallBackground';
import Navbar from './components/Navbar';
import React, { useState } from 'react';

function App() {
  const [showRegister, setShowRegister] = useState(false);
  return (
    <div className="App" style={{ minHeight: '100vh', background: '#000', position: 'relative', zIndex: 1 }}>
      <StarfallBackground />
      <div style={{ position: 'relative', zIndex: 2 }}>
        <Navbar
          onLoginClick={() => setShowRegister(false)}
          onRegisterClick={() => setShowRegister(true)}
          showRegister={showRegister}
        />
        {showRegister ? (
          <Register onLoginLink={() => setShowRegister(false)} />
        ) : (
          <Login onRegisterLink={() => setShowRegister(true)} />
        )}
      </div>
    </div>
  );
}

export default App;
