
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import AuthIllustration from "./AuthIllustration";
import "./AuthPage.scss";

const Register = ({ onLoginLink }) => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // ...existing code...
  const [message, setMessage] = useState("");

  // Register with email, password, name
  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }
    if (!name.trim()) {
      setMessage("Name is required.");
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setMessage("");
      alert("Registration successful! You can now log in.");
      onLoginLink();
    } catch (error) {
      setMessage(error.message);
    }
  };

  const handleLoginLink = () => {
    if (onLoginLink) {
      onLoginLink();
    } else {
      navigate("/");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-left">
        <h2>Welcome!</h2>
  <p>This is the Car Modification AI tool. Use it to identify and mention parts of your vehicle. The integrated ChatBot can assist you with further details and support for your car modification journey.</p>
        <button className="auth-signup-btn" onClick={handleLoginLink}>SIGN IN</button>
        <div className="auth-illustration">
          <AuthIllustration />
        </div>
      </div>
      <div className="auth-right">
        <div className="auth-form-title">Sign up</div>
        <form onSubmit={handleRegister} className="auth-form">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={e => setName(e.target.value)}
            required
            autoComplete="name"
          />
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
            autoComplete="new-password"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            required
            autoComplete="new-password"
          />
          <button type="submit">REGISTER</button>
          {message && <p className="register-message">{message}</p>}
        </form>
      </div>
    </div>
  );
};

export default Register;
