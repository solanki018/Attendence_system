// SidebarRight.js
import React from "react";
import '../../styles/admin-panel/SidebarRight.css';

function SidebarRight() {
  return (
    <div className="sidebar-right">
      <div className="attendance-summary">
        <h3>Today's Attendance</h3>
        <p>Date: July 3, 2023</p>
        <p>Student: 22/43</p>
      </div>
      <div className="recent-attendance">
        <h3>Recent Attendance</h3>
        <ul>
          <li>Sourabh - 2 Min Ago</li>
          <li>Sourabh - 2 Min Ago</li>
          {/* Add more recent attendance items */}
        </ul>
      </div>
    </div>
  );
}

export default SidebarRight;
