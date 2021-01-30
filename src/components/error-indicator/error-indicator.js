import React from 'react';

import './error-indicator.css';


const ErrorIndicator = () => {
  return (
    <div className="error-indicator">

      <h1 className="boom">BOOM!</h1>
      <span>
        something has gone terribly wrong
      </span>
      
    </div>
  );
};

export default ErrorIndicator;