import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'

const root = process.cwd()

export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ['src/**/*'],
      exclude: ['**/*.stories.tsx', '**/*.test.tsx'],
      insertTypesEntry: true,
    }),
  ],

  build: {
    lib: {
      entry: resolve(root, 'src/index.ts'),
      name: 'ReactComponentLibrary',
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format === 'es' ? 'esm' : 'cjs'}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
    cssCodeSplit: false,
  },

  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },

  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    css: {
        modules: {                                          
        classNameStrategy: 'non-scoped'  // ← use plain class names in tests
        }
    },                                                                                                       
    exclude: ['node_modules', 'dist', 'stories'],
    typecheck: {
        tsconfig: './tsconfig.test.json'
    },
  },
})