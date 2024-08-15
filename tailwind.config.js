const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
 darkMode: "class",
 content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
 theme: {
  container: {
   padding: "2rem",
  },
  extend: {
   colors: {
    background: {
     DEFAULT: "#FFFFFF",
     dark: "#313131",
    },
    navbar: {
     DEFAULT: "#FBFBFB",
     dark: "#444",
    },
    primary: "#E5B808",
    secondary: "#0a52a6",
    slate: {
     DEFAULT: "#BDC3C7",
     light: "#777",
    },
    "gray-light": "#FFFCFE",
    "orange-light": "#FFFFC5",
   },
   lineHeight: {
    13: "3.5rem",
   },
   fontFamily: {
    sans: ["Manrope", ...defaultTheme.fontFamily.sans],
   },
   textShadow: {
    DEFAULT: "0 2px 4px var(--tw-shadow-color)",
    sm: "0 1px 2px var(--tw-shadow-color)",
    lg: "0 8px 16px var(--tw-shadow-color)",
   },
  },
 },
 plugins: [],
};
