import React from 'react';

const ThemeToggle = ({ isDarkMode, toggleTheme }) => {
  return (
    <div style={{ marginBottom: '20px' }}>
      <button
        onClick={toggleTheme}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          fontWeight: 'bold',
          cursor: 'pointer',
          borderRadius: '25px',
          border: 'none',
          backgroundColor: isDarkMode ? '#ffffff' : '#1e1e1e',
          color: isDarkMode ? '#1e1e1e' : '#ffffff',
          transition: 'all 0.3s ease',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        }}
      >
        Ubah ke {isDarkMode ? 'Light Mode' : ' Dark Mode'}
      </button>
      <p style={{ marginTop: '10px', fontSize: '14px', opacity: 0.8 }}>
        Status Aktif: <strong>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</strong>
      </p>
    </div>
  );
};

export default ThemeToggle;