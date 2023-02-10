const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
	mode: "development",
	context: path.resolve(__dirname, "src"),
	entry: {
		main: "./index.ts"
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, "css-loader"]
			},

			// { test: /\.([cm]?ts|tsx)$/, loader: "ts-loader", exclude: /node_modules/ },

			{
				test: /\.s[ac]ss$/,
				use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
			},
			{
				test: /\.m?ts$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env", "@babel/preset-typescript"]
					}
				}
			}
		]
	},
	resolve: {
		extensions: [".ts", ".js"]
	},
	devServer: {
		port: 4200,
		hot: true
	},
	output: {
		filename: "[name].[contenthash].js",
		path: path.resolve(__dirname, "dist")
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./index.html"
		}),
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin({
			filename: "[name].[contenthash].css"
		})
	]
};
