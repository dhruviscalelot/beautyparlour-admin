
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '450px',
        // => @media (min-width: 450px) { ... }
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
        'md': '768px',
        // => @media (min-width: 768px) { ... }
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      colors: {
        primary: '#b76e79',
        'primary-dark': '#8f4250',
        'primary-light': '#f8e7ea',
        accent: '#d9a441',
        l4: '#fff7f8',
        l3: '#fff1f4',
        l2: '#ead6d9',
        g1: '#2f2527',
        g2: '#4f4447',
        g3: '#6d5f63',
        g7: '#75676b',
        red: '#FE5969',
      },
      fontSize: {
        '84': ['84px', '96px'],
        '70': ['70px', '80px'],
        '64': ['64px', '54px'],

        '66': ['66px', '76px'],
        '56': ['56px', '66px'],
        '54': ['54px', '64px'],

        '50': ['50px', '61px'],
        '48': ['48px', '58px'],

        '46': ['46px', '61px'],
        '40': ['40px', '52px'],
        '36': ['36px', '46px'],
        '32': ['32px', '40px'],
        '30': ['30px', '40px'],

        '28': ['28px', '36px'],
        '26': ['26px', '36px'],
        '24': ['24px', '32px'],
        '22': ['22px', '30px'],
        '20': ['20px', '28px'],
        '18': ['18px', '26px'],
        '16': ['16px', '24px'],
        '14': ['14px', '22px'],
        '12': ['12px', '18px'],
      },
      fontFamily: {
        'Prata': ['Prata', 'serif'],
        'Lexend': ['Lexend', 'sans-serif']
      },
    },
  },
  plugins: [],
}
