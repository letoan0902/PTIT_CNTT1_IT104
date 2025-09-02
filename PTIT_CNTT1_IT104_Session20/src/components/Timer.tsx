import React, { useState, useEffect } from "react";
import "./Timer.css";

const Timer: React.FC = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="timer-container">
      <h1>Bộ đếm thời gian</h1>
      <p>Số giây đã trôi qua: {count}</p>
    </div>
  );
};

export default Timer;