import { VStack, Box, Center } from "@chakra-ui/react";
import { ControlPanel } from "./components/ControlPanel";
import { Problem } from "./components/Problem";
import { GradePanel } from "./components/GradePanel";

export const App = () => {
  return (
    <Box p={2} bg="#13141C">
      <ControlPanel />
      <Center h="100vh" style={{ overflow: "hidden" }}>
        <VStack gap={8}>
          <Problem problem={"hoge"} />
          <GradePanel />
        </VStack>
      </Center>
    </Box>
  );
};
