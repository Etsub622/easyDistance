/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./src/**/*.{js,jsx,ts,tsx}", 
      "./index.html", 
  ],
  theme: {
     fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      epilogue: ['Epilogue'],
      langar:['Langar']
      },
      fontSize: {
        '48': '48px',
        '28': '20px',
        '30':'24px',
        '36': '36px',
        
      },
    extend: {
      
 colors: {
        customColor: ['#43C5A4' ,'#515B6F','#12C698','#6FC2AD'],
      },
    },
  },
  plugins: [],
}

