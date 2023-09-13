/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'primary': '#d87d4a',
      'accent': '#fbaf85',
      'white': '#ffffff',
      'black': '#000000',
      'gray': '#afafaf'
    },
    variants: {
      fill: ['hover']
    },
    extend: {
      backgroundImage: {
        'hero-desktop': "url('/assets/home/desktop/image-hero.jpg')",
        'hero-tablet': "url('/assets/home/tablet/image-header.jpg')",
        'hero-mobile': "url('/assets/home/mobile/image-header.jpg')"
      }
    },
  },
  plugins: [],
}
