const BASE = '/luna-videomaker'
const TEST_EMAIL = 'lunaheloisaa82@gmail.com'
const TEST_PASSWORD = 'admin123'

export async function autenticar(page) {
  page.on('console', msg => {
    console.log('[BROWSER ' + msg.type().toUpperCase() + ']', msg.text())
  })

  await page.addInitScript(() => {
    localStorage.setItem('luna_locale', 'pt-BR')
  })

  await page.goto(`${BASE}/login`)

  const emailCount = await page.locator('input[type="email"]').count()
  console.log('[DEBUG] Email inputs:', emailCount)

  await page.fill('input[type="email"]', TEST_EMAIL)
  await page.fill('input[type="password"]', TEST_PASSWORD)
  await page.click('button[type="submit"]')

  console.log('[DEBUG] URL after submit:', page.url())
  await page.waitForURL(/\/admin/)
  console.log('[DEBUG] Login OK, URL:', page.url())
}
