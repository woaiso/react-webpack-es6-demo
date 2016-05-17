'use strict';
/*jshint esversion:6*/
/*jshint node:true*/

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');
const pkg = require('./package.json');
const packageName = pkg.name;

const TARGET = process.env.npm_lifecycle_event; // 当前执行的命令
const DEV_PORT = 8080; //端口
const devOrigin = `http://localhost:${DEV_PORT}/`;
const isProduction = TARGET === 'build' ? true : false; // 当前是否发布产品
const PublicPath = isProduction ? 'http://webpack.jumei.com/' : devOrigin;

const jsFileName = isProduction ? '[name]-[hash].js' : '[name].js';
const cssFileName = isProduction ? '[name]-[hash].css' : '[name].css';
const commonName = isProduction ? 'common-[hash].js' : 'common.js';

const PATHS = { //定义当前目录
    app: path.join(process.cwd(), 'src'),
    build: path.join(process.cwd(), 'build'),
    node_modules: path.join(process.cwd(), 'node_modules')
};

/**定义模块加载器**/
let cssLoaders = [
    'css-loader?modules&localIdentName=[path][name]__[local]__[hash:base64:5]',
    'autoprefixer-loader?browsers=last 2 versions',
];
if (isProduction) { //如果是发布产品，将CSS Name进行压缩
    cssLoaders = [
        'css-loader?modules&localIdentName=[hash:base64:5]',
        'autoprefixer-loader?browsers=last 2 versions',
    ];
}

/*如果不是发布产品，则移除style-loader*/
if (!isProduction) {
    cssLoaders.unshift('style-loader');
}
/***定义使用的插件****/
const plugins = [
    new HtmlWebpackPlugin({
        title: 'webpack demo',
        template: process.cwd() + '/index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
        __ENV__: JSON.stringify(process.env.NODE_ENV || 'development'),
    })
];
/*如果发布产品则需要增加压缩功能*/
if (isProduction) {
    plugins.push(new CleanPlugin([PATHS.build])); //清空目录
    plugins.push(new ExtractTextPlugin(cssFileName, {
        disable: false,
        allChunks: true,
    }));
    plugins.push(new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        },
        sourceMap: false
    }));
    plugins.push(new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: '"production"'
        }
    }));
    plugins.push(new webpack.optimize.DedupePlugin());

}

//开始配置

const config = {
    devtool: (isProduction ? null : 'cheap-module-source-map'), //选择调试使用的方式，>https://webpack.github.io/docs/configuration.html
    context: PATHS.app, //当前代码的路径，通常使用entry的目录
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        stats: 'errors-only',
        host: process.env.HOST,
        port: DEV_PORT
    }
};
//配置主入口
config.entry = {
    app: PATHS.app
};
config.resolve = {
    extensions: ['', '.js', '.jsx','css','scss','less'],
    alias: {
        'app': PATHS.app,
        'antd':path.join(PATHS.node_modules,'antd/dist/antd.min.js'),
        'antd-style':path.join(PATHS.node_modules,'antd/dist/antd.min.css'),
    }
};
//设置输出
config.output = {
    filename: jsFileName,
    path: PATHS.build,
    publicPath: PublicPath
};

config.module = {
    loaders: [
        {
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel',
            query: {
                presets: ['react', 'es2015'],
                plugins: ["transform-class-properties"]
            }
        },
        {test: /\.(png|jpg|svg|woff|woff2)?(\?v=\d+.\d+.\d+)?$/, loader: 'url-loader?limit=8192'},
        {test: /\.(eot|ttf)$/, loader: 'file-loader'}, 
        {
            test: /\.less$/,
            loader: "style!css!less"
        }
    ]
};

if (isProduction) {
    config.module.loaders.push({
        test: /\.css$/,
        include: path.resolve(__dirname, PATHS.node_modules),
        loader: 'style!css?sourceMap=true'
    });
    config.module.loaders.push({
        test: /\.css$/,
        exclude: path.resolve(__dirname, PATHS.node_modules),
        loader: ExtractTextPlugin.extract('style-loader', cssLoaders.join('!'))
    });

} else {
    config.module.loaders.push({
        test: /\.css$/,
        include: path.resolve(__dirname, PATHS.node_modules),
        loader: 'style!css?sourceMap=true'
    });
    config.module.loaders.push({
        test: /\.css$/,
        exclude: path.resolve(__dirname, PATHS.node_modules),
        loader: cssLoaders.join('!')
    });
}

config.plugins = plugins;

module.exports = config;