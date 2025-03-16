import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
	base: './', // Ensures correct relative paths
	plugins: [react()],
	server: {
		allowedHosts: true,
	},
	build: {
		outDir: 'dist', // Make sure the output directory is correct
	},
});
