import React, { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword, signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";
import "./Login.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [isPhoneLogin, setIsPhoneLogin] = useState(false);
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

  // Phone Login
  const setupRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      { size: "invisible" },
      auth
    );
  };

  const handlePhoneLogin = async (e) => {
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
      setMessage("Phone login successful!");
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <div className="login-toggle">
        <button onClick={() => setIsPhoneLogin(false)} className={!isPhoneLogin ? "active" : ""}>Email/Password</button>
        <button onClick={() => setIsPhoneLogin(true)} className={isPhoneLogin ? "active" : ""}>Phone</button>
      </div>
      {!isPhoneLogin ? (
        <form onSubmit={handleEmailLogin} className="login-form">
          <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
          <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
          <button type="submit">Login</button>
        </form>
      ) : (
        <form onSubmit={handlePhoneLogin} className="login-form">
          <input type="tel" placeholder="Phone (+1234567890)" value={phone} onChange={e => setPhone(e.target.value)} required />
          <div id="recaptcha-container"></div>
          <button type="submit">Send OTP</button>
        </form>
      )}
      {isPhoneLogin && (
        <form onSubmit={verifyOtp} className="login-form">
          <input type="text" placeholder="Enter OTP" value={otp} onChange={e => setOtp(e.target.value)} required />
          <button type="submit">Verify OTP</button>
        </form>
      )}
      {message && <p className="login-message">{message}</p>}
    </div>
  );
};

export default Login;
