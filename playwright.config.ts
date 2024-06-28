import { defineConfig, PlaywrightTestConfig } from '@playwright/test';
import { timeStamp } from 'console';

const config: PlaywrightTestConfig = {
  testMatch: ["tests/Login.test.ts"]
};

export default config({
  expect: {
    timeout: 10 * 1000,
  },
  timeout: 5 * 60 * 1000,
  globalTimeout: 60 * 60 * 1000,
});

