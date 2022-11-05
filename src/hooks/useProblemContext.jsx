import { useContext } from "react";
import { ProblemContext } from "../providers/ProblemProvider";

export const useProblemContext = () => {
  const problem = useContext(ProblemContext);
  return problem;
};
