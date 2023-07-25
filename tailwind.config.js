/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container:{
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        md: '3rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem'
      },
      center: true
    },
    extend: {
      colors: {
        'primary-blue-100': '#5282FF',
        'primary-blue-200': '#2D60E4',
        'primary-gray-100': '#E3E3E3',
        'primary-gray-200': '#D0D0D0',
      },
      fontSize:{
        "2xs": "0.8rem"
      },
      backgroundImage:{
        'gradient-blue-100': 'linear-gradient(180deg, rgba(82, 130, 255, 0.00) 0%, #5282FF 100%)'
      }
    },
    screens:{
      'xs': '500px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  plugins: [],
}
