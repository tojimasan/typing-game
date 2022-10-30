import { useState } from "react";
import { Center, Input, VStack } from "@chakra-ui/react";
import { randomWord } from "./utils/ramdomWord";

export const App = () => {
  // TODO: ゲームスタート時の処理を追加する
  // 仕様: 文字が入力されるとゲームが始まること
  const [problem, setProblem] = useState("Type any button to start.");
  const [index, setIndex] = useState(0);
  const [isWrong, setIsWrong] = useState(false);
  const currectCharCss = {
    color: "white"
  };
  const errorCharCss = {
    color: "tomato"
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
      </VStack>
    </Center>
  );
};
