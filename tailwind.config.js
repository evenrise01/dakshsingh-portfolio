/** @type {import('tailwindcss').Config} */
module.exports = {
    theme: {
      extend: {
        maxWidth: {
          container: "1280px",
        },
        animation: {
          marquee: 'marquee var(--duration) linear infinite',
        },
        keyframes: {
          marquee: {
            from: { transform: 'translateX(0)' },
            to: { transform: 'translateX(calc(-100% - var(--gap)))' }
          }
        }
      },
    },
    plugins: [
      function ({ matchUtilities, theme }) {
        matchUtilities(
          {
            'bg-grid': (value) => ({
              backgroundImage: `url("${svgToDataUri(
                `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
              )}")`
            })
          },
          { values: flattenColorPalette(theme('backgroundColor')), type: 'color' }
        )
      }
    ]
  }
  
  