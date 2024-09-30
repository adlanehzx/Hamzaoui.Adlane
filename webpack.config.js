const webpack = require('webpack');

module.exports = {
  //... autres configurations existantes ...
  resolve: {
    fallback: {
      https: require.resolve('https-browserify'),
      http: require.resolve('stream-http'),
      querystring: require.resolve('querystring-es3'),
      net: false, // Tu peux également définir ceci sur `false` si tu n'en as pas besoin.
    },
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser',
      Buffer: ['buffer', 'Buffer'],
    }),
  ],
};
