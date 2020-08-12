const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        main: ['./src/client/jsx/index.jsx', './src/client/sass/index.scss'],
    },
    output: {
        path: path.resolve('./src/client', 'build'),
        filename: '[name].bundle.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/client/template.html',
            //hash: true
        }),
        new MiniCSSExtractPlugin(
            {
                filename: '[name].bundle.css'
            }
        )
    ],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-react']
                    }
                },
            },
            {
                test: /\.s?css$/,
                loader: [
                    MiniCSSExtractPlugin.loader,
                    "css-loader",
                    'sass-loader'
                ]
            }
        ]
    }
}; 