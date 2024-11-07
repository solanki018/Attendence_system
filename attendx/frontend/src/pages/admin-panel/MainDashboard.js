// MainDashboard.js
import React from "react";
import '../../styles/admin-panel/MainDashboard.css';
import getDate from "../../contexts/getDate";
import { handleRemoveStudent } from "../../contexts/handleRemoveStudent";

function MainDashboard({ studentData }) {

  const countStudents = () => {
    let checkedInStudentCount = 0;
    let checkedOutStudentCount = 0;
    studentData.map((student, index) => {
      const today = getDate();
      const todayLog = student.attendanceLog.find(log => log.date === today);
      try {
        if (todayLog.checkInTime) {
          checkedInStudentCount++;
        }
        if(todayLog.checkOutTime) {
          checkedOutStudentCount++;
        }
      }
      catch (err) {
        console.log(err);
      }
    });
    return [checkedInStudentCount, checkedOutStudentCount];
  }

  let [checkedInCount, checkedOutCount] = countStudents();
  const presentCount = (checkedInCount * 100 / studentData.length).toFixed(0);
  const checkOutStudents = (checkedOutCount * 100 / studentData.length ).toFixed(0);


  return (
    <div className="main-dashboard">
      <div className="stats">
        <div className="stat-item checked-in"><div> {presentCount} % </div><div>Checked In</div></div>
        <div className="stat-item checked-out"><div>{checkOutStudents}%</div>Checked Out<div></div></div>
      </div>
      <div className="user-search">
        <input type="text" placeholder="Search" />
      </div>
      <div className="user-cards">
        {studentData.map((student, index) => {
          const today = getDate();
          const todayLog = student.attendanceLog.find(log => log.date === today);

          return (
            <div style={{ lineHeight: "0.5rem", paddingRight: "2rem", paddingBottom: "1.5rem" }} key={index} className="user-card">
              <img style={{ height: "7rem" }} src={require("./dummyProfile.png")} alt="user" />
              <p>{student.email}</p>
              <p style={{ textAlign: "left" }}>Check-In: {todayLog?.checkInTime || "--"}</p>
              <p style={{ textAlign: "left" }}>Check-Out: {todayLog?.checkOutTime || "--"}</p>
              <button onClick={() => handleRemoveStudent(student.email)} className="checkout-button">Remove Student</button>
            </div>
          );
        })}

      </div>

    </div>
  );
}

export default MainDashboard;
