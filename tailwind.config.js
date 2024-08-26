/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens : {
      "lg" :  "1024px",
      "md" : "768px",
      "sm" : "640px",
      "mm" : "550px",
      "ss" : "400px"
    },
    extend: {
      fontFamily : {
        montserrat : '"Montserrat", system-ui'
      },
      colors : {
        colorDark : "#161722",
        colorLight : "#fafafa",
        bgLight: " rgba(0, 0, 0, 0.005)"
      },
      boxShadow : {
        shDark : " 0px 5px 70px 4px rgba(255, 255, 255, 0.2)"
      }
      
    },
  },
  plugins: [],
}

