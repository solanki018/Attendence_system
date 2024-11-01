// GreetingSection.js
import React from 'react';
import '../../styles/student-panel/GreetingSection.css';

function GreetingSection() {
  const currentDate = new Date().toLocaleDateString();

  return (
    <div className="greeting-section">
      <h2>Good Day, Sourabh</h2>
      <p className="date">{currentDate}</p>
    </div>
  );
}

export default GreetingSection;
