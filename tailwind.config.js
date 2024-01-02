module.exports = {
  purge: ['./public/**/*.html', './src/**/*.{astro,js,jsx,ts,tsx,vue}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      padding: {
        DEFAULT: 'calc(1rem + 5vw)',
        md: 'calc(1.25rem + 10vw)',
      },
      center: true,
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
      fontSize: {
        '3xs-fluid': 'clamp(0.7813rem, 0.7747rem + 0.0326vw, 0.8rem)',
        '2xs-fluid': 'clamp(0.9375rem, 0.9158rem + 0.1087vw, 1rem)',
        'xs-fluid': 'clamp(1.125rem, 1.0815rem + 0.2174vw, 1.25rem)',
        's-fluid': 'clamp(1.35rem, 1.2761rem + 0.3696vw, 1.5625rem)',
        'm-fluid': 'clamp(1.62rem, 1.5041rem + 0.5793vw, 1.9531rem)',
        'l-fluid': 'clamp(1.9438rem, 1.7707rem + 0.8652vw, 2.4413rem)',
        'xl-fluid': 'clamp(2.3325rem, 2.0823rem + 1.2511vw, 3.0519rem)',
        '2xl-fluid': 'clamp(2.7994rem, 2.4461rem + 1.7663vw, 3.815rem)',
        '3xl-fluid': 'clamp(3.3594rem, 2.8694rem + 2.45vw, 4.7681rem)',
        '4xl-fluid': 'clamp(4.0313rem, 3.3602rem + 3.3554vw, 5.9606rem)',
        '5xl-fluid': 'clamp(4.8375rem, 3.9286rem + 4.5446vw, 7.4506rem)',
        '6xl-fluid': 'clamp(5.805rem, 4.5848rem + 6.1011vw, 9.3131rem)',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
        '256': '48rem'
      }
    },
  variants: {
    extend: {},
  },
  plugins: [],
}
}