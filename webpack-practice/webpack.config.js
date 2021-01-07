const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        index: './source/index.js',
        about: './source/about.js'
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name]_bundle.js'
    },
    // mode : 'development' || 'production' || 'none'
    // description: webpack.js.org/configuration
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    // 뒤쪽에 있는 css-loader가 먼저 실행 되므로
                    // style-loader를 먼저 실행 했을 시 오류발생
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './source/index.html',
            filename: './index.html',
            chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            template: './source/about.html',
            filename: './about.html',
            chunks: ['about']
        })
    ]
}