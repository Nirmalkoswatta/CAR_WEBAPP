import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../firebase';
import '../components/Register.scss';


import '../components/Register.scss';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    try {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  await updateProfile(userCredential.user, { displayName: name });
  navigate('/dashboard');
    } catch (err) {
      setError('Registration failed. Email may already be in use.');
    }
  };

  return (
  <div className="auth-center-bg">
      <div className="auth-card">
        <div className="auth-title">Create Account</div>
        <form className="modern-form" onSubmit={handleRegister} autoComplete="off">
          <div className="form-group">
            <input
              className="form-input"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              autoFocus
            />
          </div>
          <div className="form-group">
            <input
              className="form-input"
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              className="form-input"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              className="form-input"
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          {error && <div className="login-message">{error}</div>}
          <button className="form-button" type="submit">Register</button>
          <button type="button" className="form-button secondary" onClick={() => window.location.href = 'http://localhost:3000/'}>Already have an account?</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
