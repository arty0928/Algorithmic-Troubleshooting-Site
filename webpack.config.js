function createConfig(type, path) {
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
            path: __dirname + path,
            filename: 'bundle.js',
            library: {
                name: 'bundle',
                type: type,
                export: 'default'
            }
        },
        externals: { react: 'react' },
        mode: 'development' // development, production
    };
}

module.exports = [
    createConfig('umd', '/public'),
    createConfig('commonjs2', '/routes')
];