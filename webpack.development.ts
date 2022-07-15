import path from 'path'
import { Configuration as WebpackConfig } from 'webpack'
import 'webpack-dev-server'
import { merge } from 'webpack-merge'
import baseConfig from './webpack.config'

const config: WebpackConfig = merge(baseConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    port: 3000,
    hot: true,
    open: false,
    compress: true,
    historyApiFallback: true,
  },
})

export default config
