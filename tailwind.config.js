const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
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
    },
  },
  variants: {
    extend: {
      textColor: ["hover"],
      opacity: ["after"],
      margin: ["last"],
    },
  },
  plugins: [
    plugin(function ({ addComponents, addVariant }) {
      addComponents({
        ".btn-primary": {
          //fontSize: "16px",
          lineHeight: "21px",
          fontFamily: "Poppins Semibold",
          padding: "18px 42px",
          backgroundColor: "#094367",
          color: "#fff",
          display: "inline-block",
          "&:hover": {
            backgroundColor: " #ff6d42",
          },
        },
      });
    }),
  ],
};
