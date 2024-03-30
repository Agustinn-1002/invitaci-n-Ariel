/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "main": "#efa558",
        'second': '#b36522',
        'tittle': '#374151',
        'paragraph': '#4b5563'
      },
      screens: {
        '1md': '1100px',
        '1xl': '1700px'
      },
      height: {
        '100': '30rem'
      }
    },
  },
  plugins: [],
};
