import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';



function App() {
  return (
    <Router>
      <div
        className="App"
        style={{
          minHeight: '100vh',
          color: '#111',
          position: 'relative',
          zIndex: 1,
          background: `url(${process.env.PUBLIC_URL + '/back2.jpg'}) no-repeat center center fixed`,
          backgroundSize: 'cover',
        }}
      >
        <div style={{ position: 'relative', zIndex: 2 }}>
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
