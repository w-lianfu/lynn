import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import react from 'eslint-plugin-react';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      tseslint.configs.recommendedTypeChecked,
      ...tseslint.configs.stylisticTypeChecked,
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        'ecmaFeatures': { 'jsx': true },
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
        jsx: true,
      },
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      // eslint 配置参考: https://github.com/airbnb/javascript
      'no-empty-function': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      'no-new-object': 'error',
      'object-shorthand': ['error', 'always'],
      'quote-props': ['error', 'as-needed'],
      // '@typescript-eslint/no-explicit-any': 'off',
      // https://github.com/airbnb/javascript?tab=readme-ov-file#arrays--callback-return
      'array-callback-return': 'error',
      // https://github.com/airbnb/javascript?tab=readme-ov-file#destructuring--object
      'prefer-destructuring': 'error',
      // https://github.com/airbnb/javascript?tab=readme-ov-file#strings--quotes
      'quotes': ['error', 'single'],
      // https://eslint.org/docs/latest/rules/func-style
      'func-style': ['error', 'expression'],
      // https://eslint.org/docs/latest/rules/wrap-iife
      'wrap-iife': ['error', 'outside'],
      // https://eslint.org/docs/latest/rules/no-loop-func
      'no-loop-func': 'error',
    },
  },
)
