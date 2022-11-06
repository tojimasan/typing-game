import {
  VStack,
  Box,
  Center,
  Input,
  useColorModeValue,
} from "@chakra-ui/react";
import { ControlPanel } from "./components/ControlPanel";
import { Problem } from "./components/Problem";
import { GradePanel } from "./components/GradePanel";
import { useProblemContext } from "./hooks/useProblemContext";
import { useCheckUserInput } from "./hooks/useCheckUserInput";

export const App = () => {
  const { index, typeCount, isWrong, errorCount, onHandleChange } =
    useCheckUserInput();
  const { problem } = useProblemContext();
  const bg = useColorModeValue("#efefef", "#13141C");

  return (
    <Box p={2} bg={bg}>
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
