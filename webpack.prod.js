// IMPORT : Other Module
const path = require('path');
const {merge} = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
// IMPORT : Our Modulenpm i css-minimizer-webpack-plugin
const commonConfig = require('./webpack.config');

//##########################################
const devConfig = merge(commonConfig,{
    mode : 'production',

    output: {
        filename: '[name].[hash].min.js',  //min minify remove all code comment and white space
        path: path.resolve(__dirname, 'docs'),
        assetModuleFilename: 'images/[hash][ext][query]'
        
    },

    //LOADER
    module: {
        rules: [
            {
                test: /\.s?css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },           
        ]
    },

    //plugin
    plugins: [
        new MiniCssExtractPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/template/index.html',
        }),
    ],

    optimization: {
        minimizer: [
            new TerserPlugin(),
            new CssMinimizerPlugin(),
            new HtmlWebpackPlugin({
                template: './src/template/index.html',
                filename: 'index.min.html',
                minify: {
                    removeAttributeQuotes: true,
                    collapseWhitespace: true,
                    removeComments: true,
                },
            }),
        ],
    },
});

module.exports = devConfig;