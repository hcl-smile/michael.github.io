const path = require('path')
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')
const miniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode: 'development',

    entry: './src/index.js',

    output: {
        path: path.resolve(__dirname,'../dist'),
        filename: 'js/[name].js'
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
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'img'
                        }
                    }
                ]
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
            filename: 'index.html',
            template: path.resolve(__dirname, '../src/index.html')
        })
    ]

}