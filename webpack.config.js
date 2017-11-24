var path=require('path');
var webpack=require('webpack');
module.exports={
	entry:"./src/menu-chefs.js",
	output:{
		path:path.join(__dirname,'public'),
		filename:'bundle.js'
	},
	module:{
		loaders:[{
			test:/.jsx?$/,
			loader:'babel-loader',
			exclude :/node_modules/,
			query:{
				presets:['es2015','react']
			}
		},{ test: /\.css$/, loader: "style-loader!css-loader" }]
	}
}