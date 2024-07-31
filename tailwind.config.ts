import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens:{
        'mdnav': {'max': '768px'}
      },
      fontFamily:{
        mainFont: ['Poppins', 'sans-serif'],
        navFont: ['DM Sans', 'sans-serif'],
        decFont: ['Dancing Script', 'cursive'],
        writeFont: ['Sevillana', 'cursive'],
        headFont: ['Anton', 'sans-serif']
      },
      fontWeight:{
        300: '300',
        400: '400',
        600: '600'
      },
      colors:{
        navColor: '#FEC7B4',
        bodyColor1: '#F7418F',
        bodyColor2: '#FC819E',
        mobileNav1: '#FFDFD6',
        mobileNav2: '#E3A5C7',
        btn: '#FFF3C7'
      }
    },
  },
  plugins: [],
};
export default config;
