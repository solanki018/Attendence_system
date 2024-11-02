import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/signin.css';
import { AuthContext } from '../contexts/authContext.js';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function SignIn() {

  const { handleLogin, handleRegister, isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if email ends with "@iitrpr.ac.in"
    if (!email.endsWith('@iitrpr.ac.in')) {
      setErrorMessage('Not a valid IIT Ropar student ID !!');
      return;
    }

    try {
      let response = await handleLogin({ firstName, lastName, email, password });
      if (response.status == 200) {
        navigate('/student');
      } else {
        setErrorMessage("Login Failed, Please check credentials");
      }
    }
    catch (err) {
      console.log(err);
      setErrorMessage("Login Failed, Please check your credentials");
    }


    // // Retrieve the existing users from localStorage
    // const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

    // Check if the email is already registered
    // const isEmailRegistered = existingUsers.some((user) => user.email === email);
    // if (isEmailRegistered) {
    //   setErrorMessage('This email is already registered.');
    //   return;
    // }

    // Create new user object
    // const newUser = {
    //   firstName,
    //   lastName,
    //   email,
    //   password,
    //   // batch,
    //   // course,
    //   // branch
    // };

    // Save the new user to localStorage
    // localStorage.setItem('users', JSON.stringify([...existingUsers, newUser]));
  };

  return (
    <div className="signin-container">
      <div className="signin-left">
        <h1>Attendance Management System</h1>
        <p>Indian Institute of Technology, Ropar</p>
      </div>

      <div className="signin-right">
        <h2>Welcome to AttendX</h2>
        <form>
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
          {/* <div className="form-row">
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
          /> */}

          {/* Submit button to navigate to student page */}
          <button onClick={handleSubmit} type="submit">Sign in as student</button>
        </form>
        <p>
          Step Into control center --&gt; <Link to="/admin">Admin Login</Link>
        </p>

        {errorMessage && <p style={{ color: "red" }} className="error">{errorMessage}</p>}
      </div>
    </div>
  );
}

export default SignIn;
