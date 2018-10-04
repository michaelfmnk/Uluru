/* eslint-disable import/no-commonjs */
/* eslint-disable import/no-nodejs-modules */
/* eslint-disable quote-props */

// const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const StyleLintPlugin = require('stylelint-webpack-plugin');

const webpack = require('webpack');
const path = require('path');
const commonLoaders = require('./commonLoaders');
const commonPlugins = require('./commonPlugins');

module.exports = {
    devtool: 'eval-source-map',
    entry: [
        'react-hot-loader',
        './src/index.js',
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: 'bundle.js',
    },
    resolve: {
        modules: [path.resolve(__dirname, './src'), 'node_modules'],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        ...commonPlugins,
        new webpack.DefinePlugin({
            '__DEVTOOLS__': true,
            'process.env': {
                NODE_ENV: JSON.stringify('development'),
            },
        }),
    ],
    devServer: {
        historyApiFallback: true,
        proxy: {
            '/api': {
                target: 'http://localhost:4000',
                changeOrigin: true,
                cookieDomainRewrite: '',
            },
        },
    },
    module: {
        rules: [
            ...commonLoaders,
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader',
            },
            {
                test: /main\.less$/,
                loader: 'style-loader!css-loader!less-loader',
            },
        ],
    },
};
