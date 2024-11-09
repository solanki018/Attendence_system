// Navbar.js
import React, { useState, useEffect } from "react";
import {useNavigate } from "react-router-dom";
import "../../styles/student-panel/Navbar.css";

function Navbar({studentData}) {
  const navigate = useNavigate();
  const [profilePic, setProfilePic] = useState(localStorage.getItem("profilePic")); // Load profile picture from localStorage

  useEffect(() => {
    // Listen for storage changes in case profile picture is updated in another component
    const handleStorageChange = () => {
      setProfilePic(localStorage.getItem("profilePic"));
    };

    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const handleSignOut = () => {
    // Clear any session data if stored (e.g., localStorage, sessionStorage)
    localStorage.removeItem("authToken"); // Example if you're using auth tokens
    sessionStorage.clear();

    // Redirect to sign-in page
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
