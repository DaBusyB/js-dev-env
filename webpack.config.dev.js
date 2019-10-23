// import webpack from 'webpack';
import path from 'path';

export default {
  debug: true,
  devtool: 'inline-source-map',
  noInfo: false,

  //applications entry point
  entry: [
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web',

  //defines where webpack should create the dev bundle
  //there will not be a physical file, webpack just creates in and serves the bundles from memory
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'src'),
  },
  plugins: [],

  //tells webpack the file types(loaders) that we want it to handle
  //webpack can handle many more types of loaders than this
  module: {
    loaders:[
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.css$/, loaders: ['style', 'css']}
    ]
  }
}
