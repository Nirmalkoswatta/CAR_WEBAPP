import React, { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import "./Register.scss";

const Register = ({ onLoginLink }) => {
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

  return (
    <div className="register-container">
      <form onSubmit={handleRegister} className="register-form modern-form">
        <h2 className="form-title">Register</h2>
        <div className="form-group">
          <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} required className="form-input" />
        </div>
        <div className="form-group">
          <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required className="form-input" />
        </div>
        <div className="form-group">
          <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required className="form-input" />
        </div>
        <div className="form-group">
          <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} required className="form-input" />
        </div>
        <button type="submit" className="form-button">Register</button>
        {message && <p className="register-message">{message}</p>}
        <p className="form-link">
          Already have an account?{' '}
          <span className="register-link" onClick={onLoginLink}>Login here</span>
        </p>
      </form>
    </div>
  );
};

export default Register;
