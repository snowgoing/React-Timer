var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    'script-loader!jquery/dist/jquery.min.js',
    'script-loader!foundation-sites/dist/foundation.min.js',
    './app/app.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    }),
    // This LoaderOptionsPlugin doesn't work at all
    // leaving it in for reference
    // manually followed paths into node_modules in _foundation-settings.scss
    // and app.scss
    new webpack.LoaderOptionsPlugin({
      options: {
          // context: '/',
          sassLoader: {
              includePaths: [
                  path.resolve(__dirname, './node_modules/foundation-sites/scss')
              ]
          }
      }
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    alias: {
      Main: path.resolve('app/components/Main.jsx'),
      Nav: path.resolve('app/components/Nav.jsx'),
      Timer: path.resolve('app/components/Timer.jsx'),
      Clock: path.resolve('app/components/Clock.jsx'),
      Countdown: path.resolve('app/components/Countdown.jsx'),
      CountdownForm: path.resolve('app/components/CountdownForm.jsx'),
      Controls: path.resolve('app/components/Controls.jsx'),
      applicationStyles: path.resolve('app/styles/app.scss')
    },
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },

  devtool: 'eval-source-map'
};
