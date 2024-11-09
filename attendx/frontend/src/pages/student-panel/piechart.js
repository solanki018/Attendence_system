// AttendancePieChart.js
import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import "../../styles/student-panel/pieChart.css";

ChartJS.register(ArcElement, Tooltip, Legend);

function AttendancePieChart({ student, totalAttendance }) {
  // Calculate attendance percentages
  const missedDays = totalAttendance - student.attendance;
  const attendanceData = [
    (student.attendance / totalAttendance) * 100, // Attended percentage
    (missedDays / totalAttendance) * 100    // Missed percentage
  ];

  const data = {
    labels: ["Attended", "Missed"],
    datasets: [
      {
        data: attendanceData,
        backgroundColor: ["#4caf50", "#ff5252"], // Colors for attended and missed
        hoverBackgroundColor: ["#388e3c", "#ff1744"], // Hover colors
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.label}: ${context.raw.toFixed(2)}%`;
          },
        },
      },
    },
  };

  return (
    <div>
      <Pie data={data} options={options} />
    </div>
  )

}

export default AttendancePieChart;
