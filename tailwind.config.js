/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2C365E",
        secondary: "#507DBC",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
