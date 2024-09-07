/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        dark: {
          primary: '#12121A',
          secondary: '#2E2E38',
          accent: '#CAE8EA',
          'accent-content': '#AED7D9',
          neutral: '#fff',
          'primary-content': '#ECECED'
        },
      }
    ]
  }
}

