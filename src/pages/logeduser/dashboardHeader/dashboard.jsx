import React from "react";
import "./dashboardheader.css";

function DashboardHeader({ userData, onLogout }) {
  return (
    <header className="dashboard-header">
      <div className="dashboard-user-info">
        <span>Welcome, {userData.username}!</span>
      </div>
      <nav className="dashboard-nav">
        <button onClick={onLogout} className="dashboard-logout-button">
          Logout
        </button>
      </nav>
    </header>
  );
}

export default DashboardHeader;
