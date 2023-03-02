/* eslint-disable no-undef */
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	mode: process.env.NODE_ENV,
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader',
					},
				],
			},
			{
				test: /\.(png|jpg|gif|jpeg|svg)$/i,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: false,
						},
					},
				],
			},
			{
				test: /\.m?js/,
				resolve: {
					fullySpecified: false,
				},
			},
		],
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: './src/index.html',
			filename: './index.html',
			minify: {
				collapseWhitespace: true,
			},
		}),
	],
	resolve: {
		extensions: ['.js', '.json', '.jsx', '.css', '.scss'],
		modules: [path.resolve(__dirname, './'), 'node_modules'],
	},
};
