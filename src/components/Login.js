import React, { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import "./Login.scss";

const Login = ({ onRegisterLink }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // Only email/password login
  const [message, setMessage] = useState("");

  // Email/Password Login
  const handleEmailLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setMessage("Login successful!");
    } catch (error) {
      setMessage(error.message);
    }
  };



  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleEmailLogin} className="login-form">
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
        <button type="submit">Login</button>
      </form>
      {message && <p className="login-message">{message}</p>}
      <p style={{marginTop: '1rem'}}>
        Don't have an account?{' '}
        <span style={{color: '#fff', textDecoration: 'underline', cursor: 'pointer'}} onClick={onRegisterLink}>Register here</span>
      </p>
    </div>
  );
};

export default Login;
