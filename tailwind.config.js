// const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  important: true,
  theme: {
    extend: {
      colors: {
        blue: "#094367",
        lightBlack: "#212121",
        lightOrange: "#F0E3D8",
        orange: "#ff6d42",
        green: "#348c41",
        lightGreen: "#a3d8b0",
      },
      screens: {
        "3xl": "1600px",
      },
      keyframes: {
        popup: {
          "0%": { transform: "scale(0.9)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        popup: "popup 300ms ease-out",
      },
    },
  },
  variants: {
    extend: {
      textColor: ["hover"],
      opacity: ["after"],
    },
  },
  plugins: [],
};
