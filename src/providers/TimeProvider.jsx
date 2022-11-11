import { createContext, useState } from "react";
import { useEffect } from "react";

const TimeContext = createContext(0);

const TimeProvider = ({ children }) => {
  const [time, setTime] = useState(0);
  const [didStart, setDidStart] = useState(false);
  const startTimer = () => {
    setDidStart(true);
  };
  const tick = () => {
    setTime((t) => t + 1);
  };

  useEffect(() => {
    if (didStart) {
      const timerId = setInterval(tick, 1000);

      return () => clearInterval(timerId);
    }
  }, [time, didStart]);

  const providerValue = {
    time,
    startTimer,
  };

  return (
    <TimeContext.Provider value={providerValue}>
      {children}
    </TimeContext.Provider>
  );
};

export { TimeContext, TimeProvider };
