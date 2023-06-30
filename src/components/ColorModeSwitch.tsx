import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      {colorMode === "dark" ? (
        <Text whiteSpace="nowrap">Dark</Text>
      ) : (
        <Text>Light</Text>
      )}
    </HStack>
  );
};

export default ColorModeSwitch;
