// MainDashboard.js
import React from "react";
import '../../styles/admin-panel/MainDashboard.css';

function MainDashboard() {
  return (
    <div className="main-dashboard">
      <div className="stats">
        <div className="stat-item checked-in"><div>0% </div><div>Checked In</div></div>
        <div className="stat-item checked-out"><div>50%</div>Checked Out<div></div></div>
        <div className="stat-item absent"><div>0%</div><div>Absent</div></div>
      </div>
      <div className="user-search">
        <input type="text" placeholder="Search" />
      </div>
      <div className="user-cards">
        <div className="user-card">
          <img src="path-to-profile-picture.jpg" alt="User" />
          <h4>John Doe</h4>
          <p>john@example.com</p>
          <button className="checkout-button">Check Out 5:00 PM</button>
        </div>
        {/* Repeat user cards as needed */}
      </div>
    </div>
  );
}

export default MainDashboard;
