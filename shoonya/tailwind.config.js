/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: { 
    extend: {
      colors : {
        "darkBlue" : 'rgb(27, 50, 82)',
        "lightBlue" : 'rgb(40, 75, 115)',
        "lightBrown" : "rgb(224, 217, 207)",
        "white" : 'rgb(255, 255, 255)',
        "black" : 'rgb(3, 3, 3)',
        "lightGrey": 'rgb(239, 239, 239)',
        "darkGrey": 'rgb(209, 213, 219)',
      }
      
    },
  },
  plugins: [],
}

