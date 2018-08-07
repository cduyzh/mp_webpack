const webpack = require('webpack')
const merge = require('webpack-merge')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const utils = require('./utils')
const config = require('../config')
const baseWebpackConfig = require('./webpack.base.conf')

// copy from ./webpack.prod.conf.js
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = merge(baseWebpackConfig, {
    module: {
        rules: utils.styleLoaders({
            sourceMap: config.dev.cssSourceMap,
            extract: true
        })
    },
    // cheap-module-eval-source-map is faster for development
    // devtool: '#cheap-module-eval-source-map',
    devtool: '#source-map',
    output: {
        path: config.build.assetsRoot,
        // filename: utils.assetsPath('[name].[chunkhash].js'),
        // chunkFilename: utils.assetsPath('[id].[chunkhash].js')
        filename: utils.assetsPath('[name].js'),
        chunkFilename: utils.assetsPath('[id].js')
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': config.dev.env
        }),
        // copy from ./webpack.prod.conf.js
        // extract css into its own file
        new ExtractTextPlugin({
            // filename: utils.assetsPath('[name].[contenthash].css')
            filename: utils.assetsPath('[name].wxss')
        }),
        // Compress extracted CSS. We are using this plugin so that possible
        // duplicated CSS from different components can be deduped.
        new OptimizeCSSPlugin({
            cssProcessorOptions: {
                safe: true
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common/vendor',
            minChunks: function(module, count) {
                // any required modules inside node_modules are extracted to vendor
                return (
                    module.resource &&
                    /\.js$/.test(module.resource) &&
                    module.resource.indexOf('node_modules') >= 0
                ) || count > 1
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common/manifest',
            chunks: ['common/vendor']
        }),

        // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
        // new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new FriendlyErrorsPlugin()
    ]
})