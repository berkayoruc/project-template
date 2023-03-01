const path = require('path');

let config = {
	mode: '',
	entry: './src/debug/index.js',

	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: [
					// Creates `style` nodes from JS strings
					'style-loader',
					// Translates CSS into CommonJS
					'css-loader',
					// Compiles Sass to CSS
					'sass-loader',
				],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
			},
		],
	},
};

const build = {
	filename: 'build.js',
	path: path.resolve(__dirname, 'build'),
};

const distribute = {
	filename: 'ffwdme-debug.js',
	path: path.resolve(__dirname, 'dist'),
};

const devServer = {
	static: {
		directory: path.resolve(__dirname, 'static'),
	},
	port: 3000,
	open: {
		target: ['demo.html'],
	},
	hot: true,
	compress: true,
	historyApiFallback: true,
	https: true,
};

module.exports = (env, argv) => {
	if (argv.mode === 'development') {
		config.output = build;
		config.devServer = devServer;
	} else {
		config.output = distribute;
	}

	return config;
};
