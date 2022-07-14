module.exports = {
  mode: 'development',
  devtool: "source-map",
  target: "node",
  entry: {
    'client/app': './dist/tsc/client/app.js',
    'server/server': './dist/tsc/server/server.js',
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
