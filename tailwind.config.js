/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,css}",
  ],
  theme: {
    extend: {
      colors: {
        armyGreen: '#4B5320',
        oliveDrab: '#6B8E23',
        camoTan: '#C2B280',
        jetBlack: '#0A0A0A',
        joeBlue: '#0B4C8C',
        joeRed: '#C8102E',
      },
      fontFamily: {
        stencil: ['"Special Elite"', 'monospace'],
      },
    },
  },
  plugins: [],
};
