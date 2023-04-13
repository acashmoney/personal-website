const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'stone-200': '#B7C0C7',
      },
      transitionProperty: {
        'fill': 'fill',
      },
      transitionDuration: {
        '500': '500ms',
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      // Add this block
      fill: (theme) => ({
        'labdao': theme('backgroundColor.labdao'),
        'stone-200': theme('backgroundColor.stone-200'),
      }),
    },
  },
  variants: {
    extend: {
      backgroundColor: ['responsive', 'hover', 'focus', 'group-hover'],
      fill: ['responsive', 'hover', 'focus', 'group-hover'],
    }
  },
  plugins: [],
}
