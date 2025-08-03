import { defineConfig } from 'vite';
import viteImagemin from 'vite-plugin-imagemin';
import compression from 'vite-plugin-compression';

export default defineConfig({
  plugins: [
    viteImagemin({
      webp: {
        quality: 75,
      },
      mozjpeg: {
        quality: 75,
      },
      optipng: {
        optimizationLevel: 5,
      },
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
