'use strict';

module.exports = {
  bracketSpacing: false,
  singleQuote: true,
  jsxBracketSameLine: true,
  trailingComma: 'es5',
  printWidth: 80,
  parser: 'babel',

  overrides: [
    {
      files: ['src/**/**.ts'],
      options: {
        trailingComma: 'all',
      },
    },
  ],
};
