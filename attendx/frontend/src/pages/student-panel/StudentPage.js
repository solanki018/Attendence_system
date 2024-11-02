// MainStudentDashboard.js
import React, { useEffect, useLayoutEffect } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import GreetingSection from './GreetingSection';
import AttendanceOverview from './AttendanceOverview';
import Alerts from './Alerts';
import '../../styles/student-panel/studentpage.css';
import { useNavigate } from 'react-router-dom';
import useAuthRedirect from '../../contexts/isAuthenticated';

function StudentPage() {

  // useAuthRedirect();

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <GreetingSection />
        <div className="content-row">
          <AttendanceOverview />
          <Alerts />
        </div>
      </div>
    </div>
  );
}

export default StudentPage;
