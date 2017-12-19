const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const entry = {
  vendor: ['react', 'react-dom', 'react-redux', 'redux', 'redux-thunk', 'prop-types'],
  index: path.join(__dirname, 'public/js/pages/index.js')
};

const plugins = [
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    filename: 'js/common.min.js'
  }),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
  }),
  new ExtractTextPlugin({
    filename: 'css/[name].min.css',
    allChunks: true
  })
];

module.exports = {
  entry,
  output: {
    filename: 'js/[name].min.js',
    path: path.join(__dirname, 'assets'),
    publicPath: '//localhost:3300/assets',
    chunkFilename: 'js/[name].min.js'
  },
  module: {
    rules: [
      { test: /\.css$/, use: ['css-loader', 'style-loader'] },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: [
            require.resolve('babel-preset-es2015'),
            require.resolve('babel-preset-stage-0'),
            require.resolve('babel-preset-react')
          ]
        },
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: ['file-loader', 'image-webpack-loader', {
          loader: 'url-loader',
          options: {
            limit: 10240,
            name: 'images/[name].[ext]'
          }
        }]
      }
    ]
  },
  devServer: {
    port: 3300,
    disableHostCheck: true,
    hot: false,
    inline: false,
    host: '0.0.0.0',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
    }
  },
  plugins,
  resolve: {
    alias: {
      images: path.resolve(__dirname, 'public/image'),
      scss: path.resolve(__dirname, 'public/scss'),
      components: path.resolve(__dirname, 'public/js/components'),
      containers: path.resolve(__dirname, 'public/js/containers'),
      constants: path.resolve(__dirname, 'public/js/constants'),
      lib: path.resolve(__dirname, 'public/js/lib'),
      store: path.resolve(__dirname, 'public/js/store'),
      router: path.resolve(__dirname, 'public/js/router')
    }
  }
};
