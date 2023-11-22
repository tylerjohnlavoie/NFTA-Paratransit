module.exports = {
  purge: ['./public/**/*.html', './src/**/*.{astro,js,jsx,ts,tsx,vue}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      padding: {
        DEFAULT: '2rem',
        sm: '3rem',
        md: '4rem',
        lg: '5rem',
        xl: '6rem',
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
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
        '256': '48rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}