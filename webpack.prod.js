/* eslint-disable no-undef */
const { merge } = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const RemovePlugin = require('remove-files-webpack-plugin');

const fileNameJS = '[name].[contenthash].js';
const fileNameCSS = '[name].[contenthash].css';

module.exports = merge(common, {
	mode: 'production',
	module: {
		rules: [
			{
				test: /\.(scss|css)$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
			},
		],
	},
	output: {
		path: path.resolve(__dirname, './build'),
		filename: fileNameJS,
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: fileNameCSS,
		}),
		new CompressionPlugin({
			exclude: /\.(png|jpg|gif|jpeg|svg)$/i,
		}),
		new CopyWebpackPlugin({
			patterns: [
				{
					from: './service-worker.js',
					to: 'service-worker.js',
				},
				{
					from: './offline.html',
					to: 'offline.html',
				},
				{
					from: 'src/assets',
					to: 'assets',
				},
			],
		}),
		new RemovePlugin({
			/**
			 * Before compilation permanently removes
			 * entire `./build` folder.
			 */
			before: {
				include: ['./build'],
			},
		}),
	],
	optimization: {
		splitChunks: {
			cacheGroups: {
				defaultVendors: {
					filename: `vendor/${fileNameJS}`,
					test: /[\\/]node_modules[\\/]/,
					chunks: 'all',
				},
			},
		},
	},
});
