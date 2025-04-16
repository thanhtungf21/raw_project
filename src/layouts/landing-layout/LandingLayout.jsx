import React from "react";
import { Outlet } from "react-router-dom";
import "./LandingLayout.css"; // Optional: Add specific styles

function LandingLayout() {
  return (
    <div className="landing-layout">
      {/* You could add a specific landing page header/footer here if needed */}
      {/* <header>Landing Header</header> */}
      <main>
        <Outlet /> {/* Child route components render here */}
      </main>
      {/* <footer>Landing Footer</footer> */}
    </div>
  );
}

export default LandingLayout;
