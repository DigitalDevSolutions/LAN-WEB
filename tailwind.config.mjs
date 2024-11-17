/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
                "days-one"		: ["Days One", "sans-serif"]
            },
			colors: {
				"blueDark"		: "#006cc5",
				"blueLight"		: "#77cbff"
			}
		},
	},
	plugins: [],
}
