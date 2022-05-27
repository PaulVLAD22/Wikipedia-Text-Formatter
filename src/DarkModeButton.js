import { Button, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { BsFillCloudSunFill } from "react-icons/bs";
import { React } from "react";
export const DarkModeButton = () => {
  const darkModeButtonButtonColor = useColorModeValue("gray.300", "gray.600");
  const { toggleColorMode } = useColorMode();
  return (
    <Button
      bg={darkModeButtonButtonColor}
      onClick={() => {
        toggleColorMode();
      }}
    >
      <BsFillCloudSunFill></BsFillCloudSunFill>
    </Button>
  );
};
export default DarkModeButton;
