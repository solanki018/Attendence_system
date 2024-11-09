import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import '../../styles/student-panel/StudentDetails.css';
import axios from 'axios';

const client = axios.create({
    baseURL: "http://localhost:8080",
    // baseURL : "https://attendx-0z49.onrender.com/",
});

function StudentDetails() {

    const [student, setStudent] = useState(null);
    const [loading, setLoading] = useState(true); // Initialize loading state

    useEffect(() => {
        const email = localStorage.getItem('email'); // Directly get string value, no JSON.parse needed
        const encodedEmail = encodeURIComponent(email);

        if (email) {
            client.get(`profile-student/${encodedEmail}`)
                .then(response => {
                    setStudent(response.data);
                    setLoading(false); // Set loading to false after data is fetched
                })
                .catch(error => {
                    console.log(`Error while fetching student details: ${error}`);
                    setLoading(false); // Also set loading to false if there's an error
                });
        } else {
            setLoading(false); // Set loading to false if no email in localStorage
        }
    }, []);

    const [totalAttendance, setTotalAttendance] = useState(0);

    useEffect(() => {
        client.post("/show-admin-attendance")
            .then(response => {
                console.log(response.data.totalAttendance);
                setTotalAttendance(response.data.totalAttendance);
            })
            .catch(error => {
                console.log(`Error while fetching attendance: ${error}`);
            });
    }, []);

    // Show loading message while fetching data
    if (loading) {
        return <div>Loading...</div>;
    }

    const profilePic = "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png";

    return (
        <div className="container">
            <Sidebar /> {/* Sidebar component */}
            <div className="content">
                <Navbar /> {/* Navbar component */}
                <div className="student-details">
                    <div className="student-info">
                        <div className="profile-photo">
                            <img src={profilePic} alt="Profile" />
                            <input type="file" accept="image/*" style={{ display: 'none' }} id="upload-profile-pic" />
                            <label htmlFor="upload-profile-pic" className="upload-label">Upload</label>
                        </div>
                        <div className="studentBioData">
                            <div className="info">
                                <p><strong>Batch:</strong> {student.batch}</p>
                                <p><strong>Phone No:</strong> +91-{student.phone}</p>
                                <p><strong>Email:</strong> {student.email}</p>
                                <p><strong>Course:</strong> {student.course}</p>
                                <p><strong>Branch:</strong> {student.branch}</p>
                            </div>
                            <div className="attendance-summary">
                                <div className="total-attendance">
                                    <p>{totalAttendance}</p>
                                    <span>Total Attendance</span>
                                </div>
                                <div className="total-absents">
                                    <p>{student.attendance}</p>
                                    <span>Total Presents</span>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="attendance-history">
                        <h3>Attendance History</h3>
                        {student.attendanceLog.map((log, index) => (
                            <div key={index} className="history-item">
                                <p>{log.date}</p>
                                <div className="time">
                                    <span>Check In Time: {log.checkInTime ? log.checkInTime : "--"}</span>
                                    <span>Check Out Time: {log.checkOutTime ? log.checkOutTime : "--"}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StudentDetails;
