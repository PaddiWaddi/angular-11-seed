const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin')


module.exports = {
  prefix: '',
  mode: 'jit',
  purge: [
    './src/**/*.{html,ts}'
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,

      gray: colors.blueGray,

      // brand colors
      brand: colors.yellow,
      // signal colors
      success: colors.green,
      danger: colors.red,
      warning: colors.amber,
      info: colors.teal,

      primary: {
        DEFAULT: 'var(--color-primary)',
        soft: 'var(--color-primarySoft)',
        bold: 'var(--color-primaryBold)',
        'bg': {
          DEFAULT: 'var(--color-primaryBg)',
          soft: 'var(--color-primaryBgSoft)',
          softer: 'var(--color-primaryBgSofter)',
        },
        ...colors.blue
      },
      neutral: {
        DEFAULT: 'var(--color-neutral)',
        soft: 'var(--color-neutralSoft)',
        bold: 'var(--color-neutralBold)',
        bg: {
          DEFAULT: 'var(--color-neutralBg)',
          soft: 'var(--color-neutralBgSoft)',
          softer: 'var(--color-neutralBgSofter)',
        }
      },
      on: {
        'primary': {
          DEFAULT: 'var(--color-onPrimary)',
        },
        'primary-bg': {
          DEFAULT: 'var(--color-onPrimaryBg)',
          soft: 'var(--color-onPrimaryBgSoft)',
          softer: 'var(--color-onPrimaryBgSofter)',
        },
        'neutral': {
          DEFAULT: 'var(--color-onNeutral)',
        },
        'neutral-bg': {
          DEFAULT: 'var(--color-onNeutralBg)',
          soft: 'var(--color-onNeutralBgSoft)',
          softer: 'var(--color-onNeutralBgSofter)',
        }
      },
      focus: {
        DEFAULT: 'var(--color-focus)',
        soft: 'var(--color-focus-soft)',
      }

    },
    spacing: {
      unset: 'unset',
      '0': '0',
      gutter: '1.5rem',

      xxs: '0.25rem',
      xs: '0.5rem',
      s: '0.75rem',
      m: '1.75rem',
      l: '2rem',
      xl: '3rem',
      xxl: '6rem',
    },

    extend: {
      animation: {
        'shake-error': 'shake-error 0.3s 0.3s linear',
      },
      keyframes: {
        'shake-error': {
          '8%, 41%': { transform: 'translateX(-0.75rem)' },
          '25%, 58%': { transform: 'translateX(0.75rem)' },
          '75%': { transform: 'translateX(-0.5rem)' },
          '92%': { transform: 'translateX(0.5rem)' },
          '0%, 100%': { transform: 'translateX(0)' }
        }
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
  ]
};
