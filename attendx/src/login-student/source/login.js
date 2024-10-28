import React from 'react';
import { Link } from 'react-router-dom';
import "../style/login.css"; // Create this CSS file to style the component

function Login() {
  return (
    <div className="login-container">
      {/* Left Section */}
      <div className="login-left">
        <h1>Attendence Management System</h1>
        <p>Indian Institute of Technology, Ropar</p>
      </div>

      {/* Right Section */}
      <div className="login-right">
        <h2>Welcome to AttendX</h2>
        <form>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="John@ibox.com" />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Password" />

          <div className="options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="/">Forgot password?</a>
          </div>

          <button type="submit" className="student-button">Log in as student</button>
          <button type="submit" className="admin-button">Log in as admin</button>
        </form>
        <p>
            Does not have any account? <Link to="/sign-in">Sign in as student</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
