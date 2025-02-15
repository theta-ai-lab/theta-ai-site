import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Team from './pages/Team';
import CustomCursor from "./components/CustomCursor"; // Import custom cursor

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    // Update background color dynamically to prevent white flashes
    document.body.style.backgroundColor = darkMode ? "#000" : "#e0e0e0"; 
    document.documentElement.style.backgroundColor = darkMode ? "#000" : "#e0e0e0"; 
  }, [darkMode]);

  const toggleMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <div className={`app ${darkMode ? 'dark' : 'light'}`}>
      <Router>
        <Header darkMode={darkMode} toggleMode={toggleMode} />
        <CustomCursor darkMode={darkMode} /> {/* Pass darkMode as a prop */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          {/* You can add more routes, e.g., for /projects, as needed */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
