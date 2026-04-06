import React from 'react';
import StudentProfile from './components/StudentProfile';

function App() {
  // Functional Requirements: Export the component and render it inside the main application
  // Ensure the application interface is displayed through the root component
  return (
    <div className="App">
      <main>
        <StudentProfile />
      </main>
    </div>
  );
}

export default App;
