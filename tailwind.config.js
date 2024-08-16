const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
 content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
 theme: {
  container: {
   padding: "2rem",
  },
  extend: {
   colors: {
    primary: "#E5B808",
    background: "#212121",
    "silver-light": "#BDC3C7",
    "gray-light": "#FFFCFE",
    "yellow-light": "#FFFFC5",
    "dark-blue": "#410AC2",
    "dark-orange": "#ff9d2f",
    "blue-light": "#3b82f6",
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
