import {
  VStack,
  Box,
  Center,
  useColorModeValue,
  useColorMode,
} from "@chakra-ui/react";
import { ControlPanel } from "./components/ControlPanel";
import { Problem } from "./components/Problem";
import { GradePanel } from "./components/GradePanel";
import { useProblemContext } from "./hooks/useProblemContext";
import { useCheckUserInput } from "./hooks/useCheckUserInput";
import { Input } from "./components/Input";
import { useEffect, useRef } from "react";

export const App = () => {
  const { index, typeCount, isWrong, errorCount, onHandleChange } =
    useCheckUserInput();
  const { problem } = useProblemContext();
  const bg = useColorModeValue("#efefef", "#13141C");
  const { colorMode } = useColorMode();
  const ref = useRef("");
  const handleTap = () => {
    ref.current.focus();
  };

  useEffect(() => {
    ref.current.focus();
  }, [colorMode]);

  return (
    <Box p={2} bg={bg}>
      <ControlPanel />
      <Center h="100vh" style={{ overflow: "hidden" }}>
        <VStack gap={8}>
          <Problem
            problem={problem}
            isWrong={isWrong}
            index={index}
            onClick={handleTap}
          />
          <GradePanel typeCount={typeCount} errorCount={errorCount} />
        </VStack>
      </Center>
      <Input ref={ref} onChange={onHandleChange} />
    </Box>
  );
};
