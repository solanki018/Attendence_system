import React from 'react';
import '../style/signin.css';

function SignIn() {
  return (
    <div className="signin-container">
      {/* Left Section */}
      <div className="signin-left">
        <h1>Attendance Management System</h1>
        <p>Indian Institute of Technology, Ropar</p>
      </div>

      {/* Right Section */}
      <div className="signin-right">
        <h2>Welcome to AttendX</h2>
        <form>
          <div className="form-row">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <div className="form-row">
            <input type="text" placeholder="Batch" />
            <input type="text" placeholder="Course" />
          </div>
          <div className="form-row">
            <input type="text" placeholder="Branch" />
          </div>
          <button type="submit">Sign in as student</button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
