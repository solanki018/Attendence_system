// SidebarRight.js
import React from "react";
import '../../styles/admin-panel/SidebarRight.css';
import getDate from "../../contexts/getDate";

function SidebarRight({ studentData }) {
  const studentCount = studentData.length;
  const checkedInCount = () => {
    let checkedInStudentCount = 0;
    studentData.map((student, index) => {
      const today = getDate();
      const todayLog = student.attendanceLog.find(log => log.date === today);
      try {
        if (todayLog.checkInTime) {
          checkedInStudentCount++;
        }
      }
      catch(err) {
        console.log(err);
      }
    });
    return checkedInStudentCount;
  }

  let count = checkedInCount();

  return (
    <div className="sidebar-right">
      <div className="attendance-summary">
        <h3>Today's Attendance</h3>
        <p>{getDate()}</p>
        <p>Student: {count}/{studentCount}</p>
      </div>
    </div>
  );
}

export default SidebarRight;
