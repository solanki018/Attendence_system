import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import StudentDetails from './StudentDetails';
import AttendanceSummary from './AttendanceSummary';
import AttendanceHistory from './AttendanceHistory';
import '../../styles/student-panel/ProfileStudent.css';

function ProfileStudent({ user }) {
    const hello = {"email" : "keshav11y"}
    return (
        <div className="profile-student-container">
            <Sidebar />
            <div className="profile-content">
                <Navbar />
                <StudentDetails user={hello} />
                <AttendanceSummary user={user} />
                <AttendanceHistory />
            </div>
        </div>
    );
}

export default ProfileStudent;
