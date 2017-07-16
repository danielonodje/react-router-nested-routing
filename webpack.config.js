const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: './index.jsx',
    output: './bundle.js',
    devServer: {
        contentBase: path.resolve('./')
    },
    module:{
        loaders: [
            { test: /\.js?/, loaders: ['babel-loader'], exclude: path.join(__dirname,'node_modules') }
        ]
    }
}