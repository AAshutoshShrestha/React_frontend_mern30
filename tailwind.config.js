/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
		"./node_modules/flowbite/**/*.js",
		'node_modules/flowbite-react/lib/esm/**/*.js'
		
	],
	theme: {
		extend: {},
	},
	plugins: [
		('flowbite/plugin')
	],
  }