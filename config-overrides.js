const webpack = require('webpack');

module.exports = {
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      https: require.resolve('https-browserify'),
      http: require.resolve('stream-http'),
      querystring: require.resolve('querystring-es3'),
      net: false,
      tls: false,
      assert: require.resolve('assert/'),
      os: require.resolve('os-browserify/browser'),
      fs: false,
      child_process: false,
      path: require.resolve('path-browserify'),
      crypto: require.resolve('crypto-browserify'),
      zlib: require.resolve('browserify-zlib'),
      http2: require.resolve('http2-client'), // Ajout pour http2
    };

    config.plugins.push(
      new webpack.ProvidePlugin({
        process: 'process/browser',
        Buffer: ['buffer', 'Buffer'],
      })
    );

    return config;
  },
};
