import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#1B7339",
      white: "#FFFFFF",
  },
  screens: {

      "2xl": "1400px",
      "3xl": "1600px",
      'xl': {'max': '1279px'},
      'lg': {'max': '1023px'},
      'md': {'max': '767px'},
      'sm': {'max': '639px'},

    },
    extend: {
      fontFamily: {
          ojuju: ['Ojuju', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
export default config;
