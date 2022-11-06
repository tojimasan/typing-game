import { Box, useColorModeValue } from "@chakra-ui/react";

const stylingProblemParagraph = (string, i, isError = false) => {
  const normalColor = useColorModeValue("black", "white");
  const char = string[i];
  const str1 = string.slice(0, i);
  const str2 = string.slice(i + 1);
  const stylyedChar = (
    <span style={{ color: isError ? "tomato" : normalColor }}>{char}</span>
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
  const color = useColorModeValue("gray.400", "gray.500");
  return (
    <Box fontWeight="bold" fontSize="60px" color={color} letterSpacing={1}>
      {stylingProblemParagraph(problem, index, isWrong)}
    </Box>
  );
};
