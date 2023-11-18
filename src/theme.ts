import { extendTheme, ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
    initialColorMode: 'dark'
};
const theme = extendTheme({
    config,
    colors: {
        gray: {
            50: '#f9f9f9',
            100: '#ededed',
            200: '#d3d3d3',
            300: '#b3b3b3',
            400: '#a0a0a0',
            500: '#898989',
            600: '#6c6c6c',
            700: '#202020',
            800: '#121212',
            900: '#111'
        }
    },
    breakpoints: {
        sm: "30em", // Small screens (e.g., mobile)
        md: "48em", // Medium screens (e.g., tablets)
        lg: "62em", // Large screens (e.g., laptops)
        xl: "80em", // Extra large screens (e.g., desktops)
    },
});
export default theme;