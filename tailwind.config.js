/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			screens: {
				tab: '840px',
				mobile: '450px',
			},
			fontSize: {
				xsm: '0.77rem',
			},
		},
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: [
			{
				light: {
					primary: '#466173',
					secondary: '#D9D9D9',
					accent: '#4CBB17',
					'primary-content': '#292929',

					'neutral-content': '#FFFFFF',
				},
				dark: {
					primary: '#1E1E1E',
					secondary: '#444444',
					accent: '#4CBB17',
					'primary-content': '#FFFFFF',
					// 'secondary-content': '#160016',
					// 'accent-content': '#001616',
					'neutral-content': '#FFFFFF',
					// 'base-content': '#160016',
				},
			},
		],
	},
};
