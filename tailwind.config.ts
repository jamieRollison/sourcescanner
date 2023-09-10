import { type Config } from "tailwindcss";

import colors from "tailwindcss/colors";

export default {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./public/**/*.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ["var(--font-roboto-mono)"],
      },
      animation: {
        typewriter: "typewriter 2s steps(60) forwards",
      },
      keyframes: {
        typewriter: {
          to: {
            left: "100%",
          },
        },
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
      green: colors.green,
      sky: colors.sky,
      amber: colors.amber,
      transparent: colors.transparent,
    },
  },
  plugins: [],
} satisfies Config;
