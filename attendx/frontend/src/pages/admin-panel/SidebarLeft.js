// SidebarLeft.js
import React from "react";
import { Link } from "react-router-dom";
import '../../styles/admin-panel/SidebarLeft.css';
import { takeAdminAttendance } from "../../contexts/adminAttendance";
import { useState, useEffect } from "react";

const showAlert = () => {
  return window.alert("Attendance Marked Successfully");
}


function SidebarLeft() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    // Close sidebar on window resize above 920px
    const handleResize = () => {
      if (window.innerWidth > 920) {
        setIsSidebarOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>

      <div className="burger-icon" onClick={toggleSidebar}>
        &#9776;
      </div>

      <div className={`sidebar-left ${isSidebarOpen ? "open" : ""}`}>
        <Link to="/admin/dashboard" className="sidebar-link">
          <i className="icon-home"></i> Dashboard
        </Link>
        <Link to="/addstudent" className="sidebar-link">
          <i className="icon-user"></i> Add Student
        </Link>
        <Link to="/manual-attendance" className="sidebar-link">
          <i className="icon-user"></i> Manual Attendance
        </Link>
        <div onClick={takeAdminAttendance} className="navbar-actions" style={{ marginLeft: "1.6rem" }}>
          <button onClick={showAlert}>Mark Attendance</button>
          {/* <Link to="/profile-student" className="profile-initials">
          <span>MK</span> {/* Profile initials </Link> */}
        </div>
      </div>
    </>
  );
}

export default SidebarLeft;
