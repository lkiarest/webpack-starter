var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: [
        'webpack-dev-server/client?http://0.0.0.0:3000',//资源服务器地址
        'webpack/hot/only-dev-server',
        "./src/js/main.js"
    ],
    output: {
        publicPath: "http://127.0.0.1:3000/",
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
            },
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
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html',
            inject: 'body'
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"development"'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin("[name].css")
    ]
}