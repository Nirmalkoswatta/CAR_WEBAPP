import React, { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";
import "./Register.scss";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [isPhoneRegister, setIsPhoneRegister] = useState(false);
  const [message, setMessage] = useState("");

  // Email/Password Register
  const handleEmailRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setMessage("Registration successful! You can now log in.");
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
      setMessage("Phone registration successful! You can now log in.");
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <div className="register-toggle">
        <button onClick={() => setIsPhoneRegister(false)} className={!isPhoneRegister ? "active" : ""}>Email/Password</button>
        <button onClick={() => setIsPhoneRegister(true)} className={isPhoneRegister ? "active" : ""}>Phone</button>
      </div>
      {!isPhoneRegister ? (
        <form onSubmit={handleEmailRegister} className="register-form">
          <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
          <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
          <button type="submit">Register</button>
        </form>
      ) : (
        <form onSubmit={handlePhoneRegister} className="register-form">
          <input type="tel" placeholder="Phone (+1234567890)" value={phone} onChange={e => setPhone(e.target.value)} required />
          <div id="recaptcha-container-register"></div>
          <button type="submit">Send OTP</button>
        </form>
      )}
      {isPhoneRegister && (
        <form onSubmit={verifyOtp} className="register-form">
          <input type="text" placeholder="Enter OTP" value={otp} onChange={e => setOtp(e.target.value)} required />
          <button type="submit">Verify OTP</button>
        </form>
      )}
      {message && <p className="register-message">{message}</p>}
    </div>
  );
};

export default Register;
