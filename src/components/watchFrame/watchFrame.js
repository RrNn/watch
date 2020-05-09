import React, { useState, useEffect } from 'react';
import { SecondTick } from './secondTick';
import { MinuteTick } from './minuteTick';
import { HourTick } from './hourTick';
import './__styles__/watchFrame.css';

// const MinuteTick = () => <div id="minute" className="tick minute"><div/></div>
// const HourTick = () => <div id="hour" className="tick hour"><div/></div>
const ClockCenter = () => (
  <div id="center" className="center">
    <div />
  </div>
);
// const SecondTick =() => <div id="second" className="tick second"><div /></div>

export const WatchFrame = () => {
  return (
    <div className="watch-wrapper">
      <ClockCenter />
      <SecondTick />
      <MinuteTick />
      <HourTick />

      <div className="watch-number n-1">1</div>
      <div className="watch-number n-2">2</div>
      <div className="watch-number n-3">3</div>
      <div className="watch-number n-4">4</div>
      <div className="watch-number n-5">5</div>
      <div className="watch-number n-6">6</div>
      <div className="watch-number n-7">7</div>
      <div className="watch-number n-8">8</div>
      <div className="watch-number n-9">9</div>
      <div className="watch-number n-10">10</div>
      <div className="watch-number n-11">11</div>
      <div className="watch-number n-12">12</div>
    </div>
  );
};
