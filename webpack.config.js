var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');

module.exports = {
  entry: './main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
    	{
	        test: /\.css$/,
	         use: ExtractTextPlugin.extract({
                use: 'css-loader'
            })
	        
    	},
    	{
	        test: /\.scss$/,
	        /*use: ExtractTextPlugin.extract({
               use: [{
                   loader: "css-loader"
               }, {
                   loader: "sass-loader"
               }],
               // use style-loader in development
               fallback: "style-loader"
            })*/
            use: ["style-loader", "css-loader", "sass-loader"]
    	}
    ]
  },
  /*plugins: [
      new ExtractTextPlugin('/styles.css')
  ]*/
}