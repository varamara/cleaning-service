/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Futura', 'sans-serif'],
    },
    extend: {
      colors: {
        white: "#ffffff",
        black: "#000000",
        gray: "#f5f5f5",
        primaryBeige: "#fdf7eb",
        primaryBlue: "#112e59",
        secondaryBlue: "#d0e3ff",
        primaryOrange: "#fe793e",
        secondaryOrange: "#fb4c1f",
        pink: "#fbc6d0",
      },
      fontSize: {
        h1: '48px',
        h2: '34px',

      }
    },
  },
  plugins: [require("flowbite/plugin")],
};


