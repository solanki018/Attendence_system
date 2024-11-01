// Alerts.js
import React from 'react';
import '../../styles/student-panel/Alerts.css';

function Alerts() {
  return (
    <div className="alerts">
      <h3>Alerts</h3>
      <div className="alert success">Attendance Marked - Successfully at 10pm</div>
      <div className="alert failure">Attendance Not Marked - October 23rd</div>
      <div className="alert success">Attendance Marked - Successfully at 10pm</div>
    </div>
  );
}

export default Alerts;
