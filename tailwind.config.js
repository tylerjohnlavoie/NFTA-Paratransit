module.exports = {
  purge: ['./public/**/*.html', './src/**/*.{astro,js,jsx,ts,tsx,vue}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
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