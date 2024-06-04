import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';

export default [
  {
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
    ignorePatterns: ['bundle.js'],
    rules: {},
  },
  pluginJs.configs.recommended,
  pluginReactConfig,
];
