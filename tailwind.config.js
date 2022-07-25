/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeInRight: {
          "0%": {
            transform: "translate(100%)",
            opacity: 0,
            position: "absoulte",
          },
          "100%": {
            transform: "translate(0px)",
            opacity: 1,
            position: "relative",
          },
        },
        fadeInLeft: {
          "0%": {
            transform: "translate(-100%)",
            opacity: 0,
            position: "absoulte",
          },
          "100%": {
            transform: "translate(0px)",
            opacity: 1,
            position: "relative",
          },
        },
        fadeInBottom: {
          "0%": {
            transform: "translateY(50px)",
            opacity: 0,
          },
          "100%": {
            transform: "translateY(0)",
            opacity: 1,
          },
        },
        overlayIn: {
          "0%": {
            backgroundColor: "rgba(0, 0, 0, 0)",
          },
          "100%": {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
        },
        fadeInTop1: {
          "0%": {
            opacity: 0,
            transform: "translateY(-100%)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(0)",
          },
        },
        fadeInTop: {
          "0%": {
            opacity: 0,
            transform: "translateY(-100%)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(0)",
          },
        },
      },
      animation: {
        fadeInRight: "fadeInRight 0.7s ease-out forwards",
        fadeInLeft: "fadeInLeft 0.7s ease-out forwards",
        fadeInBottom1: "fadeInBottom 0.7s ease-out both 0.1s",
        fadeInBottom2: "fadeInBottom 0.7s ease-out both 0.15s",
        fadeInBottom3: "fadeInBottom 0.7s ease-out both 0.2s",
        fadeInBottom4: "fadeInBottom 0.7s ease-out both 0.3s",
        overlayIn: "overlayIn 0.5s ease-in both",
        fadeInTop1: "fadeInTop 0.15s ease-in both 0.7s",
        fadeInTop2: "fadeInTop 0.15s ease-in both 0.75s",
        fadeInTop3: "fadeInTop 0.15s ease-in both 0.8s",
        fadeInTop4: "fadeInTop 0.15s ease-in both 0.85s",
        fadeInTop5: "fadeInTop 0.15s ease-in both 0.9s",
        fadInTopBasic1: "fadeInTop 0.15s ease-in both 0.15s",
        fadInTopBasic2: "fadeInTop 0.15s ease-in both 0.3s",
        fadInTopBasic3: "fadeInTop 0.15s ease-in both 0.45s",
      },
      colors: {
        blacka: "rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
};
