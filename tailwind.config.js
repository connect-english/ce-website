/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "ce-blue": "#013E7F",
        "ce-pink": "#FF107D",
        "ce-white": "#ffffff",
        "ce-gray": "#919191",
        "ce-light-gray": "#E9E9E9"
      },
    },
  },
  plugins: [require("daisyui")],
};
