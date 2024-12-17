import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { port: 5100 },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@src': path.resolve(__dirname, 'src'),
      '@tauri': path.resolve(__dirname, 'src-tauri'),
      '@api': path.resolve(__dirname, 'src/api'),
      '@comp': path.resolve(__dirname, 'src/component'),
      '@con': path.resolve(__dirname, 'src/container'),
      '@core': path.resolve(__dirname, 'src/core'),
      '@db': path.resolve(__dirname, 'src/db'),
      '@lib': path.resolve(__dirname, 'src/lib'),
      '@page': path.resolve(__dirname, 'src/page'),
      '@scss': path.resolve(__dirname, 'src/scss'),
      '@service': path.resolve(__dirname, 'src/service'),
      '@static': path.resolve(__dirname, 'src/static'),
      '@image': path.resolve(__dirname, 'src/static/image'),
      '@icon': path.resolve(__dirname, 'src/static/icon'),
      '@store': path.resolve(__dirname, 'src/store'),
      '@styled': path.resolve(__dirname, 'src/styled'),
      '@theme': path.resolve(__dirname, 'src/theme'),
      '@tool': path.resolve(__dirname, 'src/tool'),
      '@util': path.resolve(__dirname, 'src/util'),
    },
  },
});
