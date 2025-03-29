import React, { useEffect, useState } from "react";
import Clock from "react-clock";
import "react-clock/dist/Clock.css";
import { getCurrentTimeForCity, City } from "../utils/timeZones";

interface ClockComponentProps {
  city: City;
}

const ClockComponent: React.FC<ClockComponentProps> = ({ city }) => {
  const [time, setTime] = useState<Date>(getCurrentTimeForCity(city));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getCurrentTimeForCity(city));
    }, 1000);

    return () => clearInterval(interval);
  }, [city]);

  const hours = time.getHours();
  const isDayTime = hours >= 6 && hours < 18; // Daytime: 06:00 - 17:59

  return (
    <div className="flex flex-col items-center">
      <div
        className={`p-4 rounded-full transition-all duration-300 shadow-md ${
          isDayTime ? "bg-white text-black" : "bg-gray-900 text-white"
        }`}
      >
        <Clock 
          value={time} 
          renderNumbers 
          className={`transition-all duration-300 ${isDayTime ? "text-black" : "text-white"}`}
        />
      </div>
      {/* <p className={`mt-2 font-semibold ${isDayTime ? "text-black" : "text-white"}`}>
        {city.name} - {hours.toString().padStart(2, "0")}:{time.getMinutes().toString().padStart(2, "0")}
      </p> */}
    </div>
  );
};

export default ClockComponent;
