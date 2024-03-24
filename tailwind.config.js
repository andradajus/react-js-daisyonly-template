/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    styled: true,
    utils: true,
    themes: ["autumn"],
  },
  plugins: [require("daisyui")]
}

