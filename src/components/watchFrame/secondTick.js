import React, { useState, useEffect } from 'react';

const SecondTick = () => {
  const [seconds, setSeconds] = useState(null);

  useEffect(() => {

    start();
  }, []);

  const start = () => {
    setInterval(() => {
      let now = new Date();
      setSeconds(now.getSeconds() * 6);
    }, 1000);
  };

  return (
    <div
      id="second"
      className="tick second"
      style={{ transform: `rotate(${90 + seconds}deg)` }}
    >
      <div />
    </div>
  );
};

export { SecondTick };
