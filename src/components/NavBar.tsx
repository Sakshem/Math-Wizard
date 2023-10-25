import React from 'react'
import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../assets/st,small,507x507-pad,600x600,f8f8f8.jpg'
import ColorModeSwitch from './ColorModeSwitch'
const NavBar = () => {
    return (
        <HStack display='flex' justifyContent='space-between' padding='10px;'>
            <Image src={logo} boxSize='70px'/>
            <Text>Math Wizard</Text>
            <ColorModeSwitch/>
        </HStack>
    )
}
export default NavBar
