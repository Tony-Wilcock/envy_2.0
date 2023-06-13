/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-image': "url('/public/splash-image.png')",
      },
      colors: {
        'light-gold': 'var(--clr-accent-gold-light)',
        'medium-gold': 'var(--clr-accent-gold)',
        'dark-gold': 'var(--clr-accent-gold-dark)',
        'light-transparent': 'var(--clr-accent-gold-light-transparent)',
        'bg-gold': 'var(--clr-accent-gold-background)',
      },
      height: {
        'header-height': '100px',
      },
    },
  },
  plugins: [],
};
