import { IconButton, HStack } from "@chakra-ui/react";
import { SunIcon } from "@chakra-ui/icons";
import { FiGithub } from "react-icons/fi";

export const ControlPanel = () => {
  return (
    <HStack pos="absolute" top="4" right={[4, 8]} gap={2}>
      <IconButton
        aria-label="Turn to light theme"
        icon={<SunIcon />}
        variant="ghost"
        size="md"
        colorScheme={"whiteAlpha"}
      />
      <IconButton
        as="a"
        href="https://github.com/tojimasan/typing-game"
        target="_blank"
        aria-label="Open GitHub"
        icon={<FiGithub />}
        variant="ghost"
        size="md"
        colorScheme={"whiteAlpha"}
      />
    </HStack>
  );
};
