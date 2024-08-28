/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#183c44",
        primaryDark: "#0f2a33",
        navdropdown:"#16656a",
        secondary: "#ffe469",
        footer: "#dedede",
      },
      fontFamily: {
        logo: ['Bebas Neue', 'sans-serif'],
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
    },
  },
  plugins: [],
}