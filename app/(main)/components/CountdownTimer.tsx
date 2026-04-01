
import { useEffect, useState } from "react";

export const CountdownTimer = ({
  days,
  hours,
  mins,
  secs,
}) => {
  const [time, setTime] = useState({ days, hours, mins, secs });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => {
        let newSecs = prev.secs - 1;
        let newMins = prev.mins;
        let newHours = prev.hours;
        let newDays = prev.days;

        if (newSecs < 0) {
          newSecs = 59;
          newMins--;
        }
        if (newMins < 0) {
          newMins = 59;
          newHours--;
        }
        if (newHours < 0) {
          newHours = 23;
          newDays--;
        }
        if (newDays < 0) {
          return { days: 0, hours: 0, mins: 0, secs: 0 };
        }

        return { days: newDays, hours: newHours, mins: newMins, secs: newSecs };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex gap-1 text-xs font-semibold">
      <div className="bg-[#ef553f] text-white px-2 py-1 rounded">
        {String(time.days).padStart(2, "0")}
        <span className="block text-[8px] font-normal">DAYS</span>
      </div>
      <div className="bg-[#ef553f] text-white px-2 py-1 rounded">
        {String(time.hours).padStart(2, "0")}
        <span className="block text-[8px] font-normal">HRS</span>
      </div>
      <div className="bg-[#ef553f] text-white px-2 py-1 rounded">
        {String(time.mins).padStart(2, "0")}
        <span className="block text-[8px] font-normal">MIN</span>
      </div>
      <div className="bg-[#ef553f] text-white px-2 py-1 rounded">
        {String(time.secs).padStart(2, "0")}
        <span className="block text-[8px] font-normal">SEC</span>
      </div>
    </div>
  );
};