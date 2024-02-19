const path = require('path');
const nodeExternals = require('webpack-node-externals'); 
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
    // Set mode to 'production' to enable production mode optimizations
    mode: 'production',
    
    // Set target to 'node' to build the bundle for a Node.js environment
    target: 'node',
    
    // Entry point of your application
    entry: './src/index.js',
    
    // Output configuration
    output: {
        path: path.resolve(__dirname, 'prod-build'), // Output directory
        filename: 'main.js', // Output filename
    },
    
    // Optimization settings for minimizing JavaScript and CSS
    optimization: {
        minimizer: [
            new TerserPlugin(), // Minimize JavaScript
            new CssMinimizerPlugin(), // Minimize CSS
        ],
    },
    
    // Define modules and rules for processing files
    module: {
        rules: [
            {
                test: /\.js$/, // Apply rule to all .js files
                exclude: /node_modules/, // Exclude node_modules directory
                use: {
                    loader: 'babel-loader', // Use babel-loader for transpiling
                    options: {
                        presets: ['@babel/preset-env'], // Use @babel/preset-env for converting ES6+ syntax
                        plugins: ['transform-remove-console'], // Use the correct name of the Babel plugin
                    },
                },
            },
            {
                test: /\.css$/, // Apply rule to all .css files
                use: [MiniCssExtractPlugin.loader, 'css-loader'], // Extract CSS into separate files
            },
        ],
    },
    
    // Define plugins for Webpack
    plugins: [
        new CleanWebpackPlugin(), // Clear output directory before each build
        new MiniCssExtractPlugin({ // Extract CSS into separate files
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
    ],

    // Specify which files Webpack should not bundle (as they are already transpiled by Babel)
    externalsPresets: { node: true }, // Do not bundle node_modules
    externals: [nodeExternals()], // Do not bundle node_modules
};
