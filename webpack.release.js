var webpack = require("webpack");
var path = require("path");

module.exports = {
  target:  "web",
  cache:   false,
  context: __dirname,
  devtool: false,
  entry:   {
    "index": "./src/index",
  },
  output:  {
    path: path.join(__dirname),
    filename: "[name].js",
    library: 'ComponentIntlWelcome',
    libraryTarget: "umd",
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ],
  module:  {
    loaders: [
      { include: /\.js$/,
        loaders: ["babel-loader?presets[]=es2015,presets[]=stage-0,presets[]=react,plugins[]=transform-runtime"],
        exclude: /node_modules/
      }
    ]
  },
  externals: [
    {
      react: {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react',
      },
    },
    {
      'react-dom': {
        root: 'ReactDOM',
        commonjs2: 'react-dom',
        commonjs: 'react-dom',
        amd: 'react-dom',
      },
    },
  ],
};