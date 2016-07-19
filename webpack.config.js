var webpack = require('webpack')
var path = require('path')

var BUILD_DIR = path.resolve(__dirname, 'build')
var APP_DIR = path.resolve(__dirname, 'app')
var HtmlWebpackPlugin = require('html-webpack-plugin')

var config = {
  entry: APP_DIR + '/index.jsx',
  publicPath: '/continuous-learning/',
  output: {
    path: BUILD_DIR,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test : /\.jsx?/,
                include : APP_DIR,
                loader : 'babel'
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin()]
}

module.exports = config
