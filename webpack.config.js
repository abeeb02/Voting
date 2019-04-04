module.exports = {
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			}
		]
	},
	resolve: {
		extensions: ['*', '.js', '.jsx']
	},
	context: __dirname + "/src",
	entry: "./App.js",
	
	output: {
	  filename: "app.js",
	  path: __dirname + "/dist",
	}
}