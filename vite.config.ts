// vite.config.ts
import { defineConfig } from 'vite';
import { imagetools } from 'vite-imagetools';
import compression from 'vite-plugin-compression';

export default defineConfig({
  plugins: [
    imagetools({
      defaultDirectives: new URLSearchParams({
        format: 'webp',
        quality: '75',
      }),
    }),

    compression({
      algorithm: 'gzip',
      ext: '.gz',
      threshold: 10240,
    }),
    compression({
      algorithm: 'brotliCompress',
      ext: '.br',
      threshold: 10240,
    }),
  ],
});
