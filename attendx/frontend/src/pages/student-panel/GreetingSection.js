import React from 'react';
import '../../styles/student-panel/GreetingSection.css';

function GreetingSection() {
  // Get first and last name from localStorage
  const firstName = (localStorage.getItem('firstName')) || 'XYZ';
  const lastName = (localStorage.getItem('lastName')) || '';

  // Format current date
  const currentDate = new Date().toLocaleDateString();

  return (
    <div className="greeting-section">
      <h2>Good Day, {firstName} {lastName}</h2>
      <p className="date">{currentDate}</p>
    </div>
  );
}

export default GreetingSection;
