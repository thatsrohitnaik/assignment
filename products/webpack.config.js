const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const DEV_PORT = 8081;

module.exports = {
	mode: "development",
	module: {
		rules: [
			{
				test: /\.js$|jsx/, // what files to target
				exclude: /node_modules/, // what to exclude from processing
				use: {
					loader: "babel-loader", // what loader to use
					options: {
						presets: ["@babel/preset-react", "@babel/preset-env"], // [0] - tells Babel how to process .jsx files, [1] - tells Babel how to process ES2015(16,17,18,19,20)
						plugins: ["@babel/plugin-transform-runtime"], // adds polyfills for JS
					},
				},
			},
			{
				test: /\.tsx?$/, // what files to target
				use:"ts-loader",
				exclude: /node_modules/, // what to exclude from processing
			},
			{
				test: /\.css$/i,
				use:['style-loader', 'css-loader']
			}
			
		],
	},
	output: {
		publicPath: `http://localhost:${DEV_PORT}/`,
	},
	devServer: {
		port: DEV_PORT,
		historyApiFallback: true,
	},
	resolve:{
		extensions:['.tsx', '.ts', '.js'],
		aliasFields:["browser"]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./public/index.html",
		}),
	],
};
