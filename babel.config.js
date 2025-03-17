module.exports = {
  presets: ["module:@react-native/babel-preset"],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.android.js',
          '.android.tsx',
          '.ios.js',
          '.ios.tsx',
        ],
        alias: {
          constants: './src/constants',
          screens: './src/screens',
          assets: './src/assets',
          components: './src/components',
          store: './src/store',
          navigation: './src/navigation',
          utils: './src/utils',
          types: './src/types',
        },
      },
    ],
  ],
};
