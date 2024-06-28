/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    global: {
      body: {
        textColor: '#3C4043', // Set the global text color
      },
    },
    extend: {
      colors: {
        blue: '#18A4FF',
        black: '#3C4043',
        darkgray: '#BEBBBB',
        lightgray: '#E6E6E6',
        green: '#21B760',
        light: '#EDF2F7',
      },
      backgroundImage: {
        'gradient-blue': 'linear-gradient(180deg, #24b9ff 0%, #17a2ff 100%)',
        'gradient-green': 'linear-gradient(180deg, #13D866 0%, #21B760 100%)',
        'gradient-blue-20':
          'linear-gradient(180deg, rgba(36, 185, 255, 0.2) 0%, rgba(23, 162, 255, 0.2) 100%)',
      },
      boxShadow: {
        card: '0px 6px 0px 0px #ABABAB',
        'button-blue': '0px 6px 0px 0px #0291D8',
        'button-gray': '0px 6px 0px 0px #BEBBBB',
        'draggable-gray': '0px 2px 0px 0px #BEBBBB',
        'button-green': '0px 6px 0px 0px #0FA34E',
        'biru-gradient': 'linear-gradient(180deg, #24B9FF 0%, #17A2FF 100%)',
        'biru-gradient-hover':
          'linear-gradient(180deg, #0D9FE3 0%, #17A2FF 100%)',
      },
      // colors: {
      //   biru: '#18A4FF',
      //   hitam: '#3C4043',
      //   abugelap: '#BEBBBB',
      //   abuterang: '#E6E6E6',
      //   abu: '#E63633'
      // },
      // boxShadow: {
      //   bayangan_biru: '0px 6px 0px #0291D8',
      // },
    },
  },
  plugins: [],
};
