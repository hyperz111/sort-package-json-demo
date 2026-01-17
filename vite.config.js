import { defineConfig } from "vite";
import { join } from "node:path";
import tailwind from "@tailwindcss/vite";

export default defineConfig({
	plugins: [tailwind()],
	resolve: {
		alias: {
			"node:fs": join(import.meta.dirname, "fs-browser.js"),
		},
	},
	json: {
		namedExports: true,
	},
});
