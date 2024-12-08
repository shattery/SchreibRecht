/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode:"class",
	
	theme: {
		extend: {
			darkMode:"class",
			colors:{
				
					light:"#f5f5f5",
					dark:"#1b1b1b",
					primary:"#0090FF",
					primarydark: "#005F99",
                    secondary:"#B4B4B4",
					secondarydark:"#4E4E4E",
					
  


				
				
			}
		},
	},
	plugins: [],
}