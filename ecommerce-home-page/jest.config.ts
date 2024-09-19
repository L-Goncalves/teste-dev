import type {Config} from 'jest';

const config: Config = {
    moduleNameMapper: {
        '\\.(css|scss)$': 'identity-obj-proxy',
      },
    transform: {
      '^.+\\.(ts|tsx)$': 'ts-jest',
      '^.+\\.svg$': 'jest-transform-stub',
    },
    testEnvironment: 'jsdom',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  };
  
  export default config;