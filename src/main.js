import "./style.css";
import { sortPackageJson } from "sort-package-json";
import { dependencies } from "../package.json";

let input = "";
let sortOrder = "[]";

document.querySelector(".version").innerText = dependencies["sort-package-json"];

/** @type {HTMLTextAreaElement} */
const pkgJsonInput = document.querySelector("#package-json");
/** @type {HTMLTextAreaElement} */
const result = document.querySelector("#sorted");
/** @type {HTMLInputElement} */
const sortOrderInput = document.querySelector("#sort-order");
/** @type {HTMLButtonElement} */
const button = document.querySelector("#sorter");
/** @type {HTMLDivElement} */
const errorContainer = document.querySelector("#errors");

pkgJsonInput.addEventListener("input", (event) => {
	input = event.target.value;
});

sortOrderInput.addEventListener("input", (event) => {
	sortOrder = event.target.value;
});

button.addEventListener("click", () => {
	errorContainer.innerHTML = "";

	try {
		const sortOrderArray = JSON.parse(sortOrder);

		if (!Array.isArray(sortOrderArray) || sortOrderArray.some((item) => typeof item !== "string")) {
			throw new TypeError("Sort order must be an array of string");
		}

		result.value = sortPackageJson(input, {
			sortOrder: sortOrderArray,
		});
	} catch (error) {
		errorContainer.innerHTML = `<pre>${error.name}: ${error.message}</pre>`;
	}
});
