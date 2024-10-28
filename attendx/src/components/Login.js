import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../styles/login.css";

function Login() {
  const [loginData, setLoginData] = useState({ email: '', password: '', rememberMe: false });
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setLoginData({
      ...loginData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Retrieve stored credentials from localStorage
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    if (loginData.email === storedEmail && loginData.password === storedPassword) {
      // Navigate to the main page upon successful login
      navigate('/main');
    } else {
      setErrorMessage('Invalid email or password');
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
            name="email"
            placeholder="John@ibox.com"
            value={loginData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={loginData.password}
            onChange={handleChange}
            required
          />

          <div className="options">
            <label>
              <input
                type="checkbox"
                name="rememberMe"
                checked={loginData.rememberMe}
                onChange={handleChange}
              /> Remember me
            </label>
            <a href="/">Forgot password?</a>
          </div>

          <button type="submit" className="student-button">Log in as student</button>
          <button type="submit" className="admin-button">Log in as admin</button>
        </form>
        {errorMessage && <p className="error">{errorMessage}</p>}
        <p>
          Don't have an account? <Link to="/sign-in">Sign in as student</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
