import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom';
import '../styles/signin.css';

function SignIn() {
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', password: '', batch: '', course: '', branch: ''
  });
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setErrorMessage('Email and password are required.');
      return;
    }

    // Save credentials to localStorage
    localStorage.setItem('email', formData.email);
    localStorage.setItem('password', formData.password);

    navigate('/main');
  };

  return (
    <div className="signin-container">
      <div className="signin-left">
        <h1>Attendance Management System</h1>
        <p>Indian Institute of Technology, Ropar</p>
      </div>

      <div className="signin-right">
        <h2>Welcome to AttendX</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <div className="form-row">
            <input
              type="text"
              placeholder="Batch"
              name="batch"
              value={formData.batch}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Course"
              name="course"
              value={formData.course}
              onChange={handleChange}
            />
          </div>
          <input
            type="text"
            placeholder="Branch"
            name="branch"
            value={formData.branch}
            onChange={handleChange}
          />
          <button type="submit">Sign in as student</button>
        </form>
        {errorMessage && <p className="error">{errorMessage}</p>}
      </div>
    </div>
  );
}

export default SignIn;
