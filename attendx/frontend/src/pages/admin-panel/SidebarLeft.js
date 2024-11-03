// SidebarLeft.js
import React from "react";
import { Link } from "react-router-dom";
import '../../styles/admin-panel/SidebarLeft.css';

function SidebarLeft() {
  return (
    <div className="sidebar-left">
      <Link to="/admin/dashboard" className="sidebar-link">
        <i className="icon-home"></i> Dashboard
      </Link>
      <Link to="/addstudent" className="sidebar-link">
        <i className="icon-user"></i> Add Student
      </Link>
    </div>
  );
}

export default SidebarLeft;
