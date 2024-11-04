// src/pages/AddStudent.js
import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./SidebarLeft";
import '../../styles/admin-panel/AddStudent.css';
import { AuthContext } from "../../contexts/authContext";

function AddStudent() {
  const { handleRegister } = React.useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState(null);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    department: "",
    course: "",
    batch: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.password || !formData.confirmPassword || !formData.department || !formData.course || !formData.batch || !formData.phone) {
      setErrorMessage("Please fill all the fields !!");
      return;
    };
    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("Passwords do not match !!");
      return;
    }
    handleRegister({ formData });

    console.log("Student data submitted:", formData);
  };

  return (
    <div className="add-student-page">
      <Sidebar />
      <div className="add-student-content">
        <Navbar />
        <div className="add-student-container">
          <h2>Register a Student</h2>
          <form onSubmit={handleSubmit} className="add-student-form">
            <div className="form-group">
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                value={formData.firstName}
                onChange={handleChange}
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="department"
                placeholder="Department"
                value={formData.department}
                onChange={handleChange}
              />
              <input
                type="text"
                name="course"
                placeholder="Course"
                value={formData.course}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="batch"
                placeholder="Batch"
                value={formData.batch}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            {errorMessage && <p style={{ color: "red" }} className="error-message">{errorMessage}</p>}
            <button type="submit" className="add-student-button">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddStudent;
