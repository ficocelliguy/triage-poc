const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
    app: path.join(__dirname, 'app'),
    build: path.join(__dirname, 'build')
};

module.exports = {
    entry: {
        app: PATHS.app
    },
    output: {
        path: PATHS.build,
        filename: '[name].js',
        devtoolModuleFilenameTemplate: 'webpack:///C:/work/triage/app',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Triage App',
            template: 'app/index.html.ejs'
        })
    ],
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.(js|jsx|html)$/,
                include: [PATHS.app],
                loader: 'babel-loader',
                options: {
                    presets: [
                        'env',
                        'react'
                    ]
                }
            }

        ]
    }
};