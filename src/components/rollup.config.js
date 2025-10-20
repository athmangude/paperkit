const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const typescript = require('@rollup/plugin-typescript');
const peerDepsExternal = require('rollup-plugin-peer-deps-external');

const packageJson = require('./package.json');

module.exports = [
  {
    input: 'index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        declaration: true,
        declarationDir: './dist',
        exclude: ['**/*.test.*', '**/*.spec.*'],
        tsconfigOverride: {
          compilerOptions: {
            target: 'es2017',
            lib: ['dom', 'dom.iterable', 'es2017'],
            module: 'esnext',
            moduleResolution: 'node',
            allowSyntheticDefaultImports: true,
            esModuleInterop: true,
            skipLibCheck: true,
            strict: true,
            jsx: 'react-jsx',
          },
        },
      }),
    ],
    external: ['react', 'react-dom'],
  },
];
