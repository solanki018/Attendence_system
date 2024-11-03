import React from 'react';
import '../../styles/student-panel/AttendanceSummary.css';
function AttendanceSummary({ student }) {
    return (
        <div className="attendance-summary">
            <div className="summary-box">
                <h3>20</h3>
                <p>Total Attendance</p>
            </div>
            <div className="summary-box">
                <h3>{student.attendance}</h3>
                <p>Total Present</p>
            </div>
        </div>
    );
}

export default AttendanceSummary;
