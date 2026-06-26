import React, { useState } from 'react';
import Clock from "./Clock";
import ThemeToggle from "./ThemeToggle";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true); 

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };


  const appStyle = {
    backgroundColor: isDarkMode ? '#121212' : '#f5f7fa',
    color: isDarkMode ? '#ffffff' : '#1e1e1e',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'background-color 0.3s ease, color 0.3s ease',
    fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    textAlign: 'center',
  };

  return (
    <div style={appStyle}>
      <div style={{ padding: '20px' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>
          Digital Jam Kerja
        </h1>
        <p style={{ opacity: 0.7, marginBottom: '30px' }}>
          Tugas Kuis Mandiri - Real-Time Dashboard
        </p>
        
        
        <Clock />
        
        
        <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      </div>
    </div>
  );
}

export default App;