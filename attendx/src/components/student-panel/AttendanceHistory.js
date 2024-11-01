import React from 'react';
import '../../styles/student-panel/AttendanceHistory.css';

function AttendanceHistory() {
    return (
        <div className="attendance-history">
            <div className="history-header">
                <h2>Attendance History</h2>
                <div className="buttons">
                    <button>Filter</button>
                    <button>Sort</button>
                </div>
            </div>
            <div className="history-item">
                <div className="history-date">
                    <h3>Nov 1, 2023</h3>
                    <span>On Time</span>
                </div>
                <div className="history-details">
                    <p>Check In Time: 1:30 PM</p>
                    <p>Check Out Time: 10:30 PM</p>
                </div>
            </div>
            {/* Add more history items as needed */}
            <div className="pagination">
                <button>Previous</button>
                <button className="active">1</button>
                <button>Next</button>
            </div>
        </div>
    );
}

export default AttendanceHistory;
