// MainStudentDashboard.js
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import GreetingSection from './GreetingSection';
import AttendanceOverview from './AttendanceOverview';
import Alerts from './Alerts';
import '../../styles/student-panel/studentpage.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import AttendancePieChart from './piechart';

const client = axios.create({
  baseURL: "http://localhost:8080",
  // baseURL : "https://attendx-0z49.onrender.com/",
});


function StudentPage() {

  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true); // Initialize loading state

  useEffect(() => {
    const email = localStorage.getItem('email'); // Directly get string value, no JSON.parse needed
    const encodedEmail = encodeURIComponent(email);

    if (email) {
      client.get(`profile-student/${encodedEmail}`)
        .then(response => {
          setStudent(response.data);
          setLoading(false); // Set loading to false after data is fetched
        })
        .catch(error => {
          console.log(`Error while fetching student details: ${error}`);
          setLoading(false); // Also set loading to false if there's an error
        });
    } else {
      setLoading(false); // Set loading to false if no email in localStorage
    }
  }, []);

  const [totalAttendance, setTotalAttendance] = useState(0);

  useEffect(() => {
    client.post("/show-admin-attendance")
      .then(response => {
        console.log(response.data.totalAttendance);
        setTotalAttendance(response.data.totalAttendance);
      })
      .catch(error => {
        console.log(`Error while fetching attendance: ${error}`);
      });
  }, []);

  // Show loading message while fetching data
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <GreetingSection />
        <div className="content-row">
          <AttendanceOverview student={student} totalAttendance={totalAttendance}/>
          <AttendancePieChart student={student} totalAttendance={totalAttendance} />
        </div>
      </div>
    </div>
  );
}

export default StudentPage;
