const colors = require("tailwindcss/colors");

module.exports = {
  purge: {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    options: {
      safelist: ["gift1", "gift2", "gift3"],
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        gift1: "url('/src/assets/gift1.svg')",
        gift2: "url('/src/assets/gift2.svg')",
        gift3: "url('/src/assets/gift3.svg')",
        gift31: "url('/src/assets/gift31.svg')",
        gift32: "url('/src/assets/gift32.svg')",
        scientistBg: "url('/src/assets/scitile 2.png')",
      },
      colors: {
        orange: colors.orange,
        green: {
          "050": "#6dc5a0",
          "dark-green": "#337062",
          teal: "#2CAE92",
          header: "#6AC59F",
          "light-green": "#E2F3EC",
          imgBg: "#9ED5AA",
          xmas: "#2B891C",
        },
        purple: {
          overlay: "#240871",
          imgText: "#8C65F7",
        },
        blue: {
          "ice-blue": "#54d8cf",
          teal: "#2CAE92",
          "dark-blue": "#1139C7",
        },
        brown: {
          "dark-brown": "#262626",
        },
        gray: {
          "050": "#FFFFFF",
          1000: "#343a39",
          noun: "#C4C4C4",
        },
        red: {
          bloodred: "#ea1e5047",
          soldout: "#EB1E50",
          xmas: "#FF0202",
        },
      },
    },
    fontFamily: {
      spacemono: ["Space Mono"],
      librefranklin: ["Libre Franklin"],
      comicneue: ["Comic-Neue"],
    },
    minHeight: {
      0: "0",
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      full: "100%",
      intro: "890px",
      "intro-mobile": "450px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
