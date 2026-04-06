import React from 'react';

const StudentProfile = () => {
  // Functional Requirements: Store student details inside the component using JavaScript variables
  const name = "Vedesh S";
  const department = "Computer Science and Engineering";
  const year = "3rd Year";
  const section = "B";

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-header">
          <div className="avatar">
            {name.charAt(0)}
          </div>
          <h1 className="profile-name">{name}</h1>
          <p className="profile-status">Active Student</p>
        </div>
        
        <div className="profile-details">
          <div className="detail-item">
            <span className="detail-label">Department</span>
            <span className="detail-value">{department}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Year of Study</span>
            <span className="detail-value">{year}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Section</span>
            <span className="detail-value">{section}</span>
          </div>
        </div>
        
        <div className="profile-footer">
          <button className="primary-btn">View Full Portfolio</button>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
