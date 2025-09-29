/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#fbfaf8',
        'text-primary': '#543233',
        'text-secondary': '#8b9bb0',
        'text-shade1': '#30569d',
        'text-shade2': '#c8741c',
        'text-shade3': '#453190',
        'text-shade4': '#bb5562',
        'text-shade5': '#238495',
        'text-shade6': '#19723a',
        'border-primary': '#f1edea',
        'border-secondary': '#909ba9',
        'border-tertiary': '#707984',
        'border-shade1': 'rgba(48, 86, 157, 0.35)',
        'border-shade2': 'rgba(200, 116, 28, 0.35)',
        'border-shade3': 'rgba(69, 49, 144, 0.35)',
        'border-shade4': 'rgba(187, 85, 98, 0.35)',
        'border-shade5': 'rgba(35, 132, 149, 0.35)',
        'border-shade6': 'rgba(25, 114, 58, 0.35)',
        'support-primary': '#e9e9e9',
        'button-primary': '#d9d9d9',
        'button-secondary': '#fff1f3',
        'brand-primary': '#e11933',
        'nav-hover': '#f1f1f1',
      },
      backgroundImage: {
        'gradient-shade1': 'linear-gradient(180deg, #cadbf9 0%, #e0e7f9 100%)',
        'gradient-shade2': 'linear-gradient(180deg, #f5e3cf 0%, #f8f1e1 100%)',
        'gradient-shade3': 'linear-gradient(180deg, #d5ccfb 0%, #e5e1f8 100%)',
        'gradient-shade4': 'linear-gradient(180deg, #fbc9cd 0%, #f7e2dd 100%)',
        'gradient-shade5': 'linear-gradient(180deg, #cceef8 0%, #def2f9 100%)',
        'gradient-shade6': 'linear-gradient(180deg, #c6f4e9 0%, #def6e6 100%)',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'hero': '34px',
        'title': '20px',
        'secondary': '16px',
        'support': '14px',
      },
    },
  },
  plugins: [],
}
