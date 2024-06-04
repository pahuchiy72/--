import nodeResolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import nodePolyfills from 'rollup-plugin-polyfill-node';

export default {
  input: 'index.js',
  output: {
    file: 'bundle.js',
    format: 'es',
  },
  plugins: [nodeResolve(), babel({ babelHelpers: 'bundled' }), nodePolyfills()],
};
