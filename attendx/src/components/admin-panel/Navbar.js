// Navbar.js
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import '../../styles/admin-panel/Navbar.css';

function Navbar() {
  const navigate = useNavigate();

  const handleSignOut = () => {
    // Implement sign-out logic here
    navigate("/"); // Redirect to the landing page
  };

  return (
    <div className="navbar">
      <h1>AttendX</h1>
      <div className="navbar-actions">
        <button onClick={handleSignOut}>Sign out</button>
        {/* <Link to="/profile-student" className="profile-initials">
          <span>MK</span> {/* Profile initials </Link> */}
      </div>
    </div>
  );
}

export default Navbar;
