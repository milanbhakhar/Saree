/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 20s linear infinite',
      },
    },
    screens: {
      'xs': "320px",
      'mb': "375px",
      'ml': "425px",
      'sx': "376px",
      'ms': "576px",
      'md600': "601px",
      'md767': "767px",
      'md': "768px",
      'mx':"426px",
      'sm': "640px",
      'dm': "992px",
      'lg': "1024px",
      'xl': "1280px",
      "2xl": "1440px",  
      "3xl": "1650px",
      "4xl": "1920px",
      "5xl": "2560px",
    },
  },
  plugins: [],
}

