import { Box } from "@chakra-ui/react";

export const Problem = ({ problem }) => {
  return (
    <Box fontWeight="bold" fontSize="60px" color="gray.500" letterSpacing={1}>
      <span style={{ color: "white" }}>h</span>
      {problem}
    </Box>
  );
};
