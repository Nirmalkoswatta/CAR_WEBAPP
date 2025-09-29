import React, { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";
import "./Register.scss";

const Register = ({ onLoginLink }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtpPopup, setShowOtpPopup] = useState(false);
  const [message, setMessage] = useState("");

  // Register with email, password, name, phone
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
    if (!phone.trim()) {
      setMessage("Phone number is required.");
      return;
    }
    // Send OTP
    try {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container-register",
        { size: "invisible" },
        auth
      );
      const appVerifier = window.recaptchaVerifier;
      const confirmationResult = await signInWithPhoneNumber(auth, phone, appVerifier);
      window.confirmationResult = confirmationResult;
      setShowOtpPopup(true);
      setMessage("");
    } catch (error) {
      setMessage(error.message);
    }
  };

  // Phone Register
  const setupRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container-register",
      { size: "invisible" },
      auth
    );
  };

  const handlePhoneRegister = async (e) => {
    e.preventDefault();
    setupRecaptcha();
    const appVerifier = window.recaptchaVerifier;
    try {
      const confirmationResult = await signInWithPhoneNumber(auth, phone, appVerifier);
      window.confirmationResult = confirmationResult;
      setMessage("OTP sent to your phone.");
    } catch (error) {
      setMessage(error.message);
    }
  };

  const verifyOtp = async (e) => {
    e.preventDefault();
    try {
      await window.confirmationResult.confirm(otp);
      // Register user in Firebase Auth
      await createUserWithEmailAndPassword(auth, email, password);
      setShowOtpPopup(false);
      setMessage("");
      alert("Registration successful! You can now log in.");
      onLoginLink();
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleRegister} className="register-form">
        <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} required />
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
        <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} required />
        <input type="tel" placeholder="Phone (+1234567890)" value={phone} onChange={e => setPhone(e.target.value)} required />
        <div id="recaptcha-container-register"></div>
        <button type="submit">Register</button>
      </form>
      {showOtpPopup && (
        <div className="otp-popup">
          <form onSubmit={verifyOtp} className="register-form">
            <input type="text" placeholder="Enter OTP" value={otp} onChange={e => setOtp(e.target.value)} required />
            <button type="submit">Verify OTP</button>
          </form>
        </div>
      )}
      {message && <p className="register-message">{message}</p>}
      <p style={{marginTop: '1rem'}}>
        Already have an account?{' '}
        <span style={{color: '#fff', textDecoration: 'underline', cursor: 'pointer'}} onClick={onLoginLink}>Login here</span>
      </p>
    </div>
  );
};

export default Register;
