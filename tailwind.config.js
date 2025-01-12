/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      lightGreen: "#14B890",
      lightRed: "#f44336",
    },
    container: {
      center: true,
      padding: "1rem",
    },
    screens: {
      lg: "1348px",
      xl: "1348px",
    },
    extend: {},
  },
  plugins: [],
};
