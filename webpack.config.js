module.exports = {
  mode: 'development',
  devtool: "source-map",
  target: "node",
  // loader: 'string-replace-loader',
  // options: {
  //   search: '(require)',
  //   replace: '(__non_webpack_require__)'
  // },
  // plugins: [
  //   new webpack.LoaderOptionsPlugin({
  //     test: /mongodb\/lib\/core\/((connection\/)?utils|index)\.js$/,
  //     options: {
  //       search: '(require)',
  //       replace: '(__non_webpack_require__)'
  //     }
  //   })
  // ],
  entry: {
    'client/app': './dist/tsc/client/app.js',
    // 'server/database': './dist/tsc/server/database.js',
  },
  output: {
    path: __dirname,
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: "pre",
        use: ["source-map-loader"],
      },
    ],
  }
}
