// import webpack from 'webpack';
import path from 'path';
import webpack from 'webpack'

export default {
  debug: true,
  devtool: 'source-map',
  noInfo: false,

  //applications entry point
  entry: [
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web',

  //defines where webpack should create the dev bundle
  //there will not be a physical file, webpack just creates in and serves the bundles from memory
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'src'),
  },
  plugins: [
    //Eliminate duplicate packages when generating bundle
    new webpack.optimize.DedupePlugin(),


    //minify JS
    new webpack.optimize.UglifyJsPlugin()
  ],

  //tells webpack the file types(loaders) that we want it to handle
  //webpack can handle many more types of loaders than this
  module: {
    loaders:[
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.css$/, loaders: ['style', 'css']}
    ]
  }
}
