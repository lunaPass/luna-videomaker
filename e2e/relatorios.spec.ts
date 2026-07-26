import { test, expect } from '@playwright/test'
import { autenticar } from './helpers.mjs'
import Excel from 'exceljs'

const BASE = '/luna-videomaker'

test.describe('Relatórios', () => {

  test.beforeEach(async ({ page }) => {
    await autenticar(page)
  })

  test('navega para relatorios via sidebar', async ({ page }) => {
    await page.goto(`${BASE}/admin/dashboard`)
    await page.getByRole('link', { name: 'Relatórios' }).click()
    await expect(page.getByRole('heading', { name: 'Relatórios' })).toBeVisible()
  })

  test('exibe filtros na pagina', async ({ page }) => {
    await page.goto(`${BASE}/admin/relatorios`)
    await expect(page.getByRole('heading', { name: 'Relatórios' })).toBeVisible()

    await expect(page.getByText('Empresa')).toBeVisible()
    await expect(page.getByText('Pessoa')).toBeVisible()
    await expect(page.getByText('Status')).toBeVisible()
    await expect(page.getByText('Moeda')).toBeVisible()
    await expect(page.getByText('Data inicial')).toBeVisible()
    await expect(page.getByText('Data final')).toBeVisible()
    await expect(page.getByRole('button', { name: 'Gerar Relatório' })).toBeVisible()
  })

  test('empresa obrigatoria desabilita botao sem selecao', async ({ page }) => {
    await page.goto(`${BASE}/admin/relatorios`)
    const gerarBtn = page.getByRole('button', { name: 'Gerar Relatório' })
    await expect(gerarBtn).toBeDisabled()
  })

  test('carrega pessoas ao selecionar empresa', async ({ page }) => {
    await page.goto(`${BASE}/admin/relatorios`)
    await page.locator('select').first().selectOption('empresa-1')
    const pessoaSelect = page.locator('select').nth(1)
    await expect(pessoaSelect).toBeEnabled()
    await expect(pessoaSelect.locator('option[value="pessoa-1"]')).toBeVisible()
    await expect(pessoaSelect.locator('option[value="pessoa-3"]')).toBeVisible()
  })

  test('gera relatorio e exibe resultados', async ({ page }) => {
    await page.goto(`${BASE}/admin/relatorios`)
    await page.locator('select').first().selectOption('empresa-1')
    await page.getByRole('button', { name: 'Gerar Relatório' }).click()

    await expect(page.getByText('Luna Filmes').first()).toBeVisible({ timeout: 15000 })
    await expect(page.getByText('Review Novo Smartphone').first()).toBeVisible()
    await expect(page.getByText('Setup Gamer 2025').first()).toBeVisible()
    await expect(page.getByText('Total:').first()).toBeVisible()
  })

  test('filtra resultados por pessoa', async ({ page }) => {
    await page.goto(`${BASE}/admin/relatorios`)
    await page.locator('select').first().selectOption('empresa-1')
    await page.getByRole('button', { name: 'Gerar Relatório' }).click()
    await expect(page.getByText('Review Novo Smartphone').first()).toBeVisible({ timeout: 15000 })

    await page.locator('select').nth(1).selectOption('pessoa-1')
    await page.waitForTimeout(300)

    await expect(page.getByText('Ana Silva').first()).toBeVisible()
    await expect(page.getByText('Beatriz Costa')).toHaveCount(0)
  })

  test('filtra resultados por status', async ({ page }) => {
    await page.goto(`${BASE}/admin/relatorios`)
    await page.locator('select').first().selectOption('empresa-1')
    await page.getByRole('button', { name: 'Gerar Relatório' }).click()
    await expect(page.getByText('Review Novo Smartphone').first()).toBeVisible({ timeout: 15000 })

    await page.locator('select').nth(2).selectOption('postado')
    await page.waitForTimeout(300)

    await expect(page.getByText('Review Novo Smartphone').first()).toBeVisible()
    await expect(page.getByText('Setup Gamer 2025')).toHaveCount(0)
  })

  test('altera moeda de exibicao', async ({ page }) => {
    await page.goto(`${BASE}/admin/relatorios`)
    await page.locator('select').first().selectOption('empresa-1')
    await page.getByRole('button', { name: 'Gerar Relatório' }).click()
    await expect(page.getByText('Total:').first()).toBeVisible({ timeout: 15000 })

    await page.locator('select').nth(3).selectOption('USD')
    await page.waitForTimeout(300)

    await expect(page.getByText('Total:').first()).toBeVisible()
    await expect(page.getByText('US$').first()).toBeVisible()
  })

  test('mostra empty state sem filtros inicialmente', async ({ page }) => {
    await page.goto(`${BASE}/admin/relatorios`)
    await expect(page.getByText(/Selecione uma empresa/i)).toBeVisible()
  })

  test('mostra nenhum resultado com filtro sem dados', async ({ page }) => {
    await page.goto(`${BASE}/admin/relatorios`)
    await page.locator('select').first().selectOption('empresa-3')
    await page.getByRole('button', { name: 'Gerar Relatório' }).click()
    await expect(page.getByText('Nenhum vídeo encontrado').first()).toBeVisible({ timeout: 15000 })
  })

  test('exporta relatorio XLSX e verifica conteudo', async ({ page }) => {
    await page.goto(`${BASE}/admin/relatorios`)
    await page.locator('select').first().selectOption('empresa-1')
    await page.getByRole('button', { name: 'Gerar Relatório' }).click()
    await expect(page.getByText('Review Novo Smartphone').first()).toBeVisible({ timeout: 15000 })

    const [download] = await Promise.all([
      page.waitForEvent('download'),
      page.getByRole('button', { name: 'Exportar XLSX' }).click(),
    ])

    const filePath = await download.path()
    expect(filePath).not.toBeNull()

    const workbook = new Excel.Workbook()
    await workbook.xlsx.readFile(filePath!)
    const ws = workbook.getWorksheet(1)
    expect(ws).not.toBeNull()

    const rows: any[] = []
    ws!.eachRow((row, rowNumber) => {
      if (rowNumber === 1) return
      const values = (row.values as any[]).slice(1)
      rows.push(values)
    })

    expect(rows.length).toBeGreaterThanOrEqual(5)

    const titulos = rows.map(r => r[2])
    expect(titulos).toContain('Review Novo Smartphone')
    expect(titulos).toContain('Setup Gamer 2025')
    expect(titulos).toContain('Comparativo iPhone')

    const headers: string[] = []
    ws!.eachRow((row, rowNumber) => {
      if (rowNumber === 1) {
        const values = (row.values as any[]).slice(1)
        headers.push(...values)
      }
    })

    expect(headers).toContain('Empresa')
    expect(headers).toContain('Pessoa')
    expect(headers).toContain('Título')
    expect(headers).toContain('Valor Original')
    expect(headers).toContain('Valor Convertido')
    expect(headers).toContain('Moeda')

    const empresaCol = headers.indexOf('Empresa')
    rows.forEach(r => expect(r[empresaCol]).toBe('Luna Filmes'))
  })

  test('nome do arquivo segue padrao empresa_todos_periodo', async ({ page }) => {
    await page.goto(`${BASE}/admin/relatorios`)
    await page.locator('select').first().selectOption('empresa-1')

    await page.locator('input[type="date"]').first().fill('2025-01-01')
    await page.locator('input[type="date"]').last().fill('2025-06-30')

    await page.getByRole('button', { name: 'Gerar Relatório' }).click()
    await expect(page.getByText('Review Novo Smartphone').first()).toBeVisible({ timeout: 15000 })

    const [download] = await Promise.all([
      page.waitForEvent('download'),
      page.getByRole('button', { name: 'Exportar XLSX' }).click(),
    ])

    expect(download.suggestedFilename()).toMatch(/luna-filmes_todos_2025-01_2025-06\.xlsx/)
  })
})
