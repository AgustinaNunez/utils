import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';

import * as packageJson from './package.json'

const outputEsm = {
  file: packageJson.module,
  format: 'esm',
  sourcemap: true,
}

const outputCjs = {
  file: packageJson.main,
  format: 'cjs',
  sourcemap: true,
}

export default [
  {
    input: 'src/index.ts',
    output: [
      outputCjs,
      outputEsm,
    ],
    plugins: [
      resolve(),
      commonjs(),
      json(),
      typescript({ tsconfig: './tsconfig.json' }),
    ],
  },
  {
    input: 'src/index.ts',
    output: [{ file: 'dist/index.d.ts', format: 'es' }],
    plugins: [dts()],
  },
];
