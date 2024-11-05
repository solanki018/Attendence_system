// SidebarLeft.js
import React from "react";
import { Link } from "react-router-dom";
import '../../styles/admin-panel/SidebarLeft.css';
import { takeAdminAttendance } from "../../contexts/adminAttendance";

const showAlert = () => {
  return window.alert("Attendance Marked Successfully");
}


function SidebarLeft() {
  return (
    <div className="sidebar-left">
      <Link to="/admin/dashboard" className="sidebar-link">
        <i className="icon-home"></i> Dashboard
      </Link>
      <Link to="/addstudent" className="sidebar-link">
        <i className="icon-user"></i> Add Student
      </Link>
      <Link to="/manual-attendance" className="sidebar-link">
        <i className="icon-user"></i> Manual Attendance
      </Link>
      <div onClick={takeAdminAttendance} className="navbar-actions" style={{ marginLeft: "0.5rem" }}>
        <button onClick={showAlert}>Mark Attendance</button>
        {/* <Link to="/profile-student" className="profile-initials">
          <span>MK</span> {/* Profile initials </Link> */}
      </div>
    </div>
  );
}

export default SidebarLeft;
