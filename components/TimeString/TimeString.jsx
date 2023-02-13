import React, { useEffect, useState } from "react";

export default function TimeString() {
  // actual time
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const timeString = time.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  });
  return (
    <p className="font-semibold text-white text-border-green">{timeString}</p>
  );
}
