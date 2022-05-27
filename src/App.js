import {
  Button,
  Flex,
  Text,
  Textarea,
  useColorModeValue,
  VStack,
  Center,
} from "@chakra-ui/react";
import { useState } from "react";
import DarkModeButton from "./DarkModeButton";
import { formatText, removeTextInParanthesis } from "./utils";

function App() {
  const [text, setText] = useState("");
  const [error, setError] = useState("");
  const stackBackground = useColorModeValue("white", "gray.800");
  const fontColor = useColorModeValue("black", "white");
  const mainBackground = useColorModeValue("gray.200", "gray.700");

  const handleInputChange = (e) => {
    let inputValue = e.target.value;
    setText(inputValue);
  };

  return (
    <Center
      className="App"
      w="100vw"
      h="100vh"
      bg={mainBackground}
      overflow="hidden"
    >
      <VStack
        w="50%"
        gap="20px"
        boxShadow={"dark-lg"}
        px="20"
        py="10"
        borderRadius={"3xl"}
        bg={stackBackground}
        textColor={fontColor}
      >
        <Text fontFamily={""} textAlign={"center"} fontSize="5xl">
          Wikipedia Text Formatter
        </Text>
        <DarkModeButton />
        <Text fontSize="xl" color={"red"}>
          {error}
        </Text>
        <Textarea
          h="200px"
          placeholder="Paste your text here..."
          value={text}
          onChange={handleInputChange}
        ></Textarea>
        <Flex justifyContent={"space-around"} w="100%">
          <Button
            onClick={() => {
              setText(formatText(text, setError));
            }}
            colorScheme={"blue"}
          >
            Format
          </Button>
          <Button
            colorScheme="purple"
            onClick={() => {
              setText(removeTextInParanthesis(text, setError));
            }}
          >
            Remove Text in Paranthesis
          </Button>
          <Button
            colorScheme={"green"}
            onClick={() => {
              navigator.clipboard.writeText(text);
            }}
          >
            Copy to Clipboard
          </Button>
        </Flex>
      </VStack>
    </Center>
  );
}

export default App;
