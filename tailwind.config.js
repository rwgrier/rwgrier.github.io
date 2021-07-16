const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: {
    enabled: true,
    content: ['./**/*.html', './**/*..scss', './**/*..css', './**/*..js', './**/*..md'],
  },
  darkMode: 'media',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"PT Sans"', ...defaultTheme.fontFamily.sans],
        serif: ['"PT Serif"', ...defaultTheme.fontFamily.serif],
        mono: ['"PT mono"', ...defaultTheme.fontFamily.mono],
      },
      fontSize: {
        'lg': '1.25rem',
        '4xl': '2.50rem',
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
  ],
}