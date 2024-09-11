/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      gridTemplateColumns: {
        'custom': '70% 1fr',
      },

      backgroundImage: {
        'custom-bg': "url('/src/assets/background.png')",
        'customGradient': 'linear-gradient(to right, #00985B, #000000)',
        'search-bg': "url('/src/assets/searchbg.png')",
        'livingroom': 'url(src/assets/features.png)',
        'livingroom2': 'url(src/assets/livingroom2.png)',
        'kitchen': 'url(src/assets/kitchen.png)',
        'bedroom': 'url(src/assets/bedroom.png)',
        'aboutbg': 'url(src/assets/about.png)',
      },
    },
  },
  plugins: [],
}