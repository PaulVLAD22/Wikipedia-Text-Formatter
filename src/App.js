import {Button, ChakraProvider, ColorModeProvider, Flex, Text, Textarea, useColorMode } from '@chakra-ui/react'
import {BsFillCloudSunFill} from "react-icons/bs"
import { useState } from 'react';

function App() {
  const [text, setText] = useState("")
  const { colorMode, toggleColorMode } = useColorMode();
  const formatText = () => {
  console.log(toggleColorMode)
  }
  return (
    <ChakraProvider>
        <Flex className="App" w="100vw" h="100vh" justifyContent="center" alignItems="center" bg="gray.200">
          <Flex w="50%" flexDir="column" gap="40px" boxShadow={"dark-lg"} px="20" py="10" borderRadius={"3xl"} bg="white" alignItems={"center"}>
            <Text fontFamily={""} textAlign={"center"} fontSize="5xl">Wikipedia Text Formatter</Text>
            <Button onClick={toggleColorMode}>
              <BsFillCloudSunFill></BsFillCloudSunFill>
            </Button>
            <Textarea h="200px" placeholder='Paste your text here...'></Textarea>
            <Flex justifyContent={"space-around"} w="100%">
              <Button onClick={formatText} colorScheme={"blue"}>Format</Button>
              <Button colorScheme={"green"}>Copy to Clipboard</Button>
            </Flex>
          </Flex>
        </Flex>
    
    </ChakraProvider>
  );
}

export default App;
