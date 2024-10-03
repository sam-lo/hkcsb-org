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
      serif: ["Klee One"],
      maru: ["Kiwi Maru"],
      cinzel: ["Cinzel"],
      calligraffitti: ["Calligraffitti"],

    },
    extend: {
    },
  },
  plugins: [],
}

