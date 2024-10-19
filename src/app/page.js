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

  const roundUp = (count) => {
    if (count <= 9) return `0${count}`;
    return count;
  };

  return (
    <h1>
      <div className="time">
        <div>{roundUp(minute)}</div>:<div>{roundUp(second)}</div>
      </div>
      <button onClick={() => setCount((prev) => prev + 15)}>add 15 sec</button>
    </h1>
  );
};

export default Page;
