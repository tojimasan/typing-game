import {
  IconButton,
  HStack,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { FiGithub } from "react-icons/fi";

export const ControlPanel = () => {
  const { toggleColorMode } = useColorMode();
  const bg = useColorModeValue("gray", "whiteAlphg");
  const icon = useColorModeValue(<MoonIcon />, <SunIcon />);

  return (
    <HStack pos="absolute" top="4" right={[4, 8]} gap={2}>
      <IconButton
        aria-label="Turn to light theme"
        icon={icon}
        variant="ghost"
        size="md"
        colorScheme={bg}
        // FIX: click後もinputにfocusされるようにする
        onClick={toggleColorMode}
      />
      <IconButton
        as="a"
        href="https://github.com/tojimasan/typing-game"
        target="_blank"
        aria-label="Open GitHub"
        icon={<FiGithub />}
        variant="ghost"
        size="md"
        colorScheme={bg}
      />
    </HStack>
  );
};
