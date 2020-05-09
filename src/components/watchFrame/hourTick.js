import React, { useEffect, useReducer } from 'react';

const HourTick = () => {
  const hourReducer = (state, action) => {
    switch (action.type) {
      case 'TICK_ELAPSED':
        return { minutes: state.minutes + action.minutes };
      default:
        throw new Error('Error...The action type is undefined, not sure what to do!');
    }
  };

  const [state, dispatch] = useReducer(hourReducer, { minutes: 0 });

  useEffect(() => {
    const startAt = new Date();
    /* when this mounts, get the initial degree in which to rotate,
     ie the already elapsed minutes in the hour startAt.getMinutes() * 0.1 */

    // dispatch({ type: 'TICK_ELAPSED', minutes: startAt.getHours() });
    console.log('hours____', startAt.getHours());
    start();
  }, []);

  /* after getting the elapsed minutes and rotating,
    start to rotate the minute hand according to the elapsed seconds */
  const start = () => {
    console.log('hour_lorem');
    setInterval(() => {
      // dispatch({ type: 'TICK_ELAPSED', minutes: 6 / 60 });
    }, 1000);
  };

  return (
    <div id="hour" className="tick hour" style={{ transform: `rotate(${90 + state.minutes}deg)` }}>
      <div />
    </div>
  );
};

export { HourTick };
