import path from 'path'
import { Configuration as WebpackConfig, WebpackPluginInstance } from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import CspHtmlWebpackPlugin from 'csp-html-webpack-plugin'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import StatoscopeWebpackPlugin from '@statoscope/webpack-plugin'

const isDevMode = process.env.NODE_ENV !== 'production'

const config: WebpackConfig = {
  target: 'web',
  context: __dirname,
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[contenthash].js',
    clean: true,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    symlinks: false,
    alias: {
      Images: path.resolve(__dirname, 'src/assets/images'),
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(sa|s?c)ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.(eot|woff2?|ttf|svg|png|jpe?g|gifv?|webp)$/i,
        type: 'asset',
        generator: {
          filename: 'static/[hash][ext][query]',
        },
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(__dirname, 'src/index.html'),
      hash: true,
      minify: isDevMode
        ? undefined
        : {
            removeComments: true,
            collapseWhitespace: true,
            removeRedundantAttributes: true,
            useShortDoctype: true,
            removeEmptyAttributes: true,
            removeStyleLinkTypeAttributes: true,
            keepClosingSlash: true,
            minifyJS: true,
            minifyCSS: true,
            minifyURLs: true,
          },
    }),
    new CspHtmlWebpackPlugin(
      {
        'script-src': ["'self'"],
        'style-src': ["'self'"],
      },
      {
        hashingMethod: 'sha512',
        hashEnabled: {
          'style-src': isDevMode,
        },
      }
    ),
    new MiniCssExtractPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, './src/assets/images/favicons'),
          to: 'favicons',
        },
      ],
    }),
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        mode: 'write-references',
        diagnosticOptions: {
          semantic: isDevMode,
          syntactic: true,
        },
      },
      eslint: {
        files: './src/**/*.{ts,tsx,js,jsx}',
      },
      issue: {
        include: {
          file: './src/**/*',
        },
        exclude: [
          {
            origin: 'eslint',
            severity: 'warning', // don't report eslint warnings.
          },
          {
            origin: 'eslint',
            file: '**/__tests__/**/*', // exclude eslint issues from jest test files.
          },
          {
            file: './*.ts', // exclude config files.
          },
        ],
      },
    }),
    new StatoscopeWebpackPlugin(),
  ] as WebpackPluginInstance[],
}

export default config
