import React, { useEffect, useState, forwardRef, useImperativeHandle } from 'react';

const AnalogClock = forwardRef(({ speed }, ref) => {
  const [time, setTime] = useState(new Date());

  useImperativeHandle(ref, () => ({
    updateSpeed(newSpeed) {
      clearInterval(intervalId);
      startClock(newSpeed);
    }
  }));

  useEffect(() => {
    startClock(speed);
    return () => clearInterval(intervalId);
  }, []);

  const startClock = (clockSpeed) => {
    const intervalId = setInterval(() => {
      setTime(new Date(time => new Date(time.getTime() - (1000 * clockSpeed))));
    }, 1000);

    return intervalId;
  };

  return (
    <div className="analog-clock">
      <div>{time.toLocaleTimeString()}</div>
    </div>
  );
});

export default AnalogClock;
