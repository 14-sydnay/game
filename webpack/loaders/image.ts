export default {
  client: {
    test: /\.(png|jpe?g|gif|mp3)$/i,
    type: 'asset/resource',
  },
  server: {
    test: /\.(png|jpe?g|gif|mp3)$/i,
    loader: 'file-loader',
    options: {
      name: '[path][name].[ext]',
    },
  },
}
