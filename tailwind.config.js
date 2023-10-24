const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "ns-variable": "ns-variable, sans-serif",
      },
    },
  },
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            danger: "#B30000",
          },
        },
        dark: {
          colors: {
            danger: "#FF8080",
          },
        },
      },
    }),
  ],
};
