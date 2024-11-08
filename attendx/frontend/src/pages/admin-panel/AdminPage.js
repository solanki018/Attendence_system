// AdminDashboard.js
import React from "react";
import Navbar from "./Navbar";
import SidebarLeft from "./SidebarLeft";
import SidebarRight from "./SidebarRight";
import MainDashboard from "./MainDashboard";
import '../../styles/admin-panel/AdminPage.css';
import axios from "axios";
import { useEffect } from "react";

const client = axios.create({
  // baseURL : "http://localhost:8080/",
  baseURL : "https://attendx-0z49.onrender.com/",
})

function AdminDashboard() {

  const [studentData , setStudentData] = React.useState([]);
  useEffect( () => {
    client.post("/get-student-details")
      .then((response) => {
        console.log(response.data);
        setStudentData(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="admin-dashboard">
      <Navbar />
      <div className="admin-content">
        <SidebarLeft />
        <MainDashboard studentData={studentData} />
        <SidebarRight studentData={studentData} />
      </div>
    </div>
  );
}

export default AdminDashboard;
