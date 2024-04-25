/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    global: {
      body: {
        textColor: '#3C4043', // Set the global text color
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "biru-gradient": "linear-gradient(180deg, #24B9FF 0%, #17A2FF 100%)",
      },
      colors: {
        biru: '#18A4FF',
        hitam: '#3C4043',
        abugelap: '#BEBBBB',
        abuterang: '#E6E6E6'
      },
      boxShadow: {
        customin: '0px 6px 0px 0px #0291D8',
      },
    },
  },
  plugins: [],
};
