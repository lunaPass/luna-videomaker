import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: './e2e',
  timeout: 30000,
  retries: 1,
  workers: 1,
  expect: { timeout: 10000 },
  use: {
    baseURL: 'http://localhost:5173/luna-videomaker',
    headless: true,
  },
  webServer: {
    command: 'npx vite --mode emulator',
    port: 5173,
    reuseExistingServer: !process.env.CI,
  },
})
