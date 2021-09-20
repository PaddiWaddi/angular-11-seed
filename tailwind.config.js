const { Action } = require('rxjs/internal/scheduler/Action');
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
        'on-tint': 'var(--color-label-on-tint)'
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
        primary: {
          1: "var(--color-tint-primary-1)",
          2: "var(--color-tint-primary-2)",
          3: "var(--color-tint-primary-3)",
          4: "var(--color-tint-primary-4)",
          5: "var(--color-tint-primary-5)",
          label: "var(--color-tint-primary-label)",
        },
        danger: {
          1: "var(--color-tint-danger-1)",
          2: "var(--color-tint-danger-2)",
          3: "var(--color-tint-danger-3)",
          4: "var(--color-tint-danger-4)",
          5: "var(--color-tint-danger-5)",
          label: "var(--color-tint-danger-label)",
        },
        warning: {
          1: "var(--color-tint-warning-1)",
          2: "var(--color-tint-warning-2)",
          3: "var(--color-tint-warning-3)",
          4: "var(--color-tint-warning-4)",
          5: "var(--color-tint-warning-5)",
          label: "var(--color-tint-warning-label)",
        },
        success: {
          1: "var(--color-tint-success-1)",
          2: "var(--color-tint-success-2)",
          3: "var(--color-tint-success-3)",
          4: "var(--color-tint-success-4)",
          5: "var(--color-tint-success-5)",
          label: "var(--color-tint-success-label)",
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
      sm: '1rem',
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
