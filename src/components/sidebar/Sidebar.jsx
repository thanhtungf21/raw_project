import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Sidebar.css"; // We'll create this CSS file next

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>Navigation</h2>
      <ul>
        <li>
          {/* NavLink adds 'active' class automatically */}
          <NavLink
            to="/dashboard"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            About
          </NavLink>
        </li>
        <li>
          <Link to="/">Go to Landing</Link> {/* Example link back to landing */}
        </li>
        {/* Add more links as needed */}
      </ul>
    </aside>
  );
}

export default Sidebar;
