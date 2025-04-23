import React from 'react';

const Spinner = () => {
  return (
    <div style={{
      width: '64px',
      height: '64px',
      margin: '32px',
      borderRadius: '50%',
      backgroundColor: '#38bdf8',
      animation: 'ping 1s infinite'
    }}></div>
  );
}

export default Spinner;
