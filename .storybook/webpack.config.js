module.exports = async ({ config }) => {
  config.module.rules.push({
    test: /\.ts(x?)$/,
    use: [
      {
        loader: 'ts-loader',
      },
      {
        loader: 'react-docgen-typescript-loader',
      },
    ],
  });

  config.resolve.extensions.push('.ts', '.tsx');

  return config;
};
