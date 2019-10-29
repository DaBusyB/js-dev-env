// import webpack from 'webpack';
import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WebpackMd5Hash from 'webpack-md5-hash';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default {
  debug: true,
  devtool: 'source-map',
  noInfo: false,

  //applications entry point
  entry: {
    vendor: path.resolve(__dirname, 'src/vendor'),
    main: path.resolve(__dirname, 'src/index')
  },

  target: 'web',

  //defines where webpack should create the dev bundle
  //there will not be a physical file, webpack just creates in and serves the bundles from memory
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].[chunkhash].js',
  },

  devServer: {
    contentBase: path.resolve(__dirname, 'src'),
  },

  plugins: [
    //generate an external css file with a hash in the filename
    new ExtractTextPlugin('[name].[contenthash].css'),

    //hash the files using md5 so that their names change when the content changes
    new WebpackMd5Hash(),

    //use CommonsChunkPlugin to create a seperate bundle
    //of vendor libs so that theyre cached separately
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),

    //Create HTML file that includes reference to bundled JS
    new HtmlWebpackPlugin({
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      },

      template: 'src/index.html',
      inject: true,
      trackJSToken: "a75db89e01554c94ba595271b0474751"
    }),

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
      {test: /\.css$/, loader: ExtractTextPlugin.extract('css?sourceMap')}
    ]
  }
}
