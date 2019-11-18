const path = require('path');

module.exports = {
    mode: 'none',
    entry: './src/assets/js/main.js',
    output: {
        filename: 'mainstore.js'
    },
    optimization: {
        namedModules: false,
        namedChunks: false,
        concatenateModules: true,
        minimize: false
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.js?$/,
                include: [path.resolve(__dirname, './src/assets/js')],
                loader: 'babel-loader',
                options: {
                    babelrc: false,
                    presets: ['@babel/preset-env']
                }
            }
        ]
    },
    externals: {
        // require("jquery") is external and available
        //  on the global var jQuery
        jquery: 'jQuery'
    }
};
