const path = require('path')
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')
const miniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode: 'development',

    entry: './src/index.js',

    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'js/[name].js'
    },

    devtool: 'eval-source-map',

    devServer: {
        contentBase: path.resolve(__dirname,'./dist'),
        historyApiFallback: true,
        proxy: {
            '/data': {
                target: 'http://www.weather.com.cn/',
                changeOrigin: true
            }

        }
    },

    module: {
        rules: [
            {
                test: /.js$/,
                use: 'babel-loader'
            },
            {
                test: /.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            dent: 'postcss',
                            plugins: [
                                require('postcss-cssnext')(),
                                require('cssnano')()
                            ]
                        }
                    },
                    'less-loader'
                ]
            },
            {
                test: /.[png|jpg]$/,
                use: 'file-loader'
            }
        ]
    },

    resolve: {
        alias: {
            '@layout': path.resolve(__dirname,'../src/components/layout'),
            '@components': path.resolve(__dirname,'../src/components'),
            '@reducers': path.resolve(__dirname,'../src/reducers'),
            '@router': path.resolve(__dirname,'../src/router'),
            '@pages': path.resolve(__dirname,'../src/pages'),
            '@store': path.resolve(__dirname,'../src/store'),
            '@assets': path.resolve(__dirname,'../src/assets'),
        }
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new htmlWebpackPlugin({
            filename: path.resolve(__dirname, 'dist/index.html'),
            template: path.resolve(__dirname, '../src/index.html')
        })
    ]
}