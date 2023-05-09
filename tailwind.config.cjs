/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/about/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
    fontFamily:{
      abc: ["Quicksand", "medium"]
    }
  },
  plugins: [],
}

