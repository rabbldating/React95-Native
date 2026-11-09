module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
};

/*
jest.config.ts:

import type { Config } from 'jest';
import { createJsWithBabelPreset } from 'ts-jest';
import '@testing-library/jest-native';

const jsWithBabelPreset = createJsWithBabelPreset({
  tsconfig: 'tsconfig.spec.json',
  babelConfig: true,
});

const jestConfig: Config = {
  preset: 'react-native',
  transform: jsWithBabelPreset.transform,
  modulePathIgnorePatterns: [
    '<rootDir>/example/node_modules',
    '<rootDir>/dist/',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};

export default jestConfig;

tsconfig.json:

"types": ["jest", "@testing-library/jest-native"]

tsconfig.spec.json:

{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "jsx": "react"
  }
}

package.json:

  "scripts": {
    "cz": "git-cz",
    "test": "jest ./src",
    "test:ci": "jest ./src --maxWorkers=2",
    "test:watch": "jest ./src --watch",
    "test:coverage": "jest ./src --coverage",
    "typescript": "tsc --noEmit",
    "build": "bob build",
    "semantic-release": "semantic-release",
    "example": "yarn --cwd example",
    "pods": "cd example && pod-install --quiet",
    "bootstrap": "yarn example && yarn && yarn pods"
  },

*/