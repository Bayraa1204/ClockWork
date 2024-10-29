"use client";

import { useEffect, useState } from "react";

const Page = () => {
  const [count, setCount] = useState(60);
  const addCount = () => {
    setCount((prev) => (prev > 0 ? prev - 1 : 0));
  };
  useEffect(() => {
    const interval = setInterval(addCount, 1000);
    return () => clearInterval(interval);
  }, []);

  const second = count % 60;

  const minute = Math.floor(count / 60);

  const hour = Math.floor(minute / 60);

  const roundUp = (count) => {
    if (count <= 9) return `0${count}`;
    return count;
  };
  const minuteRoundUp = (count) => {
    const roundedMinute = count - hour * 60;
    if (count >= 60) {
      if (roundedMinute <= 9) return `0${roundedMinute}`;
      return roundedMinute;
    } else {
      if (count <= 9) return `0${count}`;
      return count;
    }
  };
  return (
    <div className="body">
      <div className="time-container">
        <div className="box-header">
          Hour
          <div className="time">{roundUp(hour)}</div>
        </div>
        <div className="box-header">
          Minute
          <div className="time">{minuteRoundUp(minute)}</div>
        </div>
        <div className="box-header">
          Second
          <div className="time">{roundUp(second)}</div>
        </div>
      </div>
      <div className="buttons">
        <button className="btn" onClick={() => setCount((prev) => prev + 60)}>
          Add 60 sec
        </button>
        <button className="btn" onClick={() => setCount((prev) => prev - 60)}>
          Minus 60 sec
        </button>
      </div>
    </div>
  );
};

export default Page;
