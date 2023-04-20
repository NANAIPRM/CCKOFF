// IMPORT : Other Module
const path = require('path');
const {merge} = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// IMPORT : Our Module
const commonConfig = require('./webpack.config');

//##########################################
const devConfig = merge(commonConfig,{
    mode : 'development',

    // output: {
    //     filename: '[name].[hash].js',
    //     path: path.resolve(__dirname, 'dist'),
    //     assetModuleFilename: 'images/[hash][ext][query]'
        
    // },

    //LOADER
    module: {
        rules: [
            {
                test: /\.s?css$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            }            
        ]
    },

    //plugin
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/template/index.html',
        }),
    ],
});

module.exports = devConfig;