import { VStack, HStack, Divider } from "@chakra-ui/react";
import { useTimeContext } from "../hooks/useTimeContext";

const grade = (score, heading) => {
  return (
    <VStack w={"100px"}>
      <p style={{ fontSize: "20px" }}>{score}</p>
      <Divider />
      <p style={{ color: "#999999" }}>{heading}</p>
    </VStack>
  );
};

export const GradePanel = ({ typeCount, errorCount }) => {
  const { time } = useTimeContext();
  const hour = Math.floor(time / 3600);
  const minutes = Math.floor(time / 60);
  const seconds = time % 60 < 10 ? `0${time % 60}` : time % 60;
  const timeString =
    hour > 0 ? `${hour}:${minutes}:${seconds}` : `${minutes}:${seconds}`;

  return (
    <HStack
      color="white"
      bg="gray.800"
      py={10}
      px={120}
      borderRadius="8px"
      gap={8}
    >
      {grade(timeString, "Time")}
      {grade(typeCount, "Type")}
      {grade(errorCount, "Miss")}
    </HStack>
  );
};
