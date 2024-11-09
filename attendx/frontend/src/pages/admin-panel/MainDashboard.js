import React, { useEffect, useState } from "react";
import '../../styles/admin-panel/MainDashboard.css';
import getDate from "../../contexts/getDate";
import { handleRemoveStudent } from "../../contexts/handleRemoveStudent";

function MainDashboard({ studentData, totalAttendance }) {

  // search student by entry number functionality:
  const [entry, setEntry] = useState("");
  const [filteredStudents, setFilteredStudents] = useState(studentData);

  useEffect(() => {
    setFilteredStudents(studentData); // Set initial data
  }, [studentData]);

  const handleFilterStudents = (e) => {
    e.preventDefault();
    const response = studentData.filter(student => student.email.startsWith(entry));
    setFilteredStudents(response);
    console.log(response);
    setEntry("");
  };

  const rollbackData = () => {
    setFilteredStudents(studentData);
  };

  const countStudents = () => {
    let checkedInStudentCount = 0;
    let checkedOutStudentCount = 0;
    filteredStudents.forEach((student) => {
      const today = getDate();
      const todayLog = student.attendanceLog.find(log => log.date === today);
      if (todayLog) {
        if (todayLog.checkInTime) checkedInStudentCount++;
        if (todayLog.checkOutTime) checkedOutStudentCount++;
      }
    });
    return [checkedInStudentCount, checkedOutStudentCount];
  };

  const [checkedInCount, checkedOutCount] = countStudents();
  const presentCount = ((checkedInCount * 100) / studentData.length).toFixed(0);
  const checkOutStudents = ((checkedOutCount * 100) / studentData.length).toFixed(0);

  return (
    <div className="main-dashboard">
      <div className="stats">
        <div className="stat-item checked-in"><div>{presentCount} %</div><div>Checked In</div></div>
        <div className="stat-item checked-out"><div>{checkOutStudents}%</div><div>Checked Out</div></div>
      </div>

      <div className="user-search">
        <form onSubmit={handleFilterStudents}>
          <div style={{ display: "inline" }}>
            <input
              type="text"
              placeholder="Search"
              value={entry}
              onChange={(e) => setEntry(e.target.value)}
            />
            <button style={{ display: "inline" }} type="submit">
              <img src={require("./search.png")} alt="Search" />
            </button>
            <button type="button" onClick={rollbackData}>
              <img src={require("./reset.png")} alt="Reset" />
            </button>
          </div>
        </form>
      </div>

      <div className="user-cards">
        {filteredStudents.length === 0 ? (
          <div className="no-results-animation">
            <img src={require("./notfound.gif")} alt="No results found" style={{ width: "200px", margin: "20px auto" }} />
            <p>No students found matching the entry.</p>
          </div>
        ) : (
          filteredStudents.map((student, index) => {
            const today = getDate();
            const todayLog = student.attendanceLog.find(log => log.date === today);
            let percentageAttendance = (student.attendance / totalAttendance.totalAttendance) * 100;
            percentageAttendance = percentageAttendance.toFixed(2);

            return (
              <div style={{ lineHeight: "0.5rem", paddingRight: "2rem", paddingBottom: "1.5rem" }} key={index} className="user-card">
                <img style={{ height: "7rem" }} src={require("./dummyProfile.png")} alt="user" />
                <p>{student.email}</p>
                <p style={{ textAlign: "left" }}>Check-In: {todayLog?.checkInTime || "--"}</p>
                <p style={{ textAlign: "left" }}>Check-Out: {todayLog?.checkOutTime || "--"}</p>
                <p style={{ textAlign: "left" }}>Present: {student.attendance}</p>
                <p style={{ textAlign: "left" }}>Attendance %: {percentageAttendance}</p>
                <button onClick={() => handleRemoveStudent(student.email)} className="checkout-button">Remove Student</button>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default MainDashboard;
