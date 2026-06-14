import { test, expect } from '@playwright/test'

const BASE = '/luna-videomaker'

test.describe('Acesso indevido (hacker)', () => {

  test('redireciona para /login ao acessar /admin sem auth', async ({ page }) => {
    await page.goto(`${BASE}/admin/dashboard`)
    await expect(page).toHaveURL(/\/login/)
    await expect(page.getByText('Faça login')).toBeVisible()
  })

  test('bloqueia todas as rotas admin sem auth', async ({ page }) => {
    const rotas = [
      '/admin/dashboard',
      '/admin/empresas',
      '/admin/empresas/qualquer-id',
      '/admin/empresas/x/pessoas/y',
      '/admin/videos',
      '/admin/config',
    ]
    for (const rota of rotas) {
      await page.goto(`${BASE}${rota}`)
      await expect(page).toHaveURL(/\/login/)
    }
  })

  test('login com credenciais erradas mostra erro', async ({ page }) => {
    await page.goto(`${BASE}/login`)
    await page.fill('input[type="email"]', 'hacker@evil.com')
    await page.fill('input[type="password"]', 'senha_errada')
    await page.click('button[type="submit"]')
    await expect(page.getByText(/Erro|inválido|não autorizado/i)).toBeVisible()
  })

  test('rota publica /v/:slug continua acessivel sem auth', async ({ page }) => {
    await page.goto(`${BASE}/v/luna-filmes`)
    await expect(page.getByText(/Link inválido|token/i)).toBeVisible()
  })

})
