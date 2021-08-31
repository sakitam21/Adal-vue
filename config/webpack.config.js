const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

console.log(path.resolve(__dirname, '..', 'dist'))

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, '..', 'src/main.js'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '..', 'dist')
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, '..', 'src')
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: [
                    { loader: 'vue-loader' }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, '..', 'public/index.html')
        }),
        new VueLoaderPlugin()
    ],
    devServer: {
        static: {
            directory: path.resolve(__dirname, '..', 'dist')
        },
        compress: true,
        port: 8080
    }
}