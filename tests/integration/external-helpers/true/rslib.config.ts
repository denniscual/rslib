import { defineConfig } from '@rslib/core';
import { generateBundleEsmConfig } from 'test-helper';

export default defineConfig({
  lib: [
    generateBundleEsmConfig({
      syntax: 'es5',
      externalHelpers: true,
      output: {
        distPath: {
          root: './dist/1',
        },
      },
    }),
    generateBundleEsmConfig({
      syntax: 'es5',
      externalHelpers: true,
      autoExternal: false,
      output: {
        distPath: {
          root: './dist/2',
        },
      },
    }),
  ],
  source: {
    entry: {
      index: '../__fixtures__/src/index.ts',
    },
  },
});