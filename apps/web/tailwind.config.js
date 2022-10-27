const token = {
  color: {
    brand: '#fee67a',
    background: '#522941',
  },
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '../../apps/web/pages/**/*.{js,ts,jsx,tsx}',
    '../../apps/web/components/**/*.{js,ts,jsx,tsx}',
    '../../apps/web/features/**/*.{js,ts,jsx,tsx}',
    '../../packages/ui/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          100: `${token.color.brand + '10'}`,
          200: `${token.color.brand + '20'}`,
          300: `${token.color.brand + '30'}`,
          400: `${token.color.brand + '40'}`,
          500: `${token.color.brand + '50'}`,
          600: `${token.color.brand + '60'}`,
          700: `${token.color.brand + '70'}`,
          800: `${token.color.brand + '80'}`,
          900: `${token.color.brand + '90'}`,
          1000: `${token.color.brand}`,
        },
        background: {
          100: `${token.color.background + '10'}`,
          200: `${token.color.background + '20'}`,
          300: `${token.color.background + '30'}`,
          400: `${token.color.background + '40'}`,
          500: `${token.color.background + '50'}`,
          600: `${token.color.background + '60'}`,
          700: `${token.color.background + '70'}`,
          800: `${token.color.background + '80'}`,
          900: `${token.color.background + '90'}`,
          1000: `${token.color.background}`,
        },
        gray: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#eeeeee',
          300: '#e0e0e0',
          400: '#bdbdbd',
          500: '#9e9e9e',
          600: '#757575',
          700: '#616161',
          800: '#424242',
          900: '#212121',
          1000: '#0a0a0a',
        },
      },
    },
  },
  plugins: [],
}
