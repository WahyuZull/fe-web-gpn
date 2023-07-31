/* eslint-disable import/no-extraneous-dependencies */
module.exports = {
  content: [
    './src/**/*.{html,js}',
    './node_modules/flowbite/**/*.js',
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    fontFamily: {
      script: ['Tangerine', 'cursive'],
      body: ['Ubuntu', 'sans-serif'],
    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: '#15804B',
        secondary: '#B3903E',
        lightPrimary: '#22c55e',
        instagram: '#E4405F',
        facebook: '#1877F2',
      },
      screens: {
        '2xl': '1320px',
      },
      gridTemplateRows: {
        '[auto,auto,1fr]': 'auto auto 1fr',
      },
    },
  },
  plugins: [
    // eslint-disable-next-line global-require
    require('@tailwindcss/aspect-ratio'),
    // eslint-disable-next-line global-require
    require('flowbite/plugin'),
    // eslint-disable-next-line global-require
    require('prettier-plugin-tailwindcss'),
    // eslint-disable-next-line global-require
    require('tw-elements/dist/plugin.cjs'),
  ],
};
