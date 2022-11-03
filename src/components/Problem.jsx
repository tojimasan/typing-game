import { Box } from "@chakra-ui/react";

const stylingProblemParagraph = (string, i, isError = false) => {
  const char = string[i];
  const str1 = string.slice(0, i);
  const str2 = string.slice(i + 1);
  const stylyedChar = (
    <span style={{ color: isError ? "tomato" : "white" }}>{char}</span>
  );

  return (
    <p>
      {str1}
      {stylyedChar}
      {str2}
    </p>
  );
};

export const Problem = ({ problem, index, isWrong }) => {
  return (
    <Box fontWeight="bold" fontSize="60px" color="gray.500" letterSpacing={1}>
      {stylingProblemParagraph(problem, index, isWrong)}
    </Box>
  );
};
