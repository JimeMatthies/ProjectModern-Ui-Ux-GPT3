const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                use: {
                    loader: 'url-loader'
                }
            },
            {
                test: /\.(css|scss)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    devServer: {
        allowedHosts: 'all',
        historyApiFallback: { index: "/", disableDotRule: true },
        compress: true,
        port: 3000,
        open: true,
        hot: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './public/index.html'),
            filename: 'index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css'
        }),
        new CleanWebpackPlugin()
    ]
}
