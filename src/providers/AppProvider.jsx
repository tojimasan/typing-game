import { ProblemProvider } from "./ProblemProvider";

export const AppProvider = ({ children }) => {
  return <ProblemProvider>{children}</ProblemProvider>;
};
