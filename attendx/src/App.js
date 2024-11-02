// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import SignIn from './components/SignIn';
import AdminPage from './components/admin-panel/AdminPage';
import StudentPage from './components/student-panel/StudentPage';
import ProfileStudent from "./components/student-panel/ProfileStudent"; // Import the ProfileStudent component
import StudentDetails from "./components/student-panel/StudentDetails";

import AddStudent from "./components/admin-panel/AddStudent";
// Inside Routes

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/student" element={<StudentPage />} />
        <Route path="/student/profile" element={<ProfileStudent />} /> {/* Add a route for the ProfileStudent component */}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/dashboard" element={<StudentPage />} />
        <Route path="/profile-student" element={<StudentDetails />} />
        
        <Route path="/addstudent" element={<AddStudent />} />

        
      </Routes>
    </Router>
  );
}

export default App;

