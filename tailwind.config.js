module.exports = {
  purge: ['./public/**/*.html', './src/**/*.{astro,js,jsx,ts,tsx,vue}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      padding: {
        DEFAULT: '2rem',
        sm: '3rem',
        md: '4rem',
        lg: '4rem',
        xl: '5rem',
      },
    },
    extend: {
      colors: {
        'NFTA-navy': '#002169',
        'NFTA-silver': '#888C8D',
        'NFTA-teal': '#2FBCCE'
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}