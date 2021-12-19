const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = (env) => {
	const dev = {
		mode: 'development',
		devtool: 'inline-source-map',
		devServer: {
			contentBase: './dist'
		}
	};

	return merge(common(env), dev);
};