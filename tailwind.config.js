export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['Outfit', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        obsidian: {
          950: '#07080c',
          900: '#0b0d14',
          850: '#10121b',
          800: '#151824',
          700: '#1e2233',
        },
        brand: {
          violet: '#6366f1',
          purple: '#a855f7',
          cyan: '#06b6d4',
          emerald: '#10b981',
          amber: '#f59e0b',
        }
      }
    },
  },
  plugins: [],
}
