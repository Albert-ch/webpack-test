const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports= {
    entry: {
        a: './src/js/a.js',
        b: './src/js/b.js',
        c: './src/js/c.js',
    },
    output: {
        path: __dirname+'/dist/',
        filename: 'js/[name]-[chunkhash].js',
    },
    plugins:[
        new htmlWebpackPlugin({
            template: './index.html',
            filename: 'a.html',
            chunks:['a']
        }),
        new htmlWebpackPlugin({
            template: './index.html',
            filename: 'b.html',
            chunks:['b']
        }),
        new htmlWebpackPlugin({
            template: './index.html',
            filename: 'c.html',
            chunks:['c']
        })
    ]
}