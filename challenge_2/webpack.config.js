module.exports = {
  entry: "./client/index.jsx",
  output: {
    filename: "bundle.js",
    path: __dirname + "/public/"
  },
  module: {
    rules: [
      {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
      {test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/}
    ]
  },
  devtool: "source-map",
  mode: "development"
}
