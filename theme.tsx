// 1. import `extendTheme` function
import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools';
import { Poppins } from 'next/font/google';



// 2. Add your color mode config
const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

// dark theme styles
const styles = {
  global: (props: any) => ({ //is this correct?
    body: {
      color: mode('gray.800', 'whiteAlpha.900')(props),
      bg: mode('white', 'blackAlpha.900')(props),
      // bg: mode('turquoise', 'blackAlpha.800')(props),
    },
  }),
};


// import font-family 'Poppins'
const nextFont = Poppins({ weight: '400', subsets: ['latin'] });
const fonts = {
  body: nextFont.style.fontFamily,
  heading: nextFont.style.fontFamily,
}


// 3. extend the theme
const theme = extendTheme({ config, fonts, styles })

export default theme