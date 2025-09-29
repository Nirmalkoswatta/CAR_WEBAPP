import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import React, { useState } from 'react';

function App() {
  const [showRegister, setShowRegister] = useState(false);
  return (
    <div className="App">
      <div style={{ display: 'flex', justifyContent: 'center', margin: '1rem' }}>
        <button onClick={() => setShowRegister(false)} style={{ marginRight: '1rem', background: !showRegister ? '#007bff' : '#eee', color: !showRegister ? '#fff' : '#000', border: 'none', padding: '0.5rem 1rem', borderRadius: '5px' }}>Login</button>
        <button onClick={() => setShowRegister(true)} style={{ background: showRegister ? '#28a745' : '#eee', color: showRegister ? '#fff' : '#000', border: 'none', padding: '0.5rem 1rem', borderRadius: '5px' }}>Register</button>
      </div>
      {showRegister ? <Register /> : <Login />}
    </div>
  );
}

export default App;
