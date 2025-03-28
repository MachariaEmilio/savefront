import React, { useState } from "react";
import Body_code from "../body/body";
import Footer from "../footer/footer";
import Header from "../header/Header";
import Services from "../services/services";
import "./home.css";
import AboutUs from "../about/AboutUs";
import Portfolio from "../portfolio/portfolio";
import Login from "../Login/login";
import Signup from "../signup/signup";
import SystemDashboard from "../../logeduser/systemdashboard/systemdashboard";
import DashboardHeader from "../../logeduser/dashboardHeader/dashboard";

function Home() {
  const [activePage, setActivePage] = useState("home");
  const [showSignup, setShowSignup] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleNavClick = (page) => {
    setActivePage(page);
  };

  const handleLogin = (userData) => {
    setLoggedInUser(userData);
    setActivePage("dashboard");
  };

  const handleSignupSuccess = (userData) => {
    setLoggedInUser(userData);
    setActivePage("dashboard");
  };

  const handleLogout = () => {
    setLoggedInUser(null);
    setActivePage("home");
  };

  const handleLoginClick = () => {
    setShowSignup(false);
    setActivePage("login");
  };

  const handleSignupClick = () => {
    setShowSignup(true);
    setActivePage("signup");
  };

  const renderPageContent = () => {
    if (loggedInUser) {
      return <SystemDashboard userData={loggedInUser} onLogout={handleLogout} />;
    }

    if (showSignup) {
      return <Signup onLoginClick={handleLoginClick} onSignupSuccess={handleSignupSuccess} />;
    }

    switch (activePage) {
      case "home":
        return <Body_code onSignupClick={handleSignupClick} />;
      case "about":
        return <AboutUs />;
      case "services":
        return <Services />;
      case "portfolio":
        return <Portfolio />;
      case "login":
        return <Login onLogin={handleLogin} onSignup={handleSignupClick} />;
      case "signup":
        return <Signup onLoginClick={handleLoginClick} onSignupSuccess={handleSignupSuccess} />;
      case "dashboard":
        return <SystemDashboard userData={loggedInUser} onLogout={handleLogout} />;
      default:
        return <Body_code />;
    }
  };

  return (
    <div className="home-container">
      {loggedInUser ? (
        <DashboardHeader userData={loggedInUser} onLogout={handleLogout} />
      ) : (
        <Header onNavClick={handleNavClick} activePage={activePage} />
      )}
      
      <div className="home-body-and-footer">

        {renderPageContent()}
        <Footer />
      </div>
    </div>
  );
}

export default Home;