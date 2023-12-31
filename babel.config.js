module.exports = {
  presets: ['next/babel'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.ts', '.tsx', 'js', 'jsx'],
        alias: {
          '~': '.',
          '@lib': './lib',
          '@pages': './pages',
          '@styles': './styles',
          '@components': './components',
          '@hooks': './hooks',
          '@utils': './utils',
        },
      },
    ],
    [
      'styled-components',
      {
        ssr: true,
        displayName: true,
        preprocess: false,
      },
    ],
  ],
};
