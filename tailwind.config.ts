import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-pattern': "url('/images/rain.jpg')",
      },
      colors: {
        purple: {
          DEFAULT: '#780490',
          100: '#18011d',
          200: '#30013a',
          300: '#480257',
          400: '#610373',
          500: '#780490',
          600: '#b406d7',
          700: '#d72bfa',
          800: '#e472fb',
          900: '#f2b8fd',
        },
        sky_magenta: {
          DEFAULT: '#c7629a',
          100: '#2b101f',
          200: '#571f3e',
          300: '#822f5d',
          400: '#ae3f7c',
          500: '#c7629a',
          600: '#d281ad',
          700: '#dda1c2',
          800: '#e8c0d6',
          900: '#f4e0eb',
        },
        indigo: {
          DEFAULT: '#460180',
          100: '#0e0019',
          200: '#1c0132',
          300: '#2a014c',
          400: '#380165',
          500: '#460180',
          600: '#7002ca',
          700: '#971cfd',
          800: '#ba68fd',
          900: '#dcb3fe',
        },
        russian_violet: {
          DEFAULT: '#10033c',
          100: '#03010c',
          200: '#060117',
          300: '#0a0223',
          400: '#0d022f',
          500: '#10033c',
          600: '#27088f',
          700: '#3f0ce5',
          800: '#7a54f6',
          900: '#bdaafb',
        },
        citrine: {
          DEFAULT: '#e8d520',
          100: '#302c05',
          200: '#60570a',
          300: '#90830f',
          400: '#c0af14',
          500: '#e8d520',
          600: '#ecdd4e',
          700: '#f1e57a',
          800: '#f6eea6',
          900: '#faf6d3',
        },
      },
      animation: {
        floating: 'floating 3s ease-in-out infinite',
        emerge: 'emerge 2s ease-out 1',
        scroll: 'scroll 23s linear infinite',
      },
      keyframes: {
        floating: {
          '0%': { transform: 'translate(0, 0px)' },
          '50%': { transform: 'translate(0, 10px)' },
          '100%': { transform: 'translate(0, -0px)' },
        },
        emerge: {
          '0%': { opacity: '0', scale: '0.5' },

          '100%': { opacity: '1', scale: '1' },
        },
        scroll: {
          '0%': {
            transform: 'translateX(100%)',
          },
          '100%': {
            transform: 'translateX(-100%)',
          },
        },
      },
      boxShadow: {
        custom: `-4px -3px 15px rgba(255, 255, 255, 0.5),
        4px 4px 15px rgba(70, 70, 70, 0.12),
        inset -2px -2px 15px rgba(255, 255, 255, 0.5),
        inset 6px 6px 15px rgba(70, 70, 70, 0.12)`,
      },
    },
  },
  plugins: [],
}
export default config
