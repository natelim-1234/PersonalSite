import React from 'react';

function Pill({ children, className = '' }) {
  return (
    <span className={`pill ${className}`.trim()}>
      {children}
    </span>
  );
}

export default Pill;
