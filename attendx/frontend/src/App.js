// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './pages/SignIn';
import AdminPage from './pages/admin-panel/AdminPage';
import StudentPage from './pages/student-panel/StudentPage';
import ProfileStudent from "./pages/student-panel/ProfileStudent"; // Import the ProfileStudent component
import StudentDetails from "./pages/student-panel/StudentDetails";
import { AuthProvider } from './contexts/authContext';
import AdminLogin from './pages/AdminLogin';

function App() {
  return (
    <Router>
      <AuthProvider >
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminPage />} />
          <Route path="/student" element={<StudentPage />} />
          <Route path="/student/profile" element={<ProfileStudent />} /> {/* Add a route for the ProfileStudent component */}
          <Route path="/dashboard" element={<StudentPage />} />
          <Route path="/profile-student" element={<StudentDetails />} />
          {/* Add more routes as needed */}
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;

