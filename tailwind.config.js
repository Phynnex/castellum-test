/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      accent:"#EEF2F5",
      text:"#5C5C77",
      subtleText:"#9797AA",
      secondary:"#EF5DA8",
      accent2:"#F4F8F4",
      tetiary:"#F3DCDD",
      primary:"#FA1E51",
      white:"#FFFFFF",
    },
    extend: {
      fontFamily: {
        'raleway': ['Raleway', 'Montserrat'],
        
      },
    },
  },
  plugins: [],
}

