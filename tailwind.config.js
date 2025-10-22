/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        // Optional font pairings for future use
        'heading-alt': ['Raleway', 'sans-serif'],
        'body-alt': ['Lato', 'sans-serif'],
        'heading-serif': ['Playfair Display', 'serif'],
        'body-serif': ['Open Sans', 'sans-serif'],
        'heading-mono': ['Vercetti', 'monospace'],
        'body-mono': ['Inter', 'sans-serif'],
      },
      fontSize: {
        'h1': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.025em' }],
        'h2': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.025em' }],
        'h3': ['1.875rem', { lineHeight: '1.3', letterSpacing: '-0.025em' }],
        'h4': ['1.5rem', { lineHeight: '1.4', letterSpacing: '-0.025em' }],
        'h5': ['1.25rem', { lineHeight: '1.4', letterSpacing: '-0.025em' }],
        'h6': ['1.125rem', { lineHeight: '1.4', letterSpacing: '-0.025em' }],
        'body': ['1rem', { lineHeight: '1.6', letterSpacing: '0' }],
        'small': ['0.875rem', { lineHeight: '1.5', letterSpacing: '0' }],
      },
    },
  },
  plugins: [],
}
