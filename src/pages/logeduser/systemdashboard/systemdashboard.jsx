import React from "react";
import "./SystemDashboard.css"; // Create this CSS file

function SystemDashboard({ userData, onLogout }) {
  return (
    <div className="system-dashboard-container">
      <h1>Welcome to the System, {userData.username}!</h1>
      <p>This is the main dashboard of your application.</p>
      <button onClick={onLogout} className="logout-button">
        Logout
      </button>
    </div>
  );
}
export default SystemDashboard;


