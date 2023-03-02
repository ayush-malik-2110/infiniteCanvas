/* eslint-disable no-undef */
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
	mode: 'development',
	devServer: {
		port: 9000,
		proxy: {
			'/api/v1': {
				target: 'http://ec2-35-154-110-53.ap-south-1.compute.amazonaws.com:8080/',
				secure: false,
			},
		},
	},
	module: {
		rules: [
			{
				test: /\.(scss|css)$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
		],
	},
});
