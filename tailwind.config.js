module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: {
          100: "#f5f5f5",
          200: "#eeeeee",
          700: "#676767",
          800: "#494949",
          900: "#0b111f",
          "800_01": "#404040",
          "100_01": "#f5f6f5",
        },
        blue_gray: { 100: "#d9d9d9" },
        white: { A700_a2: "#ffffffa2", A700_01: "#fffffc", A700: "#ffffff" },
        black: { 900: "#000000", "900_2d": "#0000002d", "900_01": "#101010" },
        teal: { 700: "#008b48", 900: "#005b30", "900_01": "#005b2f" },
        blue: { 200: "#89cff0" },
      },
      fontFamily: { poppins: "Poppins", saira: "Saira", inter: "Inter" },
      boxShadow: {
        bs2: "0px 0px  9px 0px #0000002d",
        bs: "0px 0px  10px 0px #0000002d",
        bs1: "0px 0px  20px 0px #0000002d",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
