const eslintConfig = require('eslint-config-hexo/eslint');

module.exports = [
  ...eslintConfig,
  {
    languageOptions: {
      ecmaVersion: 2020
    }
  },
  {
    ignores: ['public', 'themes/navy/source/js/vendor']
  }
];
