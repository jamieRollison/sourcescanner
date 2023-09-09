import { type Config } from "tailwindcss";

import colors from "tailwindcss/colors";

export default {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{ts,tsx}",
    "./public/**/*.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ["var(--font-roboto-mono)"],
      },
    },
    colors: {
      dark: "#2E3141",
      primary: "#E1885E",
      primary_dark: "#D66A37",
      secondary: "#4F5D75",
      secondary_dark: "#29303D",
      gray: "#BFC0C0",
      white: "#FFFFFF",
      black: "#1E1E1E",
      sky: colors.sky,
      transparent: colors.transparent,
    },
  },
  plugins: [require("flowbite/plugin")],
} satisfies Config;
