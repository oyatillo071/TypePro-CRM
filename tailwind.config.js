/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightGreen: "#14B890",
        lightRed: "#f44336",
        blackText: "#2c3030",
      },
    },
    container: {
      center: true,
      padding: "1rem",
    },
    screens: {
      lg: "1348px",
      xl: "1348px",
    },
  },
  plugins: [],
};
