const config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {

      colors: {
        primary: {
          burgundy: '#BF0000',
          green: '#024225',
          black: '#121212',
          gray: '#999999',
        }
      },
    },
  },
  plugins: [],
};

export default config;
