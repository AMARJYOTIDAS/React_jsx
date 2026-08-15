import React from "react";
import { useState, useRef } from "react";

const SetTimer = () => {
  const [count, setCount] = useState(0);
  const intervalRef = useRef(null);

  const startTimer = () => {
    // Prevent multiple intervals
    if (intervalRef.current !== null) return;

    intervalRef.current = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  return (
    <div>
      <h2>SetTimer : {count}</h2>

      <button onClick={startTimer}>Start Timer</button>
      <button onClick={stopTimer}>Stop Timer</button>
    </div>
  );
};

export default SetTimer;