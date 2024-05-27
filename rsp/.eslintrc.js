const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  root: true,
  extends: ['plugin:@next/next/recommended', '@payloadcms'],
  ignorePatterns: ['**/payload-types.ts'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'off',
    '@typescript-eslint/no-unused-vars': isProduction ? 'error' : 'warn',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'no-console': isProduction ? 'error' : 'warn',
    'eol-last': ['error', 'always'],
    'simple-import-sort/imports': isProduction ? 'error' : 'warn',
    '@typescript-eslint/no-implicit-any-catch': 'off',
    'dot-notation': 'warn',
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      rules: {
        '@typescript-eslint/no-unused-vars': 'off',
        'no-console': 'off',
        'simple-import-sort/imports': 'off',
        'eol-last': 'off',
        'dot-notation': 'off',
        '@typescript-eslint/no-implicit-any-catch': 'off',
      },
    },
  ],
};

