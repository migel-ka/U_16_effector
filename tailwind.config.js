/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      md: '820px', 
      xl: '821px',
    },
    container: {
      center: true,
    },
  },
  plugins: [],
}