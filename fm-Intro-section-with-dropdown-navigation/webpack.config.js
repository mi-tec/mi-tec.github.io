const path = require("path");

module.exports = {
	mode: "development",
	entry: {
		app: "./src/js/App.js",
	},
	output: {
		path: path.resolve(__dirname, "js"),
		filename: "App.js",
	},
	module: {
		rules: [
			{
				test: /\.(js)$/,
				exclude: /(node_modules)/,
				use: [
					{
						loader: "babel-loader",
						options: {
							presets: ["@babel/preset-env"],
						},
					},
				],
			},
		],
	},
	devtool: "source-map",
};
