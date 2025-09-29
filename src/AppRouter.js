import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import StarfallBackground from './components/StarfallBackground';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="App" style={{ minHeight: '100vh', background: '#fff', color: '#111', position: 'relative', zIndex: 1 }}>
        <StarfallBackground />
        <div style={{ position: 'relative', zIndex: 2 }}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
