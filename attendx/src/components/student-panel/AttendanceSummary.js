import React from 'react';
import '../../styles/student-panel/AttendanceSummary.css';
function AttendanceSummary({ user }) {
    return (
        <div className="attendance-summary">
            <div className="summary-box">
                <h3>20</h3>
                <p>Total Attendance</p>
            </div>
            <div className="summary-box">
                <h3>2</h3>
                <p>Total Absents</p>
            </div>
        </div>
    );
}

export default AttendanceSummary;
