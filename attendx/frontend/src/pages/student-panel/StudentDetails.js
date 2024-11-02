import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import '../../styles/student-panel/StudentDetails.css';

function StudentDetails() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [profilePic, setProfilePic] = useState(localStorage.getItem('profilePic') || 'default-avatar.png'); // Load profile picture from localStorage

    useEffect(() => {
        // Retrieve user data from localStorage
        const userData = {
            firstName: localStorage.getItem('firstName'),
            lastName: localStorage.getItem('lastName'),
            email: localStorage.getItem('email'),
            batch: localStorage.getItem('batch'),
            course: localStorage.getItem('course'),
            branch: localStorage.getItem('branch'),
            phone: localStorage.getItem('phone') || "N/A",
        };

        if (userData.email) {
            setUser(userData); // Set user if data exists in localStorage
        } else {
            navigate('/signin'); // Redirect to sign-in if no user data
        }
    }, [navigate]);

    const handleProfilePicChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64Image = reader.result;
                setProfilePic(base64Image); // Update the profile picture state
                localStorage.setItem('profilePic', base64Image); // Save to localStorage
            };
            reader.readAsDataURL(file);
        }
    };

    if (!user) {
        return <p>Loading...</p>;
    }

    return (
        <div className="container">
            <Sidebar /> {/* Sidebar component */}
            <div className="content">
                <Navbar /> {/* Navbar component */}
                <div className="student-details">
                    <div className="student-info">
                        <div className="profile-photo">
                            <img src={profilePic} alt="Profile" />
                            <input type="file" accept="image/*" onChange={handleProfilePicChange} style={{ display: 'none' }} id="upload-profile-pic" />
                            <label htmlFor="upload-profile-pic" className="upload-label">Upload</label>
                        </div>
                        <div className="info">
                            <p><strong>Batch:</strong> {user.batch}</p>
                            <p><strong>Phone No:</strong> {user.phone}</p>
                            <p><strong>Email Address:</strong> {user.email}</p>
                            <p><strong>Course:</strong> {user.course}</p>
                            <p><strong>Branch:</strong> {user.branch}</p>
                        </div>
                        <div className="attendance-summary">
                            <div className="total-attendance">
                                <p>20</p>
                                <span>Total Attendance</span>
                            </div>
                            <div className="total-absents">
                                <p>2</p>
                                <span>Total Absents</span>
                            </div>
                        </div>
                    </div>

                    <div className="attendance-history">
                        <h3>Attendance History</h3>
                        <div className="history-item">
                            <p>Nov 1, 2023</p>
                            <div className="time">
                                <span>Check In Time: 1:30 PM</span>
                                <span>Check Out Time: 10:30 PM</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StudentDetails;
