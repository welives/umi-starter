const colors = require('tailwindcss/colors')
delete colors.lightBlue
delete colors.warmGray
delete colors.trueGray
delete colors.coolGray
delete colors.blueGray
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{jsx,tsx,vue}',
    './src/components/**/*.{jsx,tsx,vue}',
    './src/layouts/**/*.{jsx,tsx,vue}',
  ],
  theme: {
    extend: { colors },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
}
