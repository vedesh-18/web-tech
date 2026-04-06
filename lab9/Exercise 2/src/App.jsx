import React from 'react';
import StudentCard from './components/StudentCard';

const App = () => {
  const students = [
    { id: 1, name: 'Alice Johnson', department: 'Computer Science', marks: 95 },
    { id: 2, name: 'Bob Smith', department: 'Mathematics', marks: 82 },
    { id: 3, name: 'Charlie Dean', department: 'Physics', marks: 74 },
    { id: 4, name: 'Diana Ross', department: 'Chemistry', marks: 68 },
    { id: 5, name: 'Edward Norton', department: 'Economics', marks: 58 },
    { id: 6, name: 'Fiona Apple', department: 'Literature', marks: 91 }
  ];

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Student Performance Dashboard</h1>
        <p className="app-subtitle">Real-time tracking of student academic excellence</p>
        <div className="header-divider"></div>
      </header>

      <main className="student-grid">
        {students.map((student) => (
          <StudentCard 
            key={student.id} 
            name={student.name} 
            department={student.department} 
            marks={student.marks} 
          />
        ))}
      </main>

      <footer className="app-footer">
        <p>&copy; 2026 Academic Excellence Platform</p>
      </footer>
    </div>
  );
};

export default App;
