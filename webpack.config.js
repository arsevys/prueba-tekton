var path=require('path');
var webpack=require('webpack');
module.exports={
	entry:"./src/menu-cajero.js",
	output:{
		path:path.join(__dirname,'public'),
		filename:'bundle-cajero.js'
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