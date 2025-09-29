
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import CarAnimation from "./CarAnimation";
import "./AuthPage.scss";

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



  const handleRegisterLink = () => {
    if (onRegisterLink) {
      onRegisterLink();
    } else {
      navigate("/register");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-left">
        <div className="car-animation fade-in">
          <CarAnimation />
        </div>
        <h2>New here ?</h2>
        <p>This is the Car Modification AI tool. Use it to identify and mention parts of your vehicle. The integrated ChatBot can assist you with further details and support for your car modification journey.</p>
        <button className="auth-signup-btn" onClick={handleRegisterLink}>SIGN UP</button>
      </div>
      <div className="auth-right">
        <div className="auth-form-title">Sign in</div>
        <form onSubmit={handleEmailLogin} className="auth-form">
          <input
            type="email"
            placeholder="Username"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            autoComplete="username"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            autoComplete="current-password"
          />
          <button type="submit">LOGIN</button>
          {message && <p className="login-message">{message}</p>}
        </form>
      </div>
    </div>
  );
};

export default Login;
