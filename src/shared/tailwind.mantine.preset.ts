import type { Config } from 'tailwindcss';

export const mantineTailwind: Config = {
  content: [],
  darkMode: ['class', '[data-mantine-color-scheme="dark"]'],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      data: {
        checked: 'checked="true"',
        active: 'active="true"',
      },
      screens: {
        'mtn-xs': '576px', // 36em
        'mtn-sm': '768px', // 48em
        'mtn-md': '992px', // 62em
        'mtn-lg': '1200px', // 75em
        'mtn-xl': '1408px', // 88em
        1920: '1920px',
        1600: '1600px',
        1366: '1366px',
        1280: '1280px',
        1024: '1024px',
        768: '768px',
        480: '480px',
        375: '375px',
      },
      lineHeight: {
        'mtn-xs': 'var(--mantine-line-height-xs)',
        'mtn-sm': 'var(--mantine-line-height-sm)',
        'mtn-md': 'var(--mantine-line-height-md)',
        'mtn-lg': 'var(--mantine-line-height-lg)',
        'mtn-xl': 'var(--mantine-line-height-xl)',
      },
      fontSize: {
        xs: 'var(--mantine-font-size-xs)',
        sm: 'var(--mantine-font-size-sm)',
        md: 'var(--mantine-font-size-md)',
        lg: 'var(--mantine-font-size-lg)',
        xl: 'var(--mantine-font-size-xl)',
        h1: 'var(--mantine-h1-font-size)',
        h2: 'var(--mantine-h2-font-size)',
        h3: 'var(--mantine-h3-font-size)',
        h4: 'var(--mantine-h4-font-size)',
        h5: 'var(--mantine-h5-font-size)',
        h6: 'var(--mantine-h6-font-size)',
        'xs-regular': [
          '12px',
          {
            fontWeight: 400,
            lineHeight: '15px',
          },
        ],
        'xs-medium': [
          '12px',
          {
            fontWeight: 500,
            lineHeight: '18px',
          },
        ],
        'xs-semibold': [
          '12px',
          {
            fontWeight: 600,
            lineHeight: '18px',
          },
        ],
        'xs-bold': [
          '12px',
          {
            fontWeight: 700,
            lineHeight: '18px',
          },
        ],
        'sm-regular': [
          '14px',
          {
            fontWeight: 400,
            lineHeight: '20px',
          },
        ],
        'sm-medium': [
          '14px',
          {
            fontWeight: 500,
            lineHeight: '20px',
          },
        ],
        'sm-semibold': [
          '14px',
          {
            fontWeight: 600,
            lineHeight: '20px',
          },
        ],
        'sm-bold': [
          '14px',
          {
            fontWeight: 700,
            lineHeight: '20px',
          },
        ],
        'md-regular': [
          '16px',
          {
            fontWeight: 400,
            lineHeight: '24px',
          },
        ],
        'md-medium': [
          '16px',
          {
            fontWeight: 500,
            lineHeight: '24px',
          },
        ],
        'md-semibold': [
          '16px',
          {
            fontWeight: 600,
            lineHeight: '24px',
          },
        ],
        'md-bold': [
          '16px',
          {
            fontWeight: 700,
            lineHeight: '24px',
          },
        ],
        'lg-regular': [
          '18px',
          {
            fontWeight: 400,
            lineHeight: '28px',
          },
        ],
        'lg-medium': [
          '18px',
          {
            fontWeight: 500,
            lineHeight: '28px',
          },
        ],
        'lg-semibold': [
          '18px',
          {
            fontWeight: 600,
            lineHeight: '28px',
          },
        ],
        'lg-bold': [
          '18px',
          {
            fontWeight: 700,
            lineHeight: '28px',
          },
        ],
        'xl-regular': [
          '20px',
          {
            fontWeight: 400,
            lineHeight: '30px',
          },
        ],
        'xl-medium': [
          '20px',
          {
            fontWeight: 500,
            lineHeight: '30px',
          },
        ],
        'xl-semibold': [
          '20px',
          {
            fontWeight: 600,
            lineHeight: '30px',
          },
        ],
        'xl-bold': [
          '20px',
          {
            fontWeight: 700,
            lineHeight: '30px',
          },
        ],
        'd-xs-regular': [
          '1.5rem',
          {
            fontWeight: 400,
            lineHeight: '2rem',
          },
        ],
        'd-xs-medium': [
          '1.5rem',
          {
            fontWeight: 500,
            lineHeight: '2rem',
          },
        ],
        'd-xs-semibold': [
          '1.5rem',
          {
            fontWeight: 600,
            lineHeight: '2rem',
          },
        ],
        'd-xs-bold': [
          '1.5rem',
          {
            fontWeight: 700,
            lineHeight: '2rem',
          },
        ],
        'd-sm-regular': [
          '1.875rem',
          {
            fontWeight: 400,
            lineHeight: '2.375rem',
          },
        ],
        'd-sm-medium': [
          '1.875rem',
          {
            fontWeight: 500,
            lineHeight: '2.375rem',
          },
        ],
        'd-sm-semibold': [
          '1.875rem',
          {
            fontWeight: 600,
            lineHeight: '2.375rem',
          },
        ],
        'd-sm-bold': [
          '1.875rem',
          {
            fontWeight: 700,
            lineHeight: '2.375rem',
          },
        ],
        'd-md-regular': [
          '2.25rem',
          {
            fontWeight: 400,
            lineHeight: '2.75rem',
          },
        ],
        'd-md-medium': [
          '2.25rem',
          {
            fontWeight: 500,
            lineHeight: '2.75rem',
          },
        ],
        'd-md-semibold': [
          '2.25rem',
          {
            fontWeight: 600,
            lineHeight: '2.75rem',
          },
        ],
        'd-md-bold': [
          '2.25rem',
          {
            fontWeight: 700,
            lineHeight: '2.75rem',
          },
        ],
        'd-lg-regular': [
          '3rem',
          {
            fontWeight: 400,
            lineHeight: '3.75rem',
          },
        ],
        'd-lg-medium': [
          '3rem',
          {
            fontWeight: 500,
            lineHeight: '3.75rem',
          },
        ],
        'd-lg-semibold': [
          '3rem',
          {
            fontWeight: 600,
            lineHeight: '3.75rem',
          },
        ],
        'd-lg-bold': [
          '3rem',
          {
            fontWeight: 700,
            lineHeight: '3.75rem',
          },
        ],
        'd-xl-regular': [
          '3.75rem',
          {
            fontWeight: 400,
            lineHeight: '4.5rem',
          },
        ],
        'd-xl-medium': [
          '3.75rem',
          {
            fontWeight: 500,
            lineHeight: '4.5rem',
          },
        ],
        'd-xl-semibold': [
          '3.75rem',
          {
            fontWeight: 600,
            lineHeight: '4.5rem',
          },
        ],
        'd-xl-bold': [
          '3.75rem',
          {
            fontWeight: 700,
            lineHeight: '4.5rem',
          },
        ],
        'd-2xl-regular': [
          '4.5rem',
          {
            fontWeight: 400,
            lineHeight: '5.62rem',
          },
        ],
        'd-2xl-medium': [
          '4.5rem',
          {
            fontWeight: 500,
            lineHeight: '5.62rem',
          },
        ],
        'd-2xl-semibold': [
          '4.5rem',
          {
            fontWeight: 600,
            lineHeight: '5.62rem',
          },
        ],
        'd-2xl-bold': [
          '4.5rem',
          {
            fontWeight: 700,
            lineHeight: '5.62rem',
          },
        ],
        logo: [
          '20px',
          {
            fontWeight: 600,
            lineHeight: '24px',
          },
        ],
      },
      spacing: {
        'mtn-xs': 'var(--mantine-spacing-xs)',
        'mtn-sm': 'var(--mantine-spacing-sm)',
        'mtn-md': 'var(--mantine-spacing-md)',
        'mtn-lg': 'var(--mantine-spacing-lg)',
        'mtn-xl': 'var(--mantine-spacing-xl)',
        xs: '2px',
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
      },
      colors: {
        gray: {
          25: '#FCFCFD',
          50: '#F9FAFB',
          100: '#F2F4F7',
          200: '#EAECF0',
          300: '#D0D5DD',
          400: '#98A2B3',
          500: '#667085',
          600: '#475467',
          700: '#344054',
          800: '#182230',
          900: '#101828',
          950: '#0C111D',
        },
        brand: {
          25: '#FCFAFF',
          50: '#F9F5FF',
          100: '#F4EBFF',
          200: '#E9D7FE',
          300: '#D6BBFB',
          400: '#B692F6',
          500: '#9E77ED',
          600: '#7F56D9',
          700: '#6941C6',
          800: '#53389E',
          900: '#42307D',
          950: '#2C1C5F',
        },
      },

      boxShadow: {
        'mtn-xs': 'var(--mantine-shadow-xs)',
        'mtn-sm': 'var(--mantine-shadow-sm)',
        'mtn-md': 'var(--mantine-shadow-md)',
        'mtn-lg': 'var(--mantine-shadow-lg)',
        'mtn-xl': 'var(--mantine-shadow-xl)',
      },
    },
  },
  plugins: [],
};

export { mantineTailwind as mantine_tw_preset };
