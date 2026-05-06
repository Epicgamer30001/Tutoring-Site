/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#f0f4ff",
          100: "#e0e9ff",
          200: "#c7d6fe",
          300: "#a5b8fc",
          400: "#8193f8",
          500: "#6671f1",
          600: "#5251e4",
          700: "#4540ca",
          800: "#3a35a4",
          900: "#343083",
          950: "#1e1c50",
        },
        deepnavy: "#0f1b3d",
        gold: {
          400: "#f6c94e",
          500: "#e8b429",
          600: "#c99a1a",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
