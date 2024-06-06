import nodeResolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import replace from '@rollup/plugin-replace';
import commonjs from '@rollup/plugin-commonjs';
import nodePolyfills from 'rollup-plugin-polyfill-node';

export default {
  input: 'src/index.jsx',
  output: {
    file: 'dist/bundle.js',
    format: 'iife',
  },
  plugins: [
    nodeResolve(['.js', '.jsx']),
    babel({ babelHelpers: 'bundled' }),
    commonjs(),
    replace({
      presetAssignment: true,
      'process.env.NODE_ENV': '"development"',
    }),
    nodePolyfills(),
  ],
};
