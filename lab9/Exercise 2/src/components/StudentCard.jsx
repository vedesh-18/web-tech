import React from 'react';

const StudentCard = ({ name, department, marks }) => {
  // Determine color based on marks for visual flair
  const getStatusColor = (m) => {
    if (m >= 80) return '#10b981'; // Green
    if (m >= 60) return '#f59e0b'; // Amber
    return '#ef4444'; // Red
  };

  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();

  return (
    <div className="student-card">
      <div className="card-inner">
        <div className="avatar-section">
          <div className="student-avatar" style={{ background: `linear-gradient(135deg, ${getStatusColor(marks)}, #6366f1)` }}>
            {initials}
          </div>
          <div className="status-dot" style={{ backgroundColor: getStatusColor(marks) }}></div>
        </div>
        
        <div className="student-info">
          <h3 className="student-name">{name}</h3>
          <p className="student-dept">{department}</p>
        </div>

        <div className="marks-display">
          <div className="marks-value">{marks}</div>
          <div className="marks-label">Total Marks</div>
        </div>

        <div className="progress-bar-container">
          <div 
            className="progress-bar-fill" 
            style={{ 
              width: `${marks}%`, 
              backgroundColor: getStatusColor(marks) 
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default StudentCard;
