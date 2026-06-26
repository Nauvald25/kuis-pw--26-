import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {

    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);


    return () => clearInterval(timerId);
  }, []);

  
  const formatTime = (date) => {
    return date.toLocaleTimeString('id-ID', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    });
  };

  return (
    <div
      style={{
        fontSize: '4rem',
        fontWeight: '800',
        fontFamily: 'monospace',
        letterSpacing: '2px',
        margin: '20px 0',
        padding: '20px 40px',
        borderRadius: '15px',
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(5px)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
      }}
    >
      {formatTime(time)}
    </div>
  );
};

export default Clock;