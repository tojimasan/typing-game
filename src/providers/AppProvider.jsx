import { ProblemProvider } from "./ProblemProvider";
import { TimeProvider } from "./TimeProvider";

export const AppProvider = ({ children }) => {
  return (
    <ProblemProvider>
      <TimeProvider>{children}</TimeProvider>
    </ProblemProvider>
  );
};
