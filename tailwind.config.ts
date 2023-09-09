import { type Config } from "tailwindcss";

import colors from "tailwindcss/colors";


export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        JetBrains: ['JetBrains Mono', 'monospace'],
      },
    },
    colors: {
      'dark': '#2E3141',
      'primary': '#E1885E',
      'primary_dark': '#D66A37', 
      'secondary': '#4F5D75',
      'gray': '#BFC0C0', 
      'white': '#FFFFFF', 
      'black': '#1E1E1E',
      'sky': colors.sky,
    },
  },
  plugins: [],
} satisfies Config;
