import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import "./Login.scss";

const Login = ({ onRegisterLink }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // Only email/password login
  const [message, setMessage] = useState("");

  // Email/Password Login
  const handleEmailLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setMessage("");
      navigate("/dashboard");
    } catch (error) {
      setMessage(error.message);
    }
  };



  return (
    <div className="login-container">
      <form onSubmit={handleEmailLogin} className="login-form modern-form">
        <h2 className="form-title">Login</h2>
        <div className="form-group">
          <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required className="form-input" />
        </div>
        <div className="form-group">
          <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required className="form-input" />
        </div>
        <button type="submit" className="form-button">Login</button>
        {message && <p className="login-message">{message}</p>}
        <p className="form-link">
          Don't have an account?{' '}
          <span className="register-link" onClick={onRegisterLink}>Register here</span>
        </p>
      </form>
    </div>
  );
};

export default Login;
