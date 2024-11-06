// MainDashboard.js
import React from "react";
import '../../styles/admin-panel/MainDashboard.css';

function MainDashboard({ studentData }) {
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
        {studentData.map((student, index) => (
          <div style={{lineHeight:"0.5rem", paddingRight:"2rem", paddingBottom:"1.5rem"}} key={index} className="user-card">
            <img style={{height:"7rem"}} src={require("./dummyProfile.png")} alt="user"></img>
            <p>{student.email}</p>
            <p style={{textAlign:"left"}}>Check-In : {student.attendanceLog[0].checkInTime ? student.attendanceLog[0].checkInTime : "--"}</p>
            <p style={{textAlign:"left"}}>Check-out : {student.attendanceLog[0].checkOutTime ? student.attendanceLog[0].checkOutTime : "--"}</p>
            <button className="checkout-button">Remove Student</button>
          </div>
        ))}
      </div>

    </div>
  );
}

export default MainDashboard;
