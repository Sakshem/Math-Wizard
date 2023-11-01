import { CSSReset, ChakraProvider, HStack, Image, Text, extendTheme } from '@chakra-ui/react'
import logo from '../assets/st,small,507x507-pad,600x600,f8f8f8.jpg'
import ColorModeSwitch from './ColorModeSwitch'
import { ReactNode } from 'react';
import theme from '../theme';
// const theme = extendTheme({
//   breakpoints: {
//     sm: "30em", // Small screens (e.g., mobile)
//     md: "48em", // Medium screens (e.g., tablets)
//     lg: "62em", // Large screens (e.g., laptops)
//     xl: "80em", // Extra large screens (e.g., desktops)
//   },
// });
function CustomText({ children }: { children: ReactNode }) {
  return (
    <Text
      fontSize={{ base: "24px", sm: "32px", md: "48px", lg: "64px" }}
      fontWeight="bold"
      bgGradient="linear(to-r, #FF0077, #FF3E75, #FFA845, #FF7733, #FF3E75)"
      bgClip="text"
      color="transparent"
      display="inline"
    >
      {children}
    </Text>
  );
}
const NavBar = () => {
    return (
        <HStack display='flex' justifyContent='space-between' padding='10px;'>
            <a href="/"> <Image src={logo} boxSize='70px'/></a>
            <ChakraProvider theme={theme}>
                <CSSReset/>
                <a href="/">
                <CustomText>
                    Math Wizard
                </CustomText>
                </a>
            </ChakraProvider>
            {/* <Text 
              fontSize="48px" // Adjust the font size as needed
              fontWeight="bold" // Adjust the font weight as needed
              bgGradient="linear(to-r, #FF0077, #FF3E75, #FFA845, #FF7733, #FF3E75)" // Replace these colors with your desired gradient colors
              bgClip="text"
              color="transparent"
              display="inline">
                Math Wizard
            </Text> */}
            <ColorModeSwitch/>
        </HStack>
    )
}
export default NavBar
