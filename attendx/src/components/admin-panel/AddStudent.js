// src/pages/AddStudent.js
import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./SidebarLeft";
import '../../styles/admin-panel/AddStudent.css';

function AddStudent() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    department: "",
    course: "",
    batch: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to submit the form, like an API call here
    console.log("Student data submitted:", formData);
  };

  return (
    <div className="add-student-page">
      <Sidebar />
      <div className="add-student-content">
        <Navbar />
        <div className="add-student-container">
          <h2>Add User</h2>
          <form onSubmit={handleSubmit} className="add-student-form">
            <div className="form-group">
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="department"
                placeholder="Department"
                value={formData.department}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="course"
                placeholder="Course"
                value={formData.course}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="batch"
                placeholder="Batch"
                value={formData.batch}
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
