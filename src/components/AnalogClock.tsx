
import React, { useEffect, useState } from 'react';
import { getCurrentTimeForCity, City } from '../utils/timeZones';

interface AnalogClockProps {
  city: City;
  isDark?: boolean;
}

const AnalogClock: React.FC<AnalogClockProps> = ({ city, isDark = false }) => {
  const [time, setTime] = useState<Date>(getCurrentTimeForCity(city));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getCurrentTimeForCity(city));
    }, 1000);

    return () => clearInterval(interval);
  }, [city]);

  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours() % 12;

  // Calculate the rotation angles
  const secondHandRotation = seconds * 6; // 6 degrees per second
  const minuteHandRotation = minutes * 6 + seconds * 0.1; // 6 degrees per minute plus small adjustment for seconds
  const hourHandRotation = hours * 30 + minutes * 0.5; // 30 degrees per hour plus small adjustment for minutes

  const hourMarks = Array.from({ length: 12 }).map((_, i) => (
    <div 
      key={`hour-${i}`} 
      className="hour-mark" 
      style={{ transform: `rotate(${i * 30}deg) translateY(${isDark ? '8px' : '8px'})` }}
    />
  ));

  const minuteMarks = Array.from({ length: 60 }).map((_, i) => {
    // Skip positions where we already have hour marks
    if (i % 5 === 0) return null;
    
    return (
      <div 
        key={`minute-${i}`} 
        className="minute-mark" 
        style={{ transform: `rotate(${i * 6}deg) translateY(${isDark ? '8px' : '8px'})` }}
      />
    );
  });

  return (
    <div className={`analog-clock ${isDark ? 'dark-clock' : ''} w-full h-full`}>
      <div className="clock-face">
        {hourMarks}
        {minuteMarks}
      </div>
      <div className="center-dot"></div>
      <div 
        className="hand hour-hand" 
        style={{ transform: `rotate(${hourHandRotation}deg)` }}
      ></div>
      <div 
        className="hand minute-hand" 
        style={{ transform: `rotate(${minuteHandRotation}deg)` }}
      ></div>
      <div 
        className="hand second-hand" 
        style={{ transform: `rotate(${secondHandRotation}deg)` }}
      ></div>
    </div>
  );
};

export default AnalogClock;
