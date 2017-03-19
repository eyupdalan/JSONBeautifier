var path = require('path');
var webpack = require('webpack');

module.exports = {
    module: {
        loaders: [
            {
                loader: "babel-loader",
                include: [
                    path.resolve(__dirname, "src")
                ],
                test: /\.jsx?$/,
                query: {
                    plugins: ['transform-runtime'],
                    presets: ['es2015', 'react']
                }
            },
            {
                loaders: ['style-loader', 'css-loader', 'sass-loader'],
                test: /\.css$|\.scss$/
            },
            {
                test: /\.svg$/, loader: 'svg-loader?pngScale=2'
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file-loader'
            }
        ]
    },
    output: {
        filename: './dist/bundle.js'
    }
    ,
    entry: [
        'webpack-hot-middleware/client?reload=true', //note that it reloads the page if hot module reloading fails.
        './src/index'
    ],
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ],
};