module.exports = async ({ config }) => {
  config.module.rules.push({
    test: /\.ts(x?)$/,
    use: [
      {
        loader: 'ts-loader',
      },
    ],
  });

  config.resolve.extensions.push('.ts', '.tsx');

  return config;
};
