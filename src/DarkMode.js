import {Button, useColorMode, useColorModeValue} from "@chakra-ui/react"
import {BsFillCloudSunFill} from "react-icons/bs"
import {React} from "react"
export const DarkMode = () =>{
    
  const darkModeButtonColor = useColorModeValue("gray.300","gray.600")
    const {toggleColorMode} = useColorMode()
    return <Button bg={darkModeButtonColor} onClick={()=>{toggleColorMode()}}>              
    <BsFillCloudSunFill></BsFillCloudSunFill></Button>
}
export default DarkMode;