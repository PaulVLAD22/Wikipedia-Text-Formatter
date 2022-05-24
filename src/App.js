import {Button, ChakraProvider, ColorModeProvider, Flex, Text, Textarea, useColorMode, useColorModeValue } from '@chakra-ui/react'
import {BsFillCloudSunFill} from "react-icons/bs"
import { useState } from 'react';
import DarkMode from "./DarkMode"

function App() {
  const [text, setText] = useState("")
  const bg = useColorModeValue('white','gray.800')
  const fontColor = useColorModeValue("black","white")

  const handleInputChange = (e) => {
    let inputValue = e.target.value
    setText(inputValue)
  }
  const formatText = () => {
    console.log(text.replace("/ \[[0-9]+\]/g",""))
    setText(text.replace("\[[0-9]+\]",""))
  }
  return (
    
        <Flex className="App" w="100vw" h="100vh" justifyContent="center" alignItems="center" bg="gray.200">
          <Flex w="50%" flexDir="column" gap="40px" boxShadow={"dark-lg"} px="20" py="10" borderRadius={"3xl"} bg={bg} alignItems={"center"} textColor={fontColor}  >
            <Text fontFamily={""} textAlign={"center"} fontSize="5xl">Wikipedia Text Formatter</Text>
            <DarkMode/>
            <Textarea h="200px" placeholder='Paste your text here...' value={text}
        onChange={handleInputChange}></Textarea>
            <Flex justifyContent={"space-around"} w="100%">
              <Button onClick={formatText} colorScheme={"blue"}>Format</Button>
              <Button colorScheme={"green"}>Copy to Clipboard</Button>
            </Flex>
          </Flex>
        </Flex>
  );
}

export default App;
