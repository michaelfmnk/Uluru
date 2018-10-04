const path = require('path');

module.exports = [
    {
        test: /\.svg/,
        loader: 'url-loader',
        query: {
            limit: 26000,
            mimetype: 'image/svg+xml',
        },
    },
    {
        test: /\.(woff|woff2|ttf|eot)/,
        loader: 'url-loader',
        query: {
            limit: 1,
        },
    },
    {
        test: /\.js$/,
        exclude: [/node_modules/, /src\/*\/__tests__/],
        include: path.resolve('./../'),
        use: {
            loader: 'babel-loader',
        },
    },
    // {
    //     test: /\.js$/,
    //     loader: 'eslint-loader',
    //     exclude: [/node_modules/, /src\/thirdparty/, /src\/*\/__tests__/],
    //     include: path.resolve('./../'),
    // },
    {
        test: /\.json$/,
        loader: 'json-loader',
    },
    {
        test: /\.png$/,
        exclude: /node_modules/,
        use: { loader: 'url-loader', options: { limit: 100000 } },
    },
    {
        test: /\.jpg$/,
        exclude: /node_modules/,
        loader: 'file-loader',
    },
];
