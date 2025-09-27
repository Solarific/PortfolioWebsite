import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <div className="loading-content">
        <div className="loading-spinner"></div>
        <p>Loading Portfolio...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;