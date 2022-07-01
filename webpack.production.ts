import {
  Configuration as WebpackConfig,
  optimize as WebpackOptimize,
} from 'webpack'
import { merge } from 'webpack-merge'
import baseConfig from './webpack.config'
import { InjectManifest } from 'workbox-webpack-plugin'

const { ModuleConcatenationPlugin } = WebpackOptimize
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin'

const config: WebpackConfig = merge(baseConfig, {
  mode: 'production',
  devtool: 'hidden-source-map',
  plugins: [
    new ModuleConcatenationPlugin(),
    new InjectManifest({
      swSrc: './src/service-worker/src-sw.js',
      swDest: '/sw.js',
      maximumFileSizeToCacheInBytes: 10000000,
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      '...', // This adds default minimizers to webpack. For JS/TS, Terser is used. // https://webpack.js.org/configuration/optimization/#optimizationminimizer
      new CssMinimizerPlugin(),
    ],
    usedExports: true,
    splitChunks: {
      minSize: 0,
    },
    concatenateModules: true,
  },
})

export default config
