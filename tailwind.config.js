/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors : {
        'biru-custom': '#050A30',
        'biru-custom-dua': '#000C66',
        'biru-custom-tiga': '#0a145e '


      },
      padding: {
        '6rem' : "6rem"
      }
    },
  },
  plugins: [require("daisyui")],
}
