/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        customGrey: "rgba(36, 36, 36, 1)",
        navGrey: "rgba(22, 23, 23, 1)",
        iconsGrey: "rgba(140, 140, 140, 1)",
        searchGrey: "rgba(84, 84, 84, 1)",
      },
    },
  },
  plugins: [],
};
