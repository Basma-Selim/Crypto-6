const path = require('path');

module.exports = {
	entry: './client/src/App.jsx',
	output: {
		path: path.join(__dirname, './client/dist'),
		filename: 'bundle.js',
	},
	module: {
		rules: [
			{
				loader: 'babel-loader',
				test: /\.jsx$/,
				exclude: /node_modules/,
			},
		],
	},
};
