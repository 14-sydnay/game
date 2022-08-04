import path from 'path'
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin'
import { Configuration } from 'webpack'
import nodeExternals from 'webpack-node-externals'

import cssLoader from './loaders/css'
import fileLoader from './loaders/file'
import jsLoader from './loaders/js'

const config: Configuration = {
  mode: 'development',
  name: 'server',
  target: 'node',
  node: { __dirname: false },
  entry: path.join(path.join(__dirname, '../src'), 'server'),
  module: {
    rules: [fileLoader.server, cssLoader.server, jsLoader.server],
  },
  output: {
    filename: 'server.js',
    libraryTarget: 'commonjs2',
    path: path.join(__dirname, '../dist'),
    publicPath: '/static/',
  },
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['*', '.js', '.jsx', '.json', '.ts', '.tsx'],
    /*     plugins: [
      new TsconfigPathsPlugin({ configFile: '../server/tsconfig.json' }),
    ], */
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

  devtool: 'source-map',

  performance: {
    hints: process.env.NODE_ENV !== 'production' ? false : 'warning',
  },

  externals: [nodeExternals({ allowlist: [/\.(?!(?:tsx?|json)$).{1,5}$/i] })],

  optimization: { nodeEnv: false },
}

export default config
