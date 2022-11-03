import { VStack, HStack, Divider } from "@chakra-ui/react";

const grade = (score, heading) => {
  return (
    <VStack w={"100px"}>
      <p style={{ fontSize: "20px" }}>{score}</p>
      <Divider />
      <p style={{ color: "#999999" }}>{heading}</p>
    </VStack>
  );
};

export const GradePanel = () => {
  return (
    <HStack
      color="white"
      bg="gray.800"
      py={10}
      px={120}
      borderRadius="8px"
      gap={8}
    >
      {grade("00:00", "Time")}
      {grade("0", "Type")}
      {grade("0", "Miss")}
    </HStack>
  );
};
