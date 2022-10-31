import { useState } from "react";
import { Center, Input, VStack, IconButton, Box } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { FiGithub } from "react-icons/fi";
import { randomWord } from "./utils/randomWord";

export const App = () => {
  // TODO: ゲームスタート時の処理を追加する
  // 仕様: 文字が入力されるとゲームが始まること
  const [problem, setProblem] = useState("Type any key to start.");
  const [index, setIndex] = useState(0);
  const [isWrong, setIsWrong] = useState(false);
  const [errorCount, setErrorCount] = useState(0);
  const theme = "dark";

  const currectCharCss = {
    color: "white",
  };
  const errorCharCss = {
    color: "tomato",
  };
  const supportTextCss = {
    color: "#DB36B7",
    fontSize: "20px",
  };
  const thimeIconButton = () => {
    const variant = "ghost";
    const size = "md";

    return theme === "dark" ? (
      <IconButton
        aria-label="Turn to light theme"
        icon={<SunIcon />}
        variant={variant}
        size={size}
      />
    ) : (
      <IconButton
        aria-label="Turn to dark theme"
        icon={<MoonIcon />}
        variant={variant}
        size={size}
      />
    );
  };

  const handleChange = (e) => {
    const pressedKey = e.nativeEvent.data;

    // pressedKeyとproblem[index]が同じ文字であれば、次の文字へ進む
    // TODO: pressedKeyとproblem[index]が同じ文字 && problem.lastOfIndex === indexであれば、次の問題文を提示する
    if (pressedKey === problem[index]) {
      setIsWrong(false);
      if (problem.length <= index + 1) {
        setProblem(randomWord());
        setIndex(0);
      } else {
        setIndex((prev) => prev + 1);
      }
    } else {
      setErrorCount((prev) => prev + 1);
      setIsWrong(true);
    }
  };
  const stylingProblemParagraph = (string, i, isError = false) => {
    const char = string[i];
    const str1 = string.slice(0, index);
    const str2 = string.slice(index + 1);
    const stylyedChar = (
      <span style={isError ? errorCharCss : currectCharCss}>{char}</span>
    );

    return (
      <p>
        {str1}
        {stylyedChar}
        {str2}
      </p>
    );
  };

  return (
    <Center
      bg="gray.900"
      h="100vh"
      color="gray.500"
      fontSize="32px"
      fontWeight="bold"
    >
      <VStack>
        {stylingProblemParagraph(problem, index, isWrong)}
        <Input opacity="0" autoFocus={true} onChange={(e) => handleChange(e)} />
        <p style={supportTextCss}>Miss: {errorCount}</p>
      </VStack>
      <Box pos="absolute" top="4" right={[4, 8]}>
        {thimeIconButton()}
        <IconButton
          as="a"
          href="https://github.com/tojimasan/typing-game"
          target="_blank"
          aria-label="Open GitHub"
          icon={<FiGithub />}
          variant="ghost"
          size="md"
          ml={4}
        />
      </Box>
    </Center>
  );
};
