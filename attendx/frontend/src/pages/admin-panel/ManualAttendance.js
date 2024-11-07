// src/pages/AddStudent.js
import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./SidebarLeft";
import '../../styles/admin-panel/AddStudent.css';
import { handleManualAttendance } from "../../contexts/adminAttendance";
import loader from "./loader";


function AddStudent() {

  const [entry, setEntry] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setEntry(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("This is student's entry : ", entry);
    try {
      setLoading(true);
      await handleManualAttendance(entry);
      setLoading(false);
    }
    catch (err) {
      console.log(err);
      setLoading(false);
      return;
    }
    setEntry("");
    setTimeout(() => {
      window.alert(`Attendance marked for ${entry} successfully !!`);
      setEntry("");
    }, 200);
  };


  return (

    <div className="add-student-page">
      {loading && loader()}
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
            <button type="submit" className="add-student-button">Mark Attendance</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddStudent;
