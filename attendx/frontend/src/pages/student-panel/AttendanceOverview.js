// AttendanceOverview.js
import React from 'react';
import getDate from "../../contexts/getDate";
import '../../styles/student-panel/AttendanceOverview.css';



function AttendanceOverview({ student, totalAttendance }) {
  let percentageAttendance = (student.attendance * 100 / totalAttendance).toFixed(2);
  const today = getDate();
  const todayLog = student.attendanceLog.find(log => log.date === today);
  return (
    <div className="attendance-overview">
      <div className="attendance-box"><div style={{ marginBottom: "1rem" }}>Check-In</div><div style={{ textAlign: "center" }}> {todayLog?.checkInTime || "--"} </div></div>
      <div className="attendance-box"><div style={{ marginBottom: "1rem" }}>Check-out</div><div style={{ textAlign: "center" }}> {todayLog?.checkOutTime || "--"} </div></div>
      <div className="attendance-progress">
        <p>This month</p>
        <div className="progress-circle"> {percentageAttendance} % </div>
      </div>
    </div>
  );
}

export default AttendanceOverview;
