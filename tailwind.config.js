/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Poppins", "serif"],
        customHeader: ["Qwigley", "cursive"],
      },
      colors: {
        customGrey: "rgba(36, 36, 36, 1)",
        navGrey: "rgba(22, 23, 23, 1)",
        iconsGrey: "rgba(140, 140, 140, 1)",
        searchGrey: "rgba(84, 84, 84, 1)",
        genrediv1: "rgba(11, 244, 200, 1)",
        genrediv2: " rgba(250, 216, 93, 1)",
        genrediv3: "rgba(242, 160, 255, 1)",
      },
    },
  },
  plugins: [],
};
