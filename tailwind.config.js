/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        blue: {
          "very-dark": "hsl(233, 47%, 7%)",
          desaturated: "hsl(244, 38%, 16%)",
        },
        violet: {
          soft: "hsl(277, 64%, 61%)",
        },
        light: {
          "main-paragraph": "hsla(0, 0%, 100%, 0.75)",
          "stats-heading": "hsla(0, 0%, 100%, 0.6)",
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        "lexend-deca": ["'Lexend Deca'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
