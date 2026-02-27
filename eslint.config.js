import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      'semi': ['error', 'always'], // "off"
      "quotes": ["error", "double"],
      'no-console': [
          'warn',
          {
              allow: ['error', 'warn']
          }
      ],
      '@typescript-eslint/no-non-null-assertion': 0,
      '@typescript-eslint/semi': 0, // 2
      '@typescript-eslint/explicit-function-return-type': 2,
      '@typescript-eslint/space-before-function-paren': 0,
      '@/indent': ['error', 2],
      'react/react-in-jsx-scope': 0,
      // '@typescript-eslint/strict-boolean-expressions': 2,
      '@typescript-eslint/prefer-nullish-coalescing': 0,
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": ["error", { "argsIgnorePattern": "^_" }]
    }
  },
])
