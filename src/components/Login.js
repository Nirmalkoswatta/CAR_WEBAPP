import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import '../components/Login.scss';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/dashboard');
    } catch (err) {
      setError('Invalid email or password.');
    }
  };

  return (
  <div className="auth-center-bg">
      <div className="auth-card">
        <div className="auth-title">Sign In</div>
        <form className="modern-form" onSubmit={handleLogin} autoComplete="off">
          <div className="form-group">
            <input
              className="form-input"
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoFocus
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
          {error && <div className="login-message">{error}</div>}
          <div className="form-row-between">
            <label className="remember-me">
              <input type="checkbox" /> Remember Me
            </label>
            <span className="forgot-link">Forgot Password?</span>
          </div>
          <button className="form-button" type="submit">Login Now</button>
          <button type="button" className="form-button secondary" onClick={() => navigate('/register')}>Create Account</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
