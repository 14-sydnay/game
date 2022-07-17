import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import path from 'path'
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin'
import {
  Configuration,
  WebpackPluginInstance,
  Entry,
  EnvironmentPlugin,
} from 'webpack'

import { IS_DEV, DIST_DIR, SRC_DIR, API_ENDPOINT } from './env'
import cssLoader from './loaders/css'
import fileLoader from './loaders/file'
import jsLoader from './loaders/js'

const config: Configuration = {
  mode: 'development',
  target: 'web',
  stats: { errorDetails: true },
  entry: [
    //IS_DEV && 'react-hot-loader/patch',
    // Entry для работы HMR
    //IS_DEV && 'webpack-hot-middleware/client',
    //IS_DEV && 'css-hot-loader/hotModuleReplacement',
    path.join(SRC_DIR, 'client'),
  ].filter(Boolean) as unknown as Entry,
  module: {
    rules: [fileLoader.client, cssLoader.client, jsLoader.client],
  },
  output: {
    path: path.resolve(DIST_DIR, 'public'),
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
    new EnvironmentPlugin({
      API_ENDPOINT: API_ENDPOINT,
    }),
    new MiniCssExtractPlugin({ filename: '[name].css' }),
    // Plugin для HMR
    //new webpack.HotModuleReplacementPlugin(),
  ].filter(Boolean) as WebpackPluginInstance[],

  devtool: 'source-map',

  performance: {
    hints: IS_DEV ? false : 'warning',
  },
}

export default config
