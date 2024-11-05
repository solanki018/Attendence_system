// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './pages/SignIn';
import AdminPage from './pages/admin-panel/AdminPage';
import StudentPage from './pages/student-panel/StudentPage';
import StudentDetails from "./pages/student-panel/StudentDetails";
import { AuthProvider } from './contexts/authContext';
import AdminLogin from './pages/AdminLogin';
import AddStudent from "./pages/admin-panel/AddStudent";
import ManualAttendance from "./pages/admin-panel/ManualAttendance";


function App() {
  return (
    <Router>
      <AuthProvider >
        <Routes>
          <Route path="/" element={<SignIn />} /> {/* Path for student attendance" */}
          <Route path="/admin" element={<AdminLogin />} /> {/* Path for admin attendance" */}
          <Route path="/admin/dashboard" element={<AdminPage />} /> {/* Path for admin dashboard */}
          <Route path="/student" element={<StudentPage />} />     {/* Main Dashboard of student page */}
          <Route path="/profile-student" element={<StudentDetails />} />
          <Route path="/addstudent" element={<AddStudent />} />
          <Route path="/manual-attendance" element={<ManualAttendance />} />
          
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;

