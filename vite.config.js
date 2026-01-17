import { defineConfig } from "vite";
import { join } from "node:path";
import tailwind from "@tailwindcss/vite";
import pkg from "./package.json" with { type: "json" };

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
	base: process.env.NODE_ENV === "production" ? `/${pkg.name}` : "/"
});
