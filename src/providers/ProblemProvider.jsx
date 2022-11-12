import { createContext, useEffect, useState, useCallback } from "react";
import { RandomWord } from "../utils/randomWord";

const ProblemContext = createContext("");

const ProblemProvider = ({ children }) => {
  const [problem, setProblem] = useState("");
  const setNewProblem = useCallback(() => setProblem(RandomWord()), []);

  const providerValue = {
    problem,
    setNewProblem,
  };

  useEffect(() => {
    setNewProblem();
  }, []);

  return (
    <ProblemContext.Provider value={providerValue}>
      {children}
    </ProblemContext.Provider>
  );
};

export { ProblemContext, ProblemProvider };
