import React, { useState } from "react";
import "./Login.css";

function Login({ onLogin, onSignup }) {
  // Add onSignup prop
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError("Please enter both username and password.");
      return;
    }

    // Simulate login (replace with your actual API call)
    if (username === "user" && password === "pass") {
      if (onLogin) {
        onLogin({ username: username });
      }
    } else {
      setError("Invalid username or password.");
    }
      
  };

  const handleSignupClick = () => {
    if (onSignup) {
      onSignup(); // Call the parent's signup function
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
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
        <button type="submit">Login</button>
      </form>
         <p className="signup-link">
        Don't have an account? <a href="#" onClick={onSignup}>Sign Up</a>
      </p>
      
    </div>
  );
}

export default Login;
