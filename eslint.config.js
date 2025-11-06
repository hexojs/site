'use strict';

const eslintConfig = require('eslint-config-hexo/eslint');

module.exports = [
  ...eslintConfig,
  {
    languageOptions: {
      ecmaVersion: 2020
    },
    rules: {
      'no-undef': 'off'
    }
  },
  {
    ignores: ['public', 'themes/navy/source/js/vendor', '.husky']
  }
];
