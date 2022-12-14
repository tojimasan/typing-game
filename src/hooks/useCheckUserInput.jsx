import { useState, useCallback } from "react";
import { useProblemContext } from "./useProblemContext";
import { useTimeContext } from "./useTimeContext";

export const useCheckUserInput = () => {
  const { problem, setNewProblem } = useProblemContext();
  const [index, setIndex] = useState(0);
  const [typeCount, setTypeCount] = useState(0);
  const [isWrong, setIsWrong] = useState(false);
  const [errorCount, setErrorCount] = useState(0);
  const { startTimer } = useTimeContext();

  const onHandleChange = useCallback(
    (e) => {
      startTimer();
      setTypeCount((prev) => prev + 1);
      const pressedKey = e.nativeEvent.data;

      // pressedKeyとproblem[index]が同じ文字であれば、次の文字へ進む
      // TODO: pressedKeyとproblem[index]が同じ文字 && problem.lastOfIndex === indexであれば、次の問題文を提示する
      if (pressedKey === problem[index]) {
        setIsWrong(false);
        if (problem.length <= index + 1) {
          setNewProblem();
          setIndex(0);
        } else {
          setIndex((prev) => prev + 1);
        }
      } else {
        setErrorCount((prev) => prev + 1);
        setIsWrong(true);
      }
    },
    [
      startTimer,
      setTypeCount,
      problem,
      index,
      setNewProblem,
      setIndex,
      setErrorCount,
      setIsWrong,
    ]
  );

  return { problem, index, typeCount, isWrong, errorCount, onHandleChange };
};
