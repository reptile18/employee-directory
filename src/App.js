import React, { useEffect } from 'react';
import './App.css';
import EmployeeDirectory from './components/EmployeeDirectory';

function App() {
  useEffect(() => {
    console.log({process.env});
  });
  return (
    <div className="App">
      <EmployeeDirectory />
    </div>
  );
}

export default App;
