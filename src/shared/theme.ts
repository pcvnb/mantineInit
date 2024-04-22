import { createTheme } from '@mantine/core';

export const theme = createTheme({
  scale: 1,
  fontSmoothing: true,
  focusRing: 'auto',
  white: '#fff',
  black: '#000',
  colors: {
    grayLight: [
      '#FCFCFD',
      '#F9FAFB',
      '#F2F4F7',
      '#EAECF0',
      '#D0D5DD',
      '#98A2B3',
      '#667085',
      '#475467',
      '#344054',
      '#182230',
      '#101828',
      '#0C111D',
    ],
    brand: [
      '#FCFAFF',
      '#F9F5FF',
      '#F4EBFF',
      '#E9D7FE',
      '#D6BBFB',
      '#B692F6',
      '#9E77ED',
      '#7F56D9',
      '#6941C6',
      '#53389E',
      '#42307D',
      '#2C1C5F',
    ],
    error: [
      '#FFFBFA',
      '#FEF3F2',
      '#FEE4E2',
      '#FECDCA',
      '#FDA29B',
      '#F97066',
      '#F04438',
      '#D92D20',
      '#B42318',
      '#912018',
      '#7A271A',
      '#55160C',
    ],
    warning: [
      '#FFFCF5',
      '#FFFAEB',
      '#FEF0C7',
      '#FEDF89',
      '#FEC84B',
      '#FDB022',
      '#F79009',
      '#DC6803',
      '#B54708',
      '#93370D',
      '#7A2E0E',
      '#4E1D09',
    ],
    success: [
      '#F6FEF9',
      '#ECFDF3',
      '#DCFAE6',
      '#ABEFC6',
      '#75E0A7',
      '#47CD89',
      '#17B26A',
      '#079455',
      '#067647',
      '#085D3A',
      '#074D31',
      '#053321',
    ],
    grayBlue: [
      '#FCFCFD',
      '#F8F9FC',
      '#EAECF5',
      '#D5D9EB',
      '#B3B8DB',
      '#717BBC',
      '#4E5BA6',
      '#3E4784',
      '#363F72',
      '#293056',
      '#101323',
      '#0D0F1C',
    ],
    grayCool: [
      '#FCFCFD',
      '#F9F9FB',
      '#EFF1F5',
      '#DCDFEA',
      '#B9C0D4',
      '#7D89B0',
      '#5D6B98',
      '#4A5578',
      '#404968',
      '#30374F',
      '#111322',
      '#0E101B',
    ],
    grayModern: [
      '#FCFCFD',
      '#F8FAFC',
      '#EEF2F6',
      '#E3E8EF',
      '#CDD5DF',
      '#9AA4B2',
      '#697586',
      '#4B5565',
      '#364152',
      '#202939',
      '#121926',
      '#0D121C',
    ],
    grayNeutral: [
      '#FCFCFD',
      '#F9FAFB',
      '#F3F4F6',
      '#E5E7EB',
      '#D2D6DB',
      '#9DA4AE',
      '#6C737F',
      '#4D5761',
      '#384250',
      '#1F2A37',
      '#111927',
      '#0D121C',
    ],
    grayIron: [
      '#FCFCFC',
      '#FAFAFA',
      '#F4F4F5',
      '#E4E4E7',
      '#D1D1D6',
      '#A0A0AB',
      '#70707B',
      '#51525C',
      '#3F3F46',
      '#26272B',
      '#1A1A1E',
      '#131316',
    ],
    grayTrue: [
      '#FCFCFC',
      '#FAFAFA',
      '#F5F5F5',
      '#E5E5E5',
      '#D6D6D6',
      '#A3A3A3',
      '#737373',
      '#525252',
      '#424242',
      '#292929',
      '#141414',
      '#0F0F0F',
    ],
    grayWarm: [
      '#FDFDFC',
      '#FAFAF9',
      '#F5F5F4',
      '#E7E5E4',
      '#D7D3D0',
      '#A9A29D',
      '#79716B',
      '#57534E',
      '#44403C',
      '#292524',
      '#1C1917',
      '#171412',
    ],
    moss: [
      '#FAFDF7',
      '#F5FBEE',
      '#E6F4D7',
      '#CEEAB0',
      '#ACDC79',
      '#86CB3C',
      '#669F2A',
      '#4F7A21',
      '#3F621A',
      '#335015',
      '#2B4212',
      '#1A280B',
    ],
    greenLight: [
      '#FAFEF5',
      '#F3FEE7',
      '#E4FBCC',
      '#D0F8AB',
      '#A6EF67',
      '#85E13A',
      '#66C61C',
      '#4CA30D',
      '#3B7C0F',
      '#326212',
      '#2B5314',
      '#15290A',
    ],

    blueDark: [
      '#F5F8FF',
      '#EFF4FF',
      '#D1E0FF',
      '#B2CCFF',
      '#84ADFF',
      '#528BFF',
      '#2970FF',
      '#155EEF',
      '#004EEB',
      '#0040C1',
      '#00359E',
      '#002266',
    ],

    purple: [
      '#FAFAFF',
      '#F4F3FF',
      '#EBE9FE',
      '#D9D6FE',
      '#BDB4FE',
      '#9B8AFB',
      '#7A5AF8',
      '#6938EF',
      '#5925DC',
      '#4A1FB8',
      '#3E1C96',
      '#27115F',
    ],
    fuchsia: [
      '#FEFAFF',
      '#FDF4FF',
      '#FBE8FF',
      '#F6D0FE',
      '#EEAAFD',
      '#E478FA',
      '#D444F1',
      '#BA24D5',
      '#9F1AB1',
      '#821890',
      '#6F1877',
      '#47104C',
    ],
    pink: [
      '#FEF6FB',
      '#FDF2FA',
      '#FCE7F6',
      '#FCCEEE',
      '#FAA7E0',
      '#F670C7',
      '#EE46BC',
      '#DD2590',
      '#C11574',
      '#9E165F',
      '#851651',
      '#4E0D30',
    ],
    rose: [
      '#FFF5F6',
      '#FFF1F3',
      '#FFE4E8',
      '#FECDD6',
      '#FEA3B4',
      '#FD6F8E',
      '#F63D68',
      '#E31B54',
      '#C01048',
      '#A11043',
      '#89123E',
      '#510B24',
    ],
    orangeDark: [
      '#FFF9F5',
      '#FFF4ED',
      '#FFE6D5',
      '#FFD6AE',
      '#FF9C66',
      '#FF692E',
      '#FF4405',
      '#E62E05',
      '#BC1B06',
      '#97180C',
      '#771A0D',
      '#57130A',
    ],
    orange: [
      '#FEFAF5',
      '#FEF6EE',
      '#FDEAD7',
      '#F9DBAF',
      '#F7B27A',
      '#F38744',
      '#EF6820',
      '#E04F16',
      '#B93815',
      '#932F19',
      '#772917',
      '#511C10',
    ],
    yellow: [
      '#FEFDF0',
      '#FEFBE8',
      '#FEF7C3',
      '#FEEE95',
      '#FDE272',
      '#FAC515',
      '#EAAA08',
      '#CA8504',
      '#A15C07',
      '#854A0E',
      '#713B12',
      '#542C0D',
    ],
    dark: [
      '#C9C9C9',
      '#b8b8b8',
      '#828282',
      '#696969',
      '#424242',
      '#3b3b3b',
      '#2e2e2e',
      '#242424',
      '#1f1f1f',
      '#141414',
    ],
    gray: [
      '#f8f9fa',
      '#f1f3f5',
      '#e9ecef',
      '#dee2e6',
      '#ced4da',
      '#adb5bd',
      '#868e96',
      '#495057',
      '#343a40',
      '#212529',
    ],
    red: [
      '#fff5f5',
      '#ffe3e3',
      '#ffc9c9',
      '#ffa8a8',
      '#ff8787',
      '#ff6b6b',
      '#fa5252',
      '#f03e3e',
      '#e03131',
      '#c92a2a',
    ],
    pink: [
      '#fff0f6',
      '#ffdeeb',
      '#fcc2d7',
      '#faa2c1',
      '#f783ac',
      '#f06595',
      '#e64980',
      '#d6336c',
      '#c2255c',
      '#a61e4d',
    ],
    grape: [
      '#f8f0fc',
      '#f3d9fa',
      '#eebefa',
      '#e599f7',
      '#da77f2',
      '#cc5de8',
      '#be4bdb',
      '#ae3ec9',
      '#9c36b5',
      '#862e9c',
    ],
    violet: [
      '#f3f0ff',
      '#e5dbff',
      '#d0bfff',
      '#b197fc',
      '#9775fa',
      '#845ef7',
      '#7950f2',
      '#7048e8',
      '#6741d9',
      '#5f3dc4',
    ],
    indigo: [
      '#edf2ff',
      '#dbe4ff',
      '#bac8ff',
      '#91a7ff',
      '#748ffc',
      '#5c7cfa',
      '#4c6ef5',
      '#4263eb',
      '#3b5bdb',
      '#364fc7',
    ],
    blue: [
      '#e7f5ff',
      '#d0ebff',
      '#a5d8ff',
      '#74c0fc',
      '#4dabf7',
      '#339af0',
      '#228be6',
      '#1c7ed6',
      '#1971c2',
      '#1864ab',
    ],
    cyan: [
      '#e3fafc',
      '#c5f6fa',
      '#99e9f2',
      '#66d9e8',
      '#3bc9db',
      '#22b8cf',
      '#15aabf',
      '#1098ad',
      '#0c8599',
      '#0b7285',
    ],
    teal: [
      '#e6fcf5',
      '#c3fae8',
      '#96f2d7',
      '#63e6be',
      '#38d9a9',
      '#20c997',
      '#12b886',
      '#0ca678',
      '#099268',
      '#087f5b',
    ],
    green: [
      '#ebfbee',
      '#d3f9d8',
      '#b2f2bb',
      '#8ce99a',
      '#69db7c',
      '#51cf66',
      '#40c057',
      '#37b24d',
      '#2f9e44',
      '#2b8a3e',
    ],
    lime: [
      '#f4fce3',
      '#e9fac8',
      '#d8f5a2',
      '#c0eb75',
      '#a9e34b',
      '#94d82d',
      '#82c91e',
      '#74b816',
      '#66a80f',
      '#5c940d',
    ],
    yellow: [
      '#fff9db',
      '#fff3bf',
      '#ffec99',
      '#ffe066',
      '#ffd43b',
      '#fcc419',
      '#fab005',
      '#f59f00',
      '#f08c00',
      '#e67700',
    ],
    orange: [
      '#fff4e6',
      '#ffe8cc',
      '#ffd8a8',
      '#ffc078',
      '#ffa94d',
      '#ff922b',
      '#fd7e14',
      '#f76707',
      '#e8590c',
      '#d9480f',
    ],
  },
  primaryShade: {
    light: 7,
    dark: 8,
  },
  primaryColor: 'brand',
  autoContrast: false,
  luminanceThreshold: 0.3,
  fontFamily: 'Inter, sans-serif',
  fontFamilyMonospace:
    'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace',
  respectReducedMotion: false,
  cursorType: 'default',
  defaultGradient: {
    from: 'blue',
    to: 'cyan',
    deg: 45,
  },
  defaultRadius: 'sm',
  activeClassName: 'mantine-active',
  focusClassName: '',
  headings: {
    fontFamily:
      '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji',
    fontWeight: '700',
    textWrap: 'wrap',
    sizes: {
      h1: {
        fontSize: 'calc(2.125rem * var(--mantine-scale))',
        lineHeight: '1.3',
      },
      h2: {
        fontSize: 'calc(1.625rem * var(--mantine-scale))',
        lineHeight: '1.35',
      },
      h3: {
        fontSize: 'calc(1.375rem * var(--mantine-scale))',
        lineHeight: '1.4',
      },
      h4: {
        fontSize: 'calc(1.125rem * var(--mantine-scale))',
        lineHeight: '1.45',
      },
      h5: {
        fontSize: 'calc(1rem * var(--mantine-scale))',
        lineHeight: '1.5',
      },
      h6: {
        fontSize: 'calc(0.875rem * var(--mantine-scale))',
        lineHeight: '1.5',
      },
    },
  },
  fontSizes: {
    xs: 'calc(0.75rem * var(--mantine-scale))',
    sm: 'calc(0.875rem * var(--mantine-scale))',
    md: 'calc(1rem * var(--mantine-scale))',
    lg: 'calc(1.125rem * var(--mantine-scale))',
    xl: 'calc(1.25rem * var(--mantine-scale))',
  },
  lineHeights: {
    xs: '1.4',
    sm: '1.45',
    md: '1.55',
    lg: '1.6',
    xl: '1.65',
  },
  radius: {
    xs: 'calc(0.125rem * var(--mantine-scale))',
    sm: 'calc(0.25rem * var(--mantine-scale))',
    md: 'calc(0.5rem * var(--mantine-scale))',
    lg: 'calc(1rem * var(--mantine-scale))',
    xl: 'calc(2rem * var(--mantine-scale))',
  },
  spacing: {
    xs: 'calc(0.625rem * var(--mantine-scale))',
    sm: 'calc(0.75rem * var(--mantine-scale))',
    md: 'calc(1rem * var(--mantine-scale))',
    lg: 'calc(1.25rem * var(--mantine-scale))',
    xl: 'calc(2rem * var(--mantine-scale))',
  },
  breakpoints: {
    xs: '36em',
    sm: '48em',
    md: '62em',
    lg: '75em',
    xl: '88em',
  },
  shadows: {
    xs: '0 calc(0.0625rem * var(--mantine-scale)) calc(0.1875rem * var(--mantine-scale)) rgba(0, 0, 0, 0.05), 0 calc(0.0625rem * var(--mantine-scale)) calc(0.125rem * var(--mantine-scale)) rgba(0, 0, 0, 0.1)',
    sm: '0 calc(0.0625rem * var(--mantine-scale)) calc(0.1875rem * var(--mantine-scale)) rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 calc(0.625rem * var(--mantine-scale)) calc(0.9375rem * var(--mantine-scale)) calc(-0.3125rem * var(--mantine-scale)), rgba(0, 0, 0, 0.04) 0 calc(0.4375rem * var(--mantine-scale)) calc(0.4375rem * var(--mantine-scale)) calc(-0.3125rem * var(--mantine-scale))',
    md: '0 calc(0.0625rem * var(--mantine-scale)) calc(0.1875rem * var(--mantine-scale)) rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 calc(1.25rem * var(--mantine-scale)) calc(1.5625rem * var(--mantine-scale)) calc(-0.3125rem * var(--mantine-scale)), rgba(0, 0, 0, 0.04) 0 calc(0.625rem * var(--mantine-scale)) calc(0.625rem * var(--mantine-scale)) calc(-0.3125rem * var(--mantine-scale))',
    lg: '0 calc(0.0625rem * var(--mantine-scale)) calc(0.1875rem * var(--mantine-scale)) rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 calc(1.75rem * var(--mantine-scale)) calc(1.4375rem * var(--mantine-scale)) calc(-0.4375rem * var(--mantine-scale)), rgba(0, 0, 0, 0.04) 0 calc(0.75rem * var(--mantine-scale)) calc(0.75rem * var(--mantine-scale)) calc(-0.4375rem * var(--mantine-scale))',
    xl: '0 calc(0.0625rem * var(--mantine-scale)) calc(0.1875rem * var(--mantine-scale)) rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 calc(2.25rem * var(--mantine-scale)) calc(1.75rem * var(--mantine-scale)) calc(-0.4375rem * var(--mantine-scale)), rgba(0, 0, 0, 0.04) 0 calc(1.0625rem * var(--mantine-scale)) calc(1.0625rem * var(--mantine-scale)) calc(-0.4375rem * var(--mantine-scale))',
  },
  other: {},
  components: {},
});
