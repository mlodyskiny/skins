import { heroui } from "@heroui/react";

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
		"./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: 
		{
			colors:
			{
				background: "#0c0c0c", // or DEFAULT
				backgroundLight: "#1a1a1a", // or DEFAULT
				foreground: "#dedede", // or 50 to 900 DEFAULT
				primary: 
				{
					foreground: "#000000",
					DEFAULT: "#92f09a",
				}
			}
		},
	},
	darkMode: "class",
	plugins: [heroui()],
};
