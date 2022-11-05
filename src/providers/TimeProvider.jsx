import { createContext, useState } from "react";
import { useInterval } from "../hooks/useInterval";

const TimeContext = createContext(0);

const TimeProvider = ({ children }) => {
  const [time, setTime] = useState(0);
  useInterval(() => setTime((prev) => prev + 1));

  const providerValue = {
    time,
  };

  return (
    <TimeContext.Provider value={providerValue}>
      {children}
    </TimeContext.Provider>
  );
};

export { TimeContext, TimeProvider };
