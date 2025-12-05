/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // fontFamily: {
      //   outfit: ['Outfit', 'sans-serif'],
      //   ovo: ['Ovo', 'serif'],
      // },
      colors: {
        iceBlue: "#B7E3FF",
        deepNavy: "#0A1A2F",
        asphaltGrey: "#4E4E4E",
      },
      boxShadow: {
        frost: "0 0 30px rgba(183,227,255,0.7)",
      },
    },
  },
  plugins: [],
}