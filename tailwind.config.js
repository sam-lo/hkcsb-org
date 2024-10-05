/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Noto Sans HK"],
      serif: ["Noto Serif HK"],
      cinzel: ["Cinzel"],
      calligraffitti: ["Calligraffitti"],

    },
    extend: {
      colors: {
        accentred: "#b32425",
        accentwhite: "#fffde1",
      }
    },
  },
  plugins: [],
}

