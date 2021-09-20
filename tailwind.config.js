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

      // brand colors
      brand: colors.yellow,
      // signal colors
      success: colors.green,
      danger: colors.red,
      warning: colors.amber,
      info: colors.teal,

      background: {
        primary: 'var(--color-background-primary)',
        secondary: 'var(--color-background-secondary)',
        tertiary: 'var(--color-background-tertiary)'
      },
      label: {
        primary: 'var(--color-label-primary)',
        secondary: 'var(--color-label-secondary)',
        tertiary: 'var(--color-label-tertiary)',
        quaternary: 'var(--color-label-quaternary)',

        danger: 'var(--color-label-danger)'
      },
      fill: {
        "1": 'var(--color-fill-1)',
        "2": 'var(--color-fill-2)',
        "3": 'var(--color-fill-3)',
        "4": 'var(--color-fill-4)',
        "5": 'var(--color-fill-5)',
        "6": 'var(--color-fill-6)'
      },
      tint: {
        blue: {
          1: "var(--color-tint-blue-1)",
          2: "var(--color-tint-blue-2)",
          3: "var(--color-tint-blue-3)",
          4: "var(--color-tint-blue-4)",
          5: "var(--color-tint-blue-5)"
        },
        danger: {
          1: "var(--color-tint-danger-1)",
          2: "var(--color-tint-danger-2)",
          3: "var(--color-tint-danger-3)",
          4: "var(--color-tint-danger-4)",
          5: "var(--color-tint-danger-5)"
        },
        warning: {
          soft: "var(--color-tint-warning-soft)",
          DEFAULT: "var(--color-tint-warning)",
          strong: "var(--color-tint-warning-strong)"
        }
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
