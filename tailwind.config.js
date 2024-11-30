/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: {
          900: '#111827',
          950: '#0b0f17',
        },
      },
      backgroundImage: {
        'dark-gradient': 'linear-gradient(to bottom, #111827, #0b0f17)',
      },
    },
  },
  plugins: [],
};
