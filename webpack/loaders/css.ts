import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export default {
  client: {
    test: /\.(sa|s?c)ss$/i,
    use: [
      MiniCssExtractPlugin.loader,
      'css-loader',
      'postcss-loader',
      'sass-loader',
    ],
  },
  server: {
    test: /\.css$/,
    loader: 'null-loader',
  },
}
