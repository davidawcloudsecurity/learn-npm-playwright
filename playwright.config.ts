import { PlaywrightTestConfig } from '@playwright/test';
import { timeStamp } from 'console';
import dotenv from 'dotenv';
import path from 'path';

// Read from ".env" file.
dotenv.config({ path: path.resolve(__dirname, '.env') });

const config: PlaywrightTestConfig = {
  globalTimeout: 120000, // Maximum time the whole test suite can run,
  timeout: 60000,        // Timeout for each test
  testMatch: ["tests/Login.test.ts"]
};

export default config;

