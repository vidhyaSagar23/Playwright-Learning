// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * @see https://playwright.dev/docs/test-configuration
 */


// config variable storing all the options and its exported at last so that it can available for all tests
const config = ({
  testDir: './tests',
  timeout: 40*1000,
  expect:{
    timeout: 5*1000,
  },
  reporter:'html',
  use: {
      browserName:'chromium',
      headless:false
  },
});

module.exports = config

