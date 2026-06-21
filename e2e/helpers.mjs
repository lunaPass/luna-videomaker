const BASE = '/luna-videomaker'
const TEST_EMAIL = 'lunaheloisaa82@gmail.com'
const TEST_PASSWORD = 'admin123'

export async function autenticar(page) {
  await page.addInitScript(() => {
    localStorage.setItem('luna_locale', 'pt-BR')
  })

  await page.goto(`${BASE}/login`)
  await page.fill('input[type="email"]', TEST_EMAIL)
  await page.fill('input[type="password"]', TEST_PASSWORD)
  await page.click('button[type="submit"]')
  await page.waitForURL(/\/admin/)
}
