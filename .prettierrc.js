import config from "@hyperz111/prettier-config";
import * as tailwind from "prettier-plugin-tailwindcss";

export default {
	...config,
	plugins: [tailwind],
	tailwindStylesheet: "./src/style.css",
};
