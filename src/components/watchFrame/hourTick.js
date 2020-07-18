import React, { useEffect, useReducer } from 'react';

const HourTick = () => {
  const hourReducer = (state, action) => {
    switch (action.type) {
      case 'TICK_ELAPSED':
        return { minutes: state.minutes + action.minutes };
      default:
        throw new Error(
          'Error...The action type is undefined, not sure what to do!'
        );
    }
  };

  const [state, dispatch] = useReducer(hourReducer, { minutes: 0 });

  useEffect(() => {
    const startAt = new Date();
    /* when this mounts, get the initial degree in which to rotate,
     ie the already elapsed hours and minutes */
    const tiltAngle = startAt.getHours() * 30 + (startAt.getMinutes() * 6)/30;
    dispatch({ type: 'TICK_ELAPSED', minutes: tiltAngle });
    start();
  }, []);

  /* after getting the elapsed hours & minutes and doing the inital rotaion,
    start to rotate the hour hand according to the elapsed seconds */
  const start = () => {
    setInterval(() => {
      dispatch({ type: 'TICK_ELAPSED', minutes: 6 / 60 });
    }, 1000);
  };

  return (
    <div
      id="hour"
      className="tick hour"
      style={{ transform: `rotate(${90 + state.minutes}deg)` }}
    >
      <div />
    </div>
  );
};

export { HourTick };
