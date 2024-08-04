/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {},
		container: {
			padding: {
				DEFAULT: '2rem',
				sm: '0',
				lg: '0',
				xl: '0',
				'2xl': '0'
			}
		}
	},
	plugins: []
};
