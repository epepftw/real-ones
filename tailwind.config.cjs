/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,ts,md,mdx}'],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        white: '#FFFFFF',
        rec: '#FF0000',
      },
      fontFamily: {
        display: ['Anton', 'sans-serif'],
        mono: ['"VT323"', 'monospace'],
      },
      borderRadius: {
        none: '0px',
        DEFAULT: '0px',
        sm: '0px',
        md: '0px',
        lg: '0px',
        xl: '0px',
        '2xl': '0px',
        '3xl': '0px',
        full: '0px',
      },
      lineHeight: {
        crush: '0.85',
        tight: '0.95',
      },
    },
  },
  plugins: [],
};
