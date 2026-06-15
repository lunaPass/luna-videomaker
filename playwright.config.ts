import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: './e2e',
  timeout: 30000,
  expect: { timeout: 10000 },
  use: {
    baseURL: 'http://localhost:5173/luna-videomaker',
    headless: true,
    launchOptions: {
      executablePath: '/tmp/chrome-wrapper.sh',
    },
  },
  webServer: {
    command: 'npx vite --mode test',
    port: 5173,
    reuseExistingServer: true,
  },
})
