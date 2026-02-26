/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'earth-green': '#2F855A',
        'ocean-blue': '#1E3A8A',
        'soft-beige': '#F7F5F2',
        'deep-blue': '#1E3A8A',
        'sage-green': '#4ADE80',
        'bronze': '#B8860B',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
