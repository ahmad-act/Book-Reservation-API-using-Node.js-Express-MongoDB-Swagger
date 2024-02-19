const path = require('path');
const nodeExternals = require('webpack-node-externals'); // Import nodeExternals

module.exports = {
    mode: 'development', // Set mode to development
    target: 'node', // Set target to node.js environment

    entry: './src/index.js', // Entry point of your application

    output: {
        path: path.resolve(__dirname, 'dev-build'), // Output directory
        filename: 'main.js', // Output filename
    },

    // Development-specific configurations
    devtool: 'source-map', // Generate source maps for easier debugging

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
                    },
                },
            },
        ],
    },

    // Other configurations...

    // Specify which files Webpack should not bundle (as they are already transpiled by Babel)
    externalsPresets: { node: true }, // Do not bundle node_modules
    externals: [nodeExternals()], // Do not bundle node_modules
};