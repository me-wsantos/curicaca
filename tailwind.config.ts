import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'sm': '360px',
      // => @media (min-width: 312px) { ... }

      '1sm': '360px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      
      '3xl': '1792px',
      // => @media (min-width: 1792px) { ... }
    },
    extend: {
      backgroundPosition: {
        'top-3-less': 'center top -3rem',
        'top-5-less': 'center top -5rem',
        'top-8-less': 'center top -8rem',
        'top-10-less': 'center top -10rem',
        'top-20-less': 'center top -20rem',
        'top-70-less': 'center top -70rem',
        'top-5': 'center top 5rem',
        'top-50': 'center top 40rem',
        'top-0': 'center top 0',
        'left-5': 'center left -25rem',
        'left-10': 'center left -35rem',
        'left-20': 'center left -40rem',
        'left-30': 'center left -60rem'
      },
      backgroundSize: {
        '18': '18rem',
        '20': '20rem',
        '25': '25rem',
        '35': '35rem',
        '45': '45rem',
      },
      colors: {
        'custom-blue': '#183EFF',
        'curicaca-black': '#161616',
        'curicaca-gray-10': '#EFEFEF',
        'curicaca-gray-20': '#D9D9D9',
        'curicaca-gray-30': '#ADADAD',
        'curicaca-red': '#E8370F',
        'curicaca-red-2': '#DB4009',
        'curicaca-orange': '#F45338',
        'curicaca-yellow': '#FFD833',
        'curicaca-blue-1': '#2563EB',
        'curicaca-blue-2': '#2A29FF',
        'curicaca-blue-3': '#0665EF',
        'curicaca-green-1': '#BCDB07',
        'curicaca-green-30': '#23B530',
        'curicaca-green-50': '#00770E',
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
        marquee2: 'marquee2 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
