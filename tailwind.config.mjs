/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				'primary-blue': {
					100: '#0072D6',
					200: '#0045B7',
					300: '#380080'
				},
				'primary-purple': {
					100: '#B47CF5',
					200: '#915BD1',
					300: '#6E3CAE'
				},
				'background': {
					100: '#f0f0f0',
					200: '#C8CAD1',
					300: '#95989E',
					400: '#66686E',
					500: '#1f1f1f',
					600: '#13151A',
				}
			},

		},
	},
	plugins: [],
}
