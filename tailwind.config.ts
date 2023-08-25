import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container:{
      center: true,
    },
    extend: {
      lineHeight:{
        '18': '18px',
        '30': '30px',
        '44': '44px',
        '60': '60px',
        '72': '72px',
        '90': '90px'
      },
      boxShadow:{
        xs: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
        sm: '0px 1px 2px 0px rgba(16, 24, 40, 0.06), 0px 1px 3px 0px rgba(16, 24, 40, 0.10)',
        md: '0px 2px 4px -2px rgba(16, 24, 40, 0.06), 0px 4px 8px -2px rgba(16, 24, 40, 0.10)',
        lg: '0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08)',
        xl: '0px 8px 8px -4px rgba(16, 24, 40, 0.03), 0px 20px 24px -4px rgba(16, 24, 40, 0.08)',
        '2xl': '0px 24px 48px -12px rgba(16, 24, 40, 0.18)',
        '3xl': '0px 32px 64px -12px rgba(16, 24, 40, 0.14)',
      },
      padding:{
        '4.5': '18px'
      },
      colors:{
        gray:{
          25:'#FCFCFD',
          50:'#F9FAFB',
          100:'#F2F4F7',
          200:'#EAECF0',
          300:'#D0D5DD',
          400:'#98A2B3',
          500:'#667085',
          600:'#667085',
          700:'#344054',
          800:'#1D2939',
          900:'#101828',
        },
        primary:{
          25:'#FCFAFF',
          50:'#F9F5FF',
          100:'#F4EBFF',
          200:'#E9D7FE',
          300:'#D6BBFB',
          400:'#B692F6',
          500:'#9E77ED',
          600:'#7F56D9',
          700:'#6941C6',
          800:'#53389E',
          900:'#42307D',
        },
        error:{
          25:'#FFFBFA',
          50:'#FEF3F2',
          100:'#FEE4E2',
          200:'#FECDCA',
          300:'#FDA29B',
          400:'#F97066',
          500:'#F04438',
          600:'#D92D20',
          700:'#B42318',
          800:'#912018',
          900:'#7A271A',
        },
        warning:{
          25:'#FFFCF5',
          50:'#FFFAEB',
          100:'#FEF0C7',
          200:'#FEDF89',
          300:'#FEC84B',
          400:'#FDB022',
          500:'#F79009',
          600:'#DC6803',
          700:'#B54708',
          800:'#93370D',
          900:'#7A2E0E',
        },
        success:{
          25:'#F6FEF9',
          50:'#ECFDF3',
          100:'#D1FADF',
          200:'#A6F4C5',
          300:'#6CE9A6',
          400:'#32D583',
          500:'#12B76A',
          600:'#039855',
          700:'#027A48',
          800:'#05603A',
          900:'#054F31',
        },
      }
    },
  },
  plugins: [],
}
export default config
