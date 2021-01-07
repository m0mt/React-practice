const path = require('path');
module.exports = {
    entry: './source/index.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'index_bundle.js'
    },
    // mode : 'development' || 'production' || 'none'
    // description: webpack.js.org/configuration
    mode: 'development'
}