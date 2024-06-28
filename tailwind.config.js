/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    container: {
      center: true,
      padding: '16',
    },
    extend: {
      colors: {
        primary: '#f97316',
        second: '#d78a54',
        third: '#fdf7e7',
        fourth: '#fffaed',
        fiveth: '#070709',
        sixth: '#efefef',
        seventh: '#bdbfba',
        eight: '#fdfdfd',
        colortrs: '#ffffffce',
      },
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%"
          }
        },
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "gray"
          }
        }, shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-5px)' },
          '20%, 40%, 60%, 80%': { transform: 'translateX(5px)' },
        },
      },
      animation: {
        typing: "typing 3s steps(20) alternate, blink .7s infinite",
        shake: "shake 10s ease-in-out infinite",
      }
    }, fontFamily: {
      sans: [
        '"Inter var", sans-serif',
        {
          fontFeatureSettings: '"cv11", "ss01"',
          fontVariationSettings: '"opsz" 32'
        },
      ],
    },
    borderRadius: {
      RoundedSF: "20px",
      RoundedSF2: "40px",
    },
  },
  plugins: [('flowbite/plugin')],
}

