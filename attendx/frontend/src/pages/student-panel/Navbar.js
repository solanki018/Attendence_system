// Navbar.js
import React from "react";
import {useNavigate } from "react-router-dom";
import "../../styles/student-panel/Navbar.css";

function Navbar({studentData}) {
  const navigate = useNavigate();

  const handleSignOut = () => {
    navigate("/");
  };

  return (
    <div className="navbar">
      <h1>AttendX</h1>
      <div className="navbar-actions">
        <button className="sign-out-button" onClick={handleSignOut}>
          Sign out
        </button>
      </div>
    </div>
  );
}

export default Navbar;
