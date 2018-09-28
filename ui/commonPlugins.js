const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = [
    new webpack.ProvidePlugin({
        React: 'react',
    }),
    new HtmlWebpackPlugin({
        template: './src/index.html',
        title: 'Aldring UI',
        inject: 'body',
    }),
    new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /en-gb/),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
];