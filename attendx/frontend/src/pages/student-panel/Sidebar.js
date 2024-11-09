// Sidebar.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/student-panel/sidebar.css";

function Sidebar() {
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
      {/* Burger menu icon */}
      <div className="burger-icon" onClick={toggleSidebar}>
        &#9776;
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <Link to="/student" className="sidebar-link" onClick={toggleSidebar}>
          <i className="icon-home"></i> Dashboard
        </Link>
        <Link to="/profile-student" className="sidebar-link" onClick={toggleSidebar}>
          <i className="icon-user"></i> Profile
        </Link>
      </div>
    </>
  );
}

export default Sidebar;
