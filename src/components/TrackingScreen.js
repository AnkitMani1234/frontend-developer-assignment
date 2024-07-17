import React, { useState, useRef } from 'react';
import AnalogClock from './AnalogClock';
import Slider from './Slider';
import ShareButton from './ShareButton';
import './TrackingScreen.css';

const TrackingScreen = () => {
  const [speed, setSpeed] = useState(1);
  const clockRef = useRef();

  const handleSpeedChange = (newSpeed) => {
    setSpeed(newSpeed);
    if (clockRef.current) {
      clockRef.current.updateSpeed(newSpeed);
    }
  };

  return (
    <div className="tracking-screen">
      <h2>Tracking Screen</h2>
      <AnalogClock ref={clockRef} speed={speed} />
      <Slider speed={speed} onSpeedChange={handleSpeedChange} />
      <ShareButton speed={speed} />
    </div>
  );
};

export default TrackingScreen;
