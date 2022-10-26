/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,svg}"],
  theme: {
    extend: {},
  },
  plugins: [require("tailwindcss-neumorphism")],
};
