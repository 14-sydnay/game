const fileRegex = /^(?!.*\.inline).*\.(svg|jpe?g|png|gif|eot|woff2?|ttf|mp3)$/

export default {
  client: {
    //loader: 'url-loader',
    test: fileRegex,
    type: 'asset/resource',
  },
  server: {
    test: fileRegex,
    loader: 'null-loader',
  },
}
