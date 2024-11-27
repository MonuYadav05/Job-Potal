/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#141414",
        blue: "#3575e2",
      },
      width: {
        "45p": "48%",
      },
      boxShadow: {
        "custom-red": "red 0px 0px 250px, red 0px 0px 105px, red 0px 0px 101px",
      },
    },
  },
  plugins: [],
};
