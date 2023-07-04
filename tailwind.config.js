/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media',
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
        'primary-900': '#9E665A',
        'primary-500': '#CEA49D',
        'primary-100': '#F5E1E1',
        'background-100': '#DCCDCB',
        'background-transparent': '#CEA49D50',
        'background-100-transparent': '#DCCDCBA0',
      },
      height: {
        'header-height': 'var(header-height)',
      },
    },
  },
  plugins: [],
};
