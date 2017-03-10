var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        app: './app/app.js'
    },

    output: {
        path: path.resolve(__dirname, 'build'),
        // publicPath: '/assets/',
        filename: 'bundle.js'
    },

    module: {
        loaders: [
            {
                test: /\.html?$/,
                loader: 'html',
                exclude: /node_modules/
            },
            {
                test: /\.scss?$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader'],
                exclude: /node_modules/
            }
            // {
            //     test: /.js?$/,
            //     loader: 'bundle-loader',
            //     exclude: /node_modules/,
            // },
            // {
            //     test: /\.less$/,
            //     exclude: /node_modules/,
            //     loader: 'style!css!autoprefixer!less'
            // }

        ]
    },

    plugins: [
        new webpack.ProvidePlugin({
            Backbone: 'backbone',
            _: 'underscore',
            $: 'jquery'
        })
    ],

    devServer: {
        // hot: true,
        inline: true,
        contentBase: 'build',

    },

    devtool: 'source-map',

    debug: true
};
