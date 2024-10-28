import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Admin credentials
    const adminEmail = 'admin@iitrpr.ac.in';
    const adminPassword = 'attendx';

    if (email === adminEmail && password === adminPassword) {
      // Navigate to Admin Page
      navigate('/admin');
    } else if (localStorage.getItem('email') === email && localStorage.getItem('password') === password) {
      // Navigate to Student Page
      navigate('/student');
    } else {
      // Display error message for incorrect credentials
      setErrorMessage('Invalid email or password.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <h1>Attendance Management System</h1>
        <p>Indian Institute of Technology, Ropar</p>
      </div>
      <div className="login-right">
        <h2>Welcome to AttendX</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="John@ibox.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className="options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="/">Forgot password?</a>
          </div>

          <button type="submit" className="student-button">Log in</button>
        </form>
        {errorMessage && <p className="error">{errorMessage}</p>}
        
        {/* Link to Sign-In page */}
        <p>
          Don’t have an account? <Link to="/sign-in">Sign in as student</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
