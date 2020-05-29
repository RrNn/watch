import React, { useEffect, useReducer } from 'react';

const MinuteTick = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case 'SECOND_ELAPSED':
        return { seconds: state.seconds + action.seconds };
      default:
        throw new Error(
          'Error...The action type is undefined, not sure what to do!'
        );
    }
  };

  const [state, dispatch] = useReducer(reducer, { seconds: 0 });

  useEffect(() => {
    const startAt = new Date();
    /* when this mounts, get the initial degree in which to rotate,
     ie the already elapsed minutes in the hour */
    dispatch({ type: 'SECOND_ELAPSED', seconds: startAt.getMinutes() * 6 });
    start();
  }, []);

  /* after getting the elapsed minutes and rotating,
    start to rotate the minute hand according to the elapsed seconds */
  const start = () => {
    setInterval(() => {
      dispatch({ type: 'SECOND_ELAPSED', seconds: 6 / 60 });
    }, 1000);
  };

  return (
    <div
      id="minute"
      className="tick minute"
      style={{ transform: `rotate(${90 + state.seconds}deg)` }}
    >
      <div />
    </div>
  );
};

export { MinuteTick };
