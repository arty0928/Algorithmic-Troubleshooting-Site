module.exports = {
    entry: './components/index.js',
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-react']
            }
        }]
    },
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js',
        libraryTarget: 'umd',
        libraryExport: 'default'
    },
    mode: 'production' // development, production
}