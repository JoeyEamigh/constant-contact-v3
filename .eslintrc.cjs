module.exports = {
  plugins: ['@typescript-eslint/eslint-plugin', 'prettier', 'import'],
  extends: ['plugin:@typescript-eslint/recommended', 'prettier'],
  settings: { react: { version: 'detect' } },
  ignorePatterns: ['dist', 'node_modules', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: __dirname + '/tsconfig.json',
  },
  rules: {
    'no-debugger': 'warn',
    'no-console': 'warn',
    'import/no-default-export': 'warn',
    'prefer-const': 'warn',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'arrow-body-style': 'off',
    'react/no-unescaped-entities': 'off',
    'prefer-arrow-callback': 'off',
    'prettier/prettier': ['warn', {}, { usePrettierrc: true }],
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-empty-function': 'off',
    'react-hooks/exhaustive-deps': 'off',
    '@typescript-eslint/consistent-type-assertions': [
      'warn',
      { assertionStyle: 'never' },
    ],
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/no-misused-promises': 'error',
    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
  },
  overrides: [
    {
      files: ['build.config.ts'],
      rules: { 'import/no-default-export': 'off' },
    },
  ],
};
