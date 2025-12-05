import { useState, useEffect } from "react";

function CountDown() {
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [countdown]);

  return (
    <div className="countdown">
      <h1>{countdown}</h1>
    </div>
  );
}

export default CountDown;
