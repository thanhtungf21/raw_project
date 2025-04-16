import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div>
      <h1>Welcome to the Landing Page!</h1>
      <p>This page uses the LandingLayout.</p>
      <Link to="/dashboard">Go to Dashboard (Default Layout)</Link>
    </div>
  );
}

export default LandingPage;
