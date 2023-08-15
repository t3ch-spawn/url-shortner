/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cyan: "hsl(180, 66%, 49%)",
        font1: " hsl(257, 7%, 63%)",
        darkBlue: "hsl(257, 27%, 26%)",
        heading: " hsl(255, 11%, 22%)",
        grey: "hsl(0, 0%, 75%)",
      },

      fontFamily: {
        poppins: ["Poppins"],
      },
      screens: {
        "850": { max: "850px" },
      },
    },
  },
  plugins: [],
};
