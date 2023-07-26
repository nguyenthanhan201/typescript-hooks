const plugin = require('./plugin/index.cjs');
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{html,js,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        modal:
          '0px 17px 48px rgba(0, 35, 149, 0.04), 0px 5.125px 14.4706px rgba(0, 35, 149, 0.02), 0px 2.12866px 6.01034px rgba(0, 35, 149, 0.02), 0px 0.769896px 2.17382px rgba(0, 35, 149, 0.01)',
        dropdown: '0px 4px 15px rgba(0, 35, 149, 0.04)',
      },
      colors: {
        primary: 'var(--color-primary)',
        text: {
          100: 'var(--color-text-100)',
          200: 'var(--color-text-200)',
          300: 'var(--color-text-300)',
          400: 'var(--color-text-400)',
          500: 'var(--color-text-500)',
          600: 'var(--color-text-600)',
          700: 'var(--color-text-700)',
          primary: 'var(--color-text-primary)',
          focus: 'var(--color-text-focus)',
          information: 'var(--color-text-information)',
          success: 'var(--color-text-success)',
          warning: 'var(--color-text-warning)',
          error: 'var(--color-text-error)',
          disable: 'var(--color-text-disable)',
        },
        icon: {
          white: 'var(--color-icon-white)',
          default: 'var(--color-icon-default)',
          hover: 'var(--color-icon-hover)',
          black: 'var(--color-icon-black)',
          focus: 'var(--color-icon-focus)',
          information: 'var(--color-icon-information)',
          success: 'var(--color-icon-success)',
          warning: 'var(--color-icon-warning)',
          error: 'var(--color-icon-error)',
          disable: 'var(--color-icon-disable)',
          primary: 'var(--color-icon-primary)',
        },
        surface: {
          white: 'var(--color-surface-white)',
          black: 'var(--color-surface-black)',
          primary: 'var(--color-surface-primary)',
          grey: 'var(--color-surface-grey)',
          darkGrey: 'var(--color-surface-dark-grey)',
          primary10: 'var(--color-surface-primary10)',
          primary4: 'var(--color-surface-primary4)',
          information: 'var(--color-surface-information)',
          success: 'var(--color-surface-success)',
          warning: 'var(--color-surface-warning)',
          error: 'var(--color-surface-error)',
          disable: 'var(--color-surface-disable)',
          default: 'var(--color-surface-default)',
        },
        background: {
          white: 'var(--color-background-white)',
          grey: 'var(--color-background-grey)',
          scrim: 'var(--color-background-scrim)',
          lightGrey: 'var(--color-background-light-grey)',
        },
        button: {
          primary: 'var(--color-button-primary)',
          information: 'var(--color-button-information)',
          success: 'var(--color-button-success)',
          warning: 'var(--color-button-warning)',
          error: 'var(--color-button-error)',
          disable: 'var(--color-button-disable)',
          primaryHover: 'var(--color-button-primary-hover)',
          infoHover: 'var(--color-button-info-hover)',
          successHover: 'var(--color-button-success-hover)',
          warningHover: 'var(--color-button-warning-hover)',
          errorHover: 'var(--color-button-error-hover)',
          primaryPress: 'var(--color-button-primary-press)',
          infoPress: 'var(--color-button-info-press)',
          successPress: 'var(--color-button-success-press)',
          warningPress: 'var(--color-button-warning-press)',
          errorPress: 'var(--color-button-error-press)',
        },
        lineBorder: {
          whiteLine: 'var(--color-line-border-white-line)',
          dividerLine: 'var(--color-line-border-divider-line)',
          borderDefault: 'var(--color-line-border-border-default)',
          borderHover: 'var(--color-line-border-border-hover)',
          primary: 'var(--color-line-border-primary)',
          information: 'var(--color-line-border-information)',
          success: 'var(--color-line-border-success)',
          warning: 'var(--color-line-border-warning)',
          error: 'var(--color-line-border-error)',
        },
        accent: {
          violet: 'var(--color-accent-violet)',
          cyan: 'var(--color-accent-cyan)',
        },
        palette: {
          primary100: 'var(--color-palette-primary-100)',
          primary200: 'var(--color-palette-primary-200)',
          primary300: 'var(--color-palette-primary-300)',
          primary400: 'var(--color-palette-primary-400)',
          primary500: 'var(--color-palette-primary-500)',
          primary600: 'var(--color-palette-primary-600)',
          primary700: 'var(--color-palette-primary-700)',
          primary800: 'var(--color-palette-primary-800)',
          primary900: 'var(--color-palette-primary-900)',
          primary1000: 'var(--color-palette-primary-1000)',
        },
        tertiary: 'var(--color-tertiary)',
      },
      fontSize: {
        h1: ['3.5rem', { letterSpacing: '0', lineHeight: '4.5rem' }],
        h2: ['2.5rem', { letterSpacing: '0', lineHeight: '3rem' }],
        h3: ['2rem', { letterSpacing: '0', lineHeight: '2.5rem' }],
        h4: ['1.5rem', { letterSpacing: '0', lineHeight: '1.875rem' }],
        h5: ['1.125rem', { letterSpacing: '0', lineHeight: '1.625rem' }],
        subHeading: ['0.875rem', { letterSpacing: '0.0175em', lineHeight: '1.375rem' }],
        subtitle1: ['0.875rem', { letterSpacing: '0.00875em', lineHeight: '1.375rem' }],
        subtitle2: ['0.75rem', { letterSpacing: '0.0175em', lineHeight: '1rem' }],
        body: ['0.875rem', { letterSpacing: '0', lineHeight: '1.375rem' }],
        caption1: ['0.75rem', { letterSpacing: '0.00875em', lineHeight: '1rem' }],
        caption2: ['0.75rem', { letterSpacing: '0', lineHeight: '1rem' }],
      },
      zIndex: {
        popover: '1500',
        modal: '9000',
        picker: '9500',
        tooltip: '9900',
        'table-thead': '5',
      },
    },
  },
  plugins: [plugin],
};
