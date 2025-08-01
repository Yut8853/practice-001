// eslint.config.ts
import tseslint from 'typescript-eslint';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{ts,tsx}'],
    ...tseslint.configs.recommended,
  },
]);
