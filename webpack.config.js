const path = require('path')
/**
 * File responsible to configure webpack and bundle 
 * Webpack responsible to encaplute external files (css,saas,imagens) to js
 * babel loader is responsible to integrate babel to webpack
 */
module.exports = {
    entry: path.resolve(__dirname,'src','index.jsx'),
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js','.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ],
    }
};