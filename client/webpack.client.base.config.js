// Common client-side webpack configuration used by webpack.hot.config and webpack.rails.config.

const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');

const devBuild = process.env.NODE_ENV !== 'production';
const nodeEnv = devBuild ? 'development' : 'production';

module.exports = {

  // the project dir
  context: __dirname,
  entry: {

    // See use of 'vendor' in the CommonsChunkPlugin inclusion below.
    vendor: [
      'babel-polyfill',
      'es5-shim/es5-shim',
      'es5-shim/es5-sham',
      'jquery',
      'turbolinks',
      'font-awesome-loader'
    ],

    // This will contain the app entry points defined by webpack.hot.config and webpack.rails.config
    app: [
      './app/bundles/comments/startup/clientRegistration',
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      libs: path.join(process.cwd(), 'app', 'libs'),
      react: path.resolve('./node_modules/react'),
      'react-dom': path.resolve('./node_modules/react-dom'),
    },
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(nodeEnv),
      },
      TRACE_TURBOLINKS: devBuild,
    }),

    new webpack.ProvidePlugin({
      'window.Tether': 'tether'
    }),

    // https://webpack.github.io/docs/list-of-plugins.html#2-explicit-vendor-chunk
    new webpack.optimize.CommonsChunkPlugin({

      // This name 'vendor' ties into the entry definition
      name: 'vendor',

      // We don't want the default vendor.js name
      filename: 'vendor-bundle.js',

      // Passing Infinity just creates the commons chunk, but moves no modules into it.
      // In other words, we only put what's in the vendor entry definition in vendor-bundle.js
      minChunks: Infinity,
    }),
  ],
  module: {
    loaders: [
      { test: /\.(jpe?g|png|gif|svg|ico)$/, loader: 'url?limit=10000' },

      {
       test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
       // Limiting the size of the woff fonts breaks font-awesome ONLY for the extract text plugin
       // loader: "url?limit=10000"
       loader: "url"
      },
      {
       test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
       loader: 'file'
      },

      { test: require.resolve('jquery'), loader: 'expose?jQuery' },
      { test: require.resolve('jquery'), loader: 'expose?$' },
      { test: require.resolve('turbolinks'), loader: 'imports?this=>window' },

      // Use one of these to serve jQuery for Bootstrap scripts:

      // Bootstrap 3
      // { test: /bootstrap-sass\/assets\/javascripts\//, loader: 'imports?jQuery=jquery' },

      // Bootstrap 4
      { test: /bootstrap\/dist\/js\/umd\//, loader: 'imports?jQuery=jquery' },
    ],
  },

  // Place here all postCSS plugins here, so postcss-loader will apply them
  postcss: [autoprefixer],

  // Place here all SASS files with variables, mixins etc.
  // And sass-resources-loader will load them in every CSS Module (SASS file) for you
  // (so don't need to @import them explicitly)
  // https://github.com/shakacode/sass-resources-loader
  sassResources: ['./app/assets/styles/app-variables.scss'],

};
