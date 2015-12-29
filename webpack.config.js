var path = require('path');

module.exports = {
  entry: [
	// 'webpack/hot/dev-server',
	// 'webpack-dev-server/client?http://localhost:8080',
	path.resolve(__dirname, './app/main.js'), //应用的源相关js文件
  ],
  output: {
    path: path.resolve(__dirname, 'dist'), //webpack构建的目标js文件
    filename: 'build.js',	//
  },
  module: {
    loaders: [
    	{test:/\.css$/,loader:'style-loader!css-loader'},
    	{test: /\.scss$/,loader: 'style!css!sass?sourceMap'}, //使用less加载器处理less文件
    	{test: /\.jsx|\.js$/,loader: 'jsx-loader'}
    ]
  }
};