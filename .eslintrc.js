module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true
  },
  extends: 'standard',
  // required to lint *.vue files
  plugins: ['html'],
  globals: {},
  // add your custom rules here
  rules: {
    semi: [2, 'always'],
    'no-debugger': 0
  }
}
