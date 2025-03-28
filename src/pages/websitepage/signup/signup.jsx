import React, { useState } from "react";
import "./signup.css";

function Signup({ onLoginClick }) {
  // Add onLoginClick prop
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your signup logic here (e.g., API call)
    console.log("Signup data:", { username, password, confirmPassword });

    // Simulate successful signup
    if (password === confirmPassword) {
      if (onLoginClick) {
        onLoginClick(); // Navigate back to login
      }
    } else {
      setError("Passwords do not match");
    }
  };

  return (
    <div className="signup-container">
      <div className="soothing-info">
        <p>Create your account and join us!</p>
        <p className="subtle-text">It's quick and easy.</p>
      </div>
      <h2>Sign Up</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <p className="login-link">
        Already have an account?{" "}
        <a href="#" onClick={onLoginClick}>
          Login
        </a>
      </p>
    </div>
  );
}

export default Signup;
