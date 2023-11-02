/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#1E1067',
				secondary: '#00BDFF',
				tertiary: '#FFD300',
				quaternary: '#FF5B28',
			}
		},
	},
	plugins: [],
}
