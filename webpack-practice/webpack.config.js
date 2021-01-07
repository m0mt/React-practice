const path = require('path');
module.exports = {
    entry: './source/index.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'index_bundle.js'
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
    }
}