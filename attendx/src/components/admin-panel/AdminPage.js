// AdminDashboard.js
import React from "react";
import Navbar from "./Navbar";
import SidebarLeft from "./SidebarLeft";
import SidebarRight from "./SidebarRight";
import MainDashboard from "./MainDashboard";
import '../../styles/admin-panel/AdminPage.css';

function AdminDashboard() {
  return (
    <div className="admin-dashboard">
      <Navbar />
      <div className="admin-content">
        <SidebarLeft />
        <MainDashboard />
        <SidebarRight />
      </div>
    </div>
  );
}

export default AdminDashboard;
