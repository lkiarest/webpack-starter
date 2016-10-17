var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: "./src/js/main.js",
    output: {
        publicPath: "http://127.0.0.1:3000/dist/",
        path: './dist/',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/
            },
            {
                test : /\.(less|css)$/,
                loader: ExtractTextPlugin.extract('style', 'css!less')
            }, // 用 ! 来连接多个 loader
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192'
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.json']
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html',
            inject: 'body'
        }),
        new ExtractTextPlugin("[name].css")
    ]
}