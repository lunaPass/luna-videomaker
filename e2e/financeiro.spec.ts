import { test, expect } from '@playwright/test'
import { autenticar } from './helpers.mjs'

const BASE = '/luna-videomaker'

test.describe('Financeiro', () => {

  test.beforeEach(async ({ page }) => {
    await autenticar(page)
  })

  test('navega para financeiro via sidebar', async ({ page }) => {
    await page.goto(`${BASE}/admin/dashboard`)
    await page.getByRole('link', { name: 'Financeiro' }).click()
    await expect(page.getByRole('heading', { name: 'Financeiro' })).toBeVisible()
  })

  test('financeiro exibe total e contadores por moeda', async ({ page }) => {
    await page.goto(`${BASE}/admin/financeiro`)
    await expect(page.getByRole('heading', { name: 'Financeiro' })).toBeVisible()

    // Total card
    await expect(page.getByText('Total (BRL)')).toBeVisible()
    // Should show a numeric value with R$ symbol
    await expect(page.locator('.bg-green-50').getByText('R$')).toBeVisible()

    // Currency count cards
    await expect(page.getByText('Vídeos em BRL')).toBeVisible()
    await expect(page.getByText('Vídeos em USD')).toBeVisible()
    await expect(page.getByText('Vídeos em EUR')).toBeVisible()
  })

  test('financeiro exibe top 10 videos chart', async ({ page }) => {
    await page.goto(`${BASE}/admin/financeiro`)
    await expect(page.getByText('Top 10 Vídeos')).toBeVisible()
    // Should have a canvas for the bar chart
    const section = page.locator('h2').filter({ hasText: 'Top 10 Vídeos' })
    const canvas = section.locator('..').locator('canvas')
    await expect(canvas).toBeVisible()
  })

  test('financeiro exibe distribuicao por moeda chart', async ({ page }) => {
    await page.goto(`${BASE}/admin/financeiro`)
    await expect(page.getByText('Distribuição por Moeda')).toBeVisible()
    const section = page.locator('h2').filter({ hasText: 'Distribuição por Moeda' })
    const canvas = section.locator('..').locator('canvas')
    await expect(canvas).toBeVisible()
  })

  test('financeiro exibe tabela com videos que tem valor', async ({ page }) => {
    await page.goto(`${BASE}/admin/financeiro`)
    await expect(page.getByRole('heading', { name: 'Financeiro' })).toBeVisible()

    // Seed data: video-1 (Review Novo Smartphone, 500 BRL) should appear
    await expect(page.getByText('Review Novo Smartphone').first()).toBeVisible()
    // video-7 (Comparativo iPhone, 1200 BRL) should appear
    await expect(page.getByText('Comparativo iPhone').first()).toBeVisible()
    // video-28 (Entrevista com Especialista, 2500 BRL) should appear
    await expect(page.getByText('Entrevista com Especialista').first()).toBeVisible()
  })

  test('financeiro filtra por empresa', async ({ page }) => {
    await page.goto(`${BASE}/admin/financeiro`)
    await expect(page.getByRole('heading', { name: 'Financeiro' })).toBeVisible()

    // Select Luna Filmes (empresa-1) — find the select that has empresa-1 as an option
    await page.locator('select').filter({ has: page.locator('option[value="empresa-1"]') }).selectOption('empresa-1')

    // Should show empresa-1 videos
    await expect(page.getByText('Review Novo Smartphone').first()).toBeVisible()
    await expect(page.getByText('Comparativo iPhone').first()).toBeVisible()

    // Should NOT show empresa-2 videos
    await expect(page.getByText('Marketing Digital 2025')).toHaveCount(0)
    await expect(page.getByText('Make Tutorial')).toHaveCount(0)
  })

  test('financeiro troca moeda de exibicao', async ({ page }) => {
    await page.goto(`${BASE}/admin/financeiro`)
    await expect(page.getByRole('heading', { name: 'Financeiro' })).toBeVisible()

    // Default is BRL — total card shows BRL
    await expect(page.getByText('Total (BRL)')).toBeVisible()

    // Switch to USD — find the select that has USD as an option
    await page.locator('select').filter({ has: page.locator('option[value="USD"]') }).selectOption('USD')

    // Total card should now show USD
    await expect(page.getByText('Total (USD)')).toBeVisible()

    // Switch to EUR
    await page.locator('select').filter({ has: page.locator('option[value="EUR"]') }).selectOption('EUR')

    // Total card should now show EUR
    await expect(page.getByText('Total (EUR)')).toBeVisible()
  })

  test('financeiro mostra valor formatado na tabela', async ({ page }) => {
    await page.goto(`${BASE}/admin/financeiro`)
    await expect(page.getByRole('heading', { name: 'Financeiro' })).toBeVisible()

    // video-1 (500 BRL) — should show R$ 500,00
    const row = page.locator('tr').filter({ hasText: 'Review Novo Smartphone' })
    await expect(row.getByText('R$')).toBeVisible()
  })

  test('financeiro exibe colunas da tabela', async ({ page }) => {
    await page.goto(`${BASE}/admin/financeiro`)
    await expect(page.getByRole('heading', { name: 'Financeiro' })).toBeVisible()

    // Table headers
    await expect(page.locator('th').filter({ hasText: 'Vídeo' })).toBeVisible()
    await expect(page.locator('th').filter({ hasText: 'Empresa' })).toBeVisible()
    await expect(page.locator('th').filter({ hasText: 'Pessoa' })).toBeVisible()
    await expect(page.locator('th').filter({ hasText: 'Valor' })).toBeVisible()
    await expect(page.locator('th').filter({ hasText: 'Status' })).toBeVisible()
  })

  test('financeiro exibe status dos videos na tabela', async ({ page }) => {
    await page.goto(`${BASE}/admin/financeiro`)
    await expect(page.getByRole('heading', { name: 'Financeiro' })).toBeVisible()

    // Should show status badges in table (use span to avoid matching hidden <option>)
    await expect(page.locator('td span').filter({ hasText: 'Postado' }).first()).toBeVisible()
    await expect(page.locator('td span').filter({ hasText: 'Editando' }).first()).toBeVisible()
  })

})
