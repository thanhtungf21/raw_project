import React from "react";
import { Outlet } from "react-router-dom";
import "./DefaultLayout.css"; // We'll create this CSS file next
import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/sidebar/Sidebar";

function DefaultLayout() {
  return (
    <div className="default-layout">
      <Navbar />
      <div className="layout-body">
        <Sidebar />
        <main className="main-content">
          <Outlet /> {/* Child route components render here */}
        </main>
      </div>
    </div>
  );
}

export default DefaultLayout;
