// noinspection JSUnresolvedFunction
const NodePolyfillPlugin = require ( "node-polyfill-webpack-plugin" )
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  resolve: {
    modules: ['node_modules', 'src'],
    // extensions: ['.ts', '.js', '.json'], // with error
    extensions: ['.js', '.json'], // without error
  },
  entry: {
    main: "./src/index.js",
  },
  module:{
    rules:[
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Test'
    }),
    new  NodePolyfillPlugin ( {
      excludeAliases : ["console"]
    } ),
  ],
};
