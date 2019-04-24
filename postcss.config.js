var tailwindcss = require('tailwindcss')

module.exports = {
  plugins: [
    tailwindcss('./tailwind.config.js'),
    require('postcss-simple-vars'),
    require('autoprefixer'),
    require('postcss-nested')
  ]
}
