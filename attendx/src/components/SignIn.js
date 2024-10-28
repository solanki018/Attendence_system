import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/signin.css';

function SignIn() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [batch, setBatch] = useState('');
  const [course, setCourse] = useState('');
  const [branch, setBranch] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if email ends with "@iitrpr.ac.in"
    if (!email.endsWith('@iitrpr.ac.in')) {
      setErrorMessage('Email must end with @iitrpr.ac.in');
      return;
    }

    // Prevent duplicate registration
    if (localStorage.getItem('email') === email) {
      setErrorMessage('This email is already registered.');
      return;
    }

    // Save user data to localStorage
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    localStorage.setItem('firstName', firstName);
    localStorage.setItem('lastName', lastName);
    localStorage.setItem('batch', batch);
    localStorage.setItem('course', course);
    localStorage.setItem('branch', branch);

    // Redirect to Student Page
    navigate('/student');
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
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className="form-row">
            <input
              type="text"
              placeholder="Batch"
              value={batch}
              onChange={(e) => setBatch(e.target.value)}
            />
            <input
              type="text"
              placeholder="Course"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
            />
          </div>
          <input
            type="text"
            placeholder="Branch"
            value={branch}
            onChange={(e) => setBranch(e.target.value)}
          />
          
          {/* Submit button to navigate to student page */}
          <button type="submit">Sign in as student</button>
        </form>

        {errorMessage && <p className="error">{errorMessage}</p>}
      </div>
    </div>
  );
}

export default SignIn;
