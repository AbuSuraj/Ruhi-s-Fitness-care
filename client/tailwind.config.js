/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#3de038",
        
"secondary": "#6472f4",
        
"accent": "#ea8e79",
        
"neutral": "#F9F9F9",
        
"base-100": "#F5F0F5",
        
"info": "#5BA3F1",
        
"success": "#126D49",
        
"warning": "#A96E0A",
        
"error": "#F5244E",
        },
      },
    ],
  },
  plugins: [
    require('daisyui'),
  ],
  //...
}  
 
