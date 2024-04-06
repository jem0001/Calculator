/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#8E9BAC",
        tertiary: "#222A3D",
      },
    },
  },
  plugins: [],
};
