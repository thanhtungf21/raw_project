import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to="/">Go to Landing Page</Link>
      <br />
      <Link to="/dashboard">Go to Dashboard</Link>
    </div>
  );
}

export default NotFoundPage;
