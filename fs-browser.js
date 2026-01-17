globalThis.process = {
	cwd() {
		return "/";
	},
};

export default {
	existsSync() {
		return true;
	},
};
