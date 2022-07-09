const path = require("path");

module.exports = {
	mode: "production",
	entry: {
		main: path.resolve(__dirname, "src/main.js"),
	},
	watch: true,
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[name].js",
	},
};
