const webpack = require('webpack');

module.exports = {
	entry: './src/App.js',
	output: {
		// path: __dirname + '../dist',
		path: __dirname + '/dist/bundle.js',
		publicPath: '/',
		filename: 'bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.jpg$/,
				use: ['file-loader',
					{
						loader: 'image-webpack-loader',
					}],
			},
		],
	},
	resolve: {
		extensions: ['*', '.js', '.jsx', '.css'],
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
	],
	devServer: {
		contentBase: './webpack/dist',
		hot: true,
	},
};