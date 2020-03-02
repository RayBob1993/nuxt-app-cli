module.exports = {
  root: true,
  extends: [
    '@platr/vue',
  ],
  <%_ if (test) { _%>
  plugins: [
    'jest'
  ],
  env: {
    'jest/globals': true
  }
  <%_ } _%>
}
