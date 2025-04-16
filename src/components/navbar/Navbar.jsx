import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // We'll create this CSS file next

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">MyApp</div>
      <div className="navbar-links">
        {/* Add other navbar items here if needed */}
        <span>User Profile</span>
      </div>
    </nav>
  );
}

export default Navbar;
