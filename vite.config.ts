import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@contexts': path.resolve(__dirname, './src/contexts'),
      '@stores': path.resolve(__dirname, './src/stores'),
      '@data': path.resolve(__dirname, './src/data'),
      '@schemas': path.resolve(__dirname, './src/data/schemas'),
      '@interfaces': path.resolve(__dirname, './src/data/interfaces'),
      '@hooks': path.resolve(__dirname, './src/data/hooks'),
      '@services': path.resolve(__dirname, './src/data/services'),
    },
  },
});
