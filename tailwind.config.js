/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      colors: {
        'phnoung-primary': '#8d51ff',
        'phnoung-dark': '#6f39d2',
        'phnoung-light': '#a87eff',
      },
      screens: {
        'lg-mid': { max: '1160px' },
        'lg-min': { min: '1161px' },
        xll: { min: '1439px' },
        xl: { min: '1440px' },
        'xl-max': { max: '1439px' },
        'xl-max1': { max: '1389px' },
        lg: { min: '1024px' },
        'lg-max': { max: '1023px' },
        'lg-max-1': { max: '1022px' },
        lgx: { min: '980px', max: '1024px' },
        'max-851': { max: '851px' },
        md: { min: '768px' },
        'md-max': { max: '767px' },
        'md-max1': { max: '700px' },
        mdx: { min: '621px', max: '767px' },
        'md-611': { max: '611px' },
        'mdx-max': { max: '620px' },
        'sm-495': { max: '495px' },
        'sm-560': { max: '560px' },
        sm: { min: '425px' },
        'sm-max': { max: '424px' },
        'smx-min': { min: '400px' },
        'smx-max': { max: '321px' },
        xs: { min: '320px' },
        'xs-max': { max: '319px' },
        xs1: { min: '260px', max: '319px' },
        'sm-375': { max: '375px' },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.hide-scrollbar': {
          /* IE and Edge */
          '-ms-overflow-style': 'none',
          /* Firefox */
          'scrollbar-width': 'none',
          /* Safari and Chrome */
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
        '.list-circle': {
          'list-style-type': 'circle',
        },
      }
      addUtilities(newUtilities)
    },
  ],
}
