import { defineConfig } from 'eslint/config';
import parser from '@typescript-eslint/parser';
import plugin from '@typescript-eslint/eslint-plugin';
import prettier from 'eslint-config-prettier';

export default defineConfig([
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': plugin as any,
    },
    rules: {
      ...plugin.configs.recommended.rules,
    },
  },
  {
    files: ['**/*.{ts,tsx,js}'],
    rules: {
      ...prettier.rules,
    },
  },
]);
