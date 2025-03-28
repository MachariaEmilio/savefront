<main className="home-main">
  <h1>Welcome to the Home Page!</h1>
  <p>This is the main content of your Home component.</p>
</main>;
import React, { useState } from "react";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Home() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
   
      <header className="home-header">
        <div className="home-logo-container">
          <img src="/assets/icon.jpg" alt="Logo" width="40" height="40" />
        </div>
        <nav className="home-nav">
          <div className="home-nav-middle">
            <div className="home-menu-icon" onClick={toggleNav}>
              <FontAwesomeIcon icon={faBars} size="2x" />
            </div>
            <div className={`home-nav-content ${isNavOpen ? "active" : ""}`}>
              <ul className="home-nav-links">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Portfolio</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="home-auth-buttons">
          <button className="home-login-button">Login</button>
          <button className="home-register-button">Register</button>
        </div>
      </header>
   
   
  );
}

export default Home;