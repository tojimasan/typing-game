import { useEffect } from "react";

export const useInterval = (onUpdate) => {
  useEffect(() => {
    const timerId = setInterval(() => onUpdate(), 1000);
    return () => clearInterval(timerId);
  });
};
