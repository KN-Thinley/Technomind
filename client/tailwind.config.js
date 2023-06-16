/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    fontFamily: {
      sans: ["Helvetica", "sans-serif"],
      serif: ["Georgia", "serif"],
    },
    extend: {
      colors: {
        primary: "rgb(17, 121, 171)",
        secondary: "rgb(17, 151, 205)",
        complimentary: "rgb(4, 92, 130)",
      },
    },
  },
  plugins: [],
};
