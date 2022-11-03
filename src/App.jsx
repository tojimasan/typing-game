import { useEffect, useState } from "react";
import { VStack, Box, Center, Input } from "@chakra-ui/react";
import { ControlPanel } from "./components/ControlPanel";
import { Problem } from "./components/Problem";
import { GradePanel } from "./components/GradePanel";
import { RandomWord } from "./utils/randomWord";

export const App = () => {
  const [problem, setProblem] = useState("");
  const [index, setIndex] = useState(0);
  const [typeCount, setTypeCount] = useState(0);
  const [isWrong, setIsWrong] = useState(false);
  const [errorCount, setErrorCount] = useState(0);

  useEffect(() => {
    setProblem(RandomWord());
  }, []);

  const onHandleChange = (e) => {
    setTypeCount((prev) => prev + 1);
    const pressedKey = e.nativeEvent.data;

    // pressedKeyとproblem[index]が同じ文字であれば、次の文字へ進む
    // TODO: pressedKeyとproblem[index]が同じ文字 && problem.lastOfIndex === indexであれば、次の問題文を提示する
    if (pressedKey === problem[index]) {
      setIsWrong(false);
      if (problem.length <= index + 1) {
        setProblem(RandomWord());
        setIndex(0);
      } else {
        setIndex((prev) => prev + 1);
      }
    } else {
      setErrorCount((prev) => prev + 1);
      setIsWrong(true);
    }
  };

  return (
    <Box p={2} bg="#13141C">
      <ControlPanel />
      <Center h="100vh" style={{ overflow: "hidden" }}>
        <VStack gap={8}>
          <Problem problem={problem} isWrong={isWrong} index={index} />
          <GradePanel typeCount={typeCount} errorCount={errorCount} />
        </VStack>
      </Center>
      <Input
        opacity={0}
        autoFocus={true}
        pos={"absolute"}
        bottom={"10"}
        left={"0"}
        onChange={onHandleChange}
      />
    </Box>
  );
};
