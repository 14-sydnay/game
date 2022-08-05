import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import Dotenv from 'dotenv-webpack'
import path from 'path'
import { Configuration, WebpackPluginInstance, Entry } from 'webpack'

import cssLoader from './loaders/css'
import fileLoader from './loaders/file'
import jsLoader from './loaders/js'

const config: Configuration = {
  mode: 'development',
  target: 'web',
  stats: { errorDetails: true },
  entry: [
    //process.env.NODE_ENV !== 'production' && 'react-hot-loader/patch',
    // Entry для работы HMR
    //process.env.NODE_ENV !== 'production' && 'webpack-hot-middleware/client',
    //process.env.NODE_ENV !== 'production' && 'css-hot-loader/hotModuleReplacement',
    path.join(path.join(__dirname, '../src'), 'client'),
  ].filter(Boolean) as unknown as Entry,
  module: {
    rules: [fileLoader.client, cssLoader.client, jsLoader.client],
  },
  output: {
    path: path.resolve(path.join(__dirname, '../dist'), 'public'),
    filename: '[name].js',
    publicPath: '/',
  },
  resolve: {
    modules: ['src', 'node_modules'],
    //alias: { 'react-dom': '@hot-loader/react-dom' },
    extensions: ['*', '.js', '.jsx', '.json', '.ts', '.tsx'],
    plugins: [
      //new TsconfigPathsPlugin({ configFile: '../src/client/tsconfig.json' }),
    ],
    alias: {
      src: path.resolve(__dirname, '../src'),
      images: path.resolve(__dirname, '../src/assets/images'),
      components: path.resolve(__dirname, '../src/components'),
      pages: path.resolve(__dirname, '../src/pages'),
      assets: path.resolve(__dirname, '../src/assets'),
      modules: path.resolve(__dirname, '../src/modules'),
      models: path.resolve(__dirname, '../src/models'),
      api: path.resolve(__dirname, '../src/api'),
      services: path.resolve(__dirname, '../src/services'),
      hooks: path.resolve(__dirname, '../src/hooks'),
      utils: path.resolve(__dirname, '../src/utils'),
      types: path.resolve(__dirname, '../types'),
    },
  },
  plugins: [
    new Dotenv({
      path: path.resolve(__dirname, '../.env.dev'),
    }),
    new MiniCssExtractPlugin({ filename: '[name].css' }),
    // Plugin для HMR
    //new webpack.HotModuleReplacementPlugin(),
  ].filter(Boolean) as WebpackPluginInstance[],

  devtool: 'source-map',

  performance: {
    hints: process.env.NODE_ENV !== 'production' ? false : 'warning',
  },
}

export default config
