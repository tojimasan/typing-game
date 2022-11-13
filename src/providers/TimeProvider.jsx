import { createContext, useState, useEffect, useCallback } from "react";

const TimeContext = createContext(0);

const TimeProvider = ({ children }) => {
  const [time, setTime] = useState(0);
  const [didStart, setDidStart] = useState(false);
  const startTimer = useCallback(() => setDidStart(true), []);

  const tick = useCallback(() => {
    setTime((t) => t + 1);
  }, []);

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
