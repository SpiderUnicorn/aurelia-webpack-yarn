import * as path from 'path';

import { Configuration } from "@types/webpack";
import { AureliaPlugin } from 'aurelia-webpack-plugin';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';

const config: Configuration = {
    entry: {
        // aurelia webpack plugin takes care of setting the entry point to the src/app
        main: 'aurelia-bootstrapper'
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        publicPath: "/",
        filename: "[name].js",    
        chunkFilename: "[name].js"
    },

    resolve: {
        extensions: ['.js', '.ts'],
        // required to have aurelia find required components in the app (src) folder
        modules: [ path.resolve('src'), 'node_modules'],
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: ['babel-loader', 'awesome-typescript-loader']
            },
            {
                test: /\html$/i,
                use: 'html-loader'
            }
        ]
    },
    plugins: [
        new AureliaPlugin(),
        // have Webpack copy over the index.html and inject appropriate script tag for Webpack-bundled entry point "main.js""
        new HtmlWebpackPlugin({
            template: '!html-webpack-plugin/lib/loader!index.html',
            filename: 'index.html'
        })
    ]
}

module.exports = config;