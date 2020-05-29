import React, { useState, useEffect } from 'react';
import { SecondTick } from './secondTick';
import { MinuteTick } from './minuteTick';
import { HourTick } from './hourTick';
import './__styles__/watchFrame.css';

const ClockCenter = () => (
  <div id="center" className="center">
    <div />
  </div>
);

export const WatchFrame = () => (
  <div className="watch-wrapper">
    <ClockCenter />
    <SecondTick />
    <MinuteTick />
    <HourTick />
    {Array.from(new Array(12), (_, i) => (
      <div key={i} className={`watch-number n-${i + 1}`}>
        {i + 1}
      </div>
    ))}
  </div>
);
