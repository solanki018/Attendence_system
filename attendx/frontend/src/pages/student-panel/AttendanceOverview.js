// AttendanceOverview.js
import React from 'react';
import '../../styles/student-panel/AttendanceOverview.css';

function AttendanceOverview() {
  return (
    <div className="attendance-overview">
      <div className="attendance-box"><div>Check-in:</div><div> 7:41 AM</div></div>
      <div className="attendance-box">Check-out: 7:41 PM</div>
      <div className="attendance-progress">
        <p>This month</p>
        <div className="progress-circle">14%</div>
      </div>
    </div>
  );
}

export default AttendanceOverview;
