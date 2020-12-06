const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': isProd ? 'error' : 'off',
    'vue/no-parsing-error': [2, { 'x-invalid-end-tag': false }],
    'no-undef': 2, // 任何对未声明的变量的引用都会导致错误
    'camelcase': 0, // 变量使用驼峰方法，开始可以加_
    'no-tabs': 'off', // 一些风格指南根本不允许使用制表符，包括评论内容。
    'one-var': 'off', // 一次声明一个变量
    'no-unused-vars': 'error', // 未定义的变量
    'no-useless-escape': 0, // 忽略正则单引号区别
    'no-unused-expressions': 2, // 对程序状态没有影响的未使用表达式表示逻辑错误。
    'no-mixed-operators': 0, // 用括号括起复杂的表达式可以明确开发人员的意图
    'no-unreachable': 0,
    'no-mixed-spaces-and-tabs': 0,
    'standard/computed-property-even-spacing': 0,
    'no-control-regex': 0,
    'no-dupe-class-members': 0,
    'no-use-before-define': 0,
    'no-dupe-keys': 0,
    'prefer-promise-reject-errors': 0,
    'vue/valid-v-for': 0,
    'vue/no-unused-vars': 0,
    'vue/no-side-effects-in-computed-properties': 0,
    'vue/require-v-for-key': 0,
    'vue/no-dupe-keys': 0, "quotes": 0, //不一定单引号
    "semi": 0, //不需要结束引号
    "space-before-function-paren": 0, //函数前面不需要空格
    "spaced-comment": 0, //评论前面需要空格
    "no-multiple-empty-lines": 0,//多余的空行
    "indent": 0, //空格
    "space-before-blocks": 0,//空格
    "import/first": 0,//import/first
    "comma-dangle": 0,//空格
    "no-multi-spaces": 0,
    "eol-last": 0,
    "import/no-duplicates": 0,
    "no-trailing-spaces":0
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
