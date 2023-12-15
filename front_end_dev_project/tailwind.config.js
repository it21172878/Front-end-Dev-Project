/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primaryColor: '#6B3CC9',
        secondaryColor: '#F28D35',
        analogousColor1: '#6A44F2',
        analogousColor2: '#1CBDDD',
        triadicColor1: '#52378C',
        darkColor: '#78BF91',
        textColor: '#2F2F2F',
        textColorLight: '#545A75',
        textColorSubtitle: '#9C9991',
        accentColor1: '#E2F2FE',
        accentColor2: '#FFF8E0',
        errorColor: '#FF0335',
        successColor: '#5EB30B',
      },
    },
  },
  plugins: [],
};
