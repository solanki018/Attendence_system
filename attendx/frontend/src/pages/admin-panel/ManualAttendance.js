// src/pages/AddStudent.js
import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./SidebarLeft";
import '../../styles/admin-panel/AddStudent.css';
import { handleManualAttendance } from "../../contexts/adminAttendance";


function AddStudent() {

  const [entry, setEntry] = useState("");

  const handleChange = (e) => {
    setEntry( e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("This is student's entry : ", entry);
    handleManualAttendance(entry);
    window.alert(`Attendance marked for ${entry} successfully !!`);
    console.log("Student data submitted:", entry);
  };

  return (
    <div className="add-student-page">
      <Sidebar />
      <div className="add-student-content">
        <Navbar />
        <div className="add-student-container">
          <h2>Take Attendance</h2>
          <form onSubmit={handleSubmit} className="add-student-form">
            <div className="form-group">
              <input
                type="text"
                name="entry"
                placeholder="Enter Student Roll Number"
                value={entry}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="add-student-button">Add User</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddStudent;
