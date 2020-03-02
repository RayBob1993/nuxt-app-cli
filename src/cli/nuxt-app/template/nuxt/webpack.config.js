/*
 * JetBrains IDE's helper to resolve aliases
 * */
<%_ if (isElementUI) { _%>
const webpack = require('webpack')
<%_ } _%>
const { resolve } = require('path')

module.exports = {
  <%_ if (isElementUI) { _%>
  plugins: [
    new webpack.NormalModuleReplacementPlugin(/element-ui[/\\]lib[/\\]locale[/\\]lang[/\\]zh-CN/, 'element-ui/lib/locale/lang/ru-RU'),
  ],
  <%_ } _%>
  resolve: {
    extensions: [
      '.js',
      '.json',
      '.vue',
      '.ts',
      '.css',
      '.scss',
    ],
    root: resolve(__dirname),
    alias: {
      '@': resolve(__dirname),
      '~': resolve(__dirname),
    },
  },
}
