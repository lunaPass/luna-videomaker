import { test, expect } from '@playwright/test'

const BASE = '/luna-videomaker'

test.describe('Admin (local mode)', () => {

  test.beforeEach(async ({ page }) => {
    await page.addInitScript(() => {
      localStorage.setItem('luna_local_auth', JSON.stringify({ email: 'admin@test.com' }))
    })
  })

  test('login via localStorage e mostra dashboard', async ({ page }) => {
    await page.goto(`${BASE}/admin/dashboard`)
    await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible()
    // Dashboard shows aggregated status cards, not empresa names
    await expect(page.getByText('Gravado')).toBeVisible()
  })

  test('dashboard exibe cards de status', async ({ page }) => {
    await page.goto(`${BASE}/admin/dashboard`)
    await expect(page.getByText('Gravado')).toBeVisible()
    await expect(page.getByText('Editando')).toBeVisible()
    await expect(page.getByText('Em Revisão')).toBeVisible()
    await expect(page.getByText('Postado')).toBeVisible()
  })

  test('navega para lista de empresas via sidebar', async ({ page }) => {
    await page.goto(`${BASE}/admin/dashboard`)
    await page.getByRole('link', { name: 'Empresas' }).click()
    await expect(page.getByText(/Luna Filmes/).first()).toBeVisible()
    await expect(page.getByText(/Pixel Produtora/).first()).toBeVisible()
    await expect(page.getByText(/Studio Zen/).first()).toBeVisible()
  })

  test('navega para detalhe de empresa', async ({ page }) => {
    await page.goto(`${BASE}/admin/empresas/empresa-1`)
    await expect(page.getByText(/Ana Silva/).first()).toBeVisible()
    await expect(page.getByText(/Carlos Oliveira/).first()).toBeVisible()
    await expect(page.getByText(/Beatriz Costa/).first()).toBeVisible()
  })

  test('navega para detalhe de pessoa', async ({ page }) => {
    await page.goto(`${BASE}/admin/empresas/empresa-1/pessoas/pessoa-1`)
    await expect(page.getByRole('heading', { name: 'Ana Silva' })).toBeVisible()
    await expect(page.getByText('Review Novo Smartphone')).toBeVisible()
    await expect(page.getByText('Setup Gamer 2025')).toBeVisible()
  })

  test('navega para página de vídeos', async ({ page }) => {
    await page.goto(`${BASE}/admin/videos`)
    await expect(page.getByText('Review Novo Smartphone').first()).toBeVisible()
  })

  test('navega para config', async ({ page }) => {
    await page.goto(`${BASE}/admin/config`)
    await expect(page.getByText('Configurações')).toBeVisible()
    await expect(page.getByText('YouTube')).toBeVisible()
    await expect(page.getByText('Instagram')).toBeVisible()
    await expect(page.getByText('TikTok')).toBeVisible()
    await expect(page.getByText('Facebook')).toBeVisible()
  })

})
