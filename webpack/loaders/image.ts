export default {
  client: {
    test: /\.(png|jpe?g|gif)$/i,
    type: 'asset/resource',
  },
  server: {
    test: /\.(png|jpe?g|gif)$/i,
    loader: 'file-loader',
    options: {
      name: '[path][name].[ext]',
    },
  },
}
