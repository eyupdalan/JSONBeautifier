var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'source-map',
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
                test: /\.(eot|svg|ttf|woff|woff2|png)$/,
                loader: 'file-loader'
            }
        ]
    },
    output: {
        filename: './dist/bundle.js'
    }
    ,
    entry: [
        './src/index'
    ],
    plugins: [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        })
    ],
};