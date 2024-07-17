import React from 'react';

const Slider = ({ speed, onSpeedChange }) => {
  return (
    <div className="slider">
      <input 
        type="range" 
        min="1" 
        max="5" 
        value={speed} 
        onChange={(e) => onSpeedChange(e.target.value)} 
      />
    </div>
  );
};

export default Slider;
