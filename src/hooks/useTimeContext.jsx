import { useContext } from "react";
import { TimeContext } from "../providers/TimeProvider";

export const useTimeContext = () => {
  const time = useContext(TimeContext);
  return time;
};
