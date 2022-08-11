function createConfig(type, path, entry) {
    return {
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
            library: {
                name: 'bundle',
                type: 'umd',
                export: 'default'
            }
        },
        mode: 'development' // development, production
    };
}

module.exports = [
    createConfig()
];