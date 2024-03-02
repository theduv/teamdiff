/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1D201F",
        secondary: "#DFD9E2",
      },
    },
  },
  plugins: [],
};
