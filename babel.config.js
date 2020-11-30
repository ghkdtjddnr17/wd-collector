module.exports = {
  presets: [
    [
      '@vue/app',
      {
        useBulitIns: 'entry'
      }
    ],
    ['@babel/preset-env']
  ],
  plugins: ['@babel/plugin-proposal-nullish-coalescing-operator', '@babel/plugin-proposal-optional-chaining']
};