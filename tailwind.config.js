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
        "main": "#fca5a5",
        'second': '#94a3b8',
        'tittle': '#374151',
        'paragraph': '#4b5563'
      },
      screens: {
        '1xl': '1440px'
      },
      height:{
        '100': '30rem'
      }
    },
  },
  plugins: [],
};
