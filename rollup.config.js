import pkg from './package.json'
import babel from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import { terser } from 'rollup-plugin-terser'

const extensions = ['.js','.jsx','.ts','.tsx']

/** @type {import('rollup').RollupOptions} */
const options = {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      // sourcemap: true
    },
    {
      file: pkg.module,
      format: 'esm',
      // sourcemap: true
    }
  ],
  plugins: [
    resolve({
      extensions
    }),
    commonjs(),
    babel({
      babelHelpers: 'bundled',
      extensions
    }),
    terser(),
  ],
  external: [
    'react',
    '@emotion/core',
    '@emotion/styled',
    'styled-system',
    'react-use'
  ]
}
export default options
