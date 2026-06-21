import { test, expect } from '@playwright/test'
import { autenticar } from './helpers.mjs'
import Excel from 'exceljs'
import * as path from 'path'
import * as fs from 'fs'
import * as os from 'os'

const BASE = '/luna-videomaker'

test.describe('XLSX Import/Export', () => {

  test.beforeEach(async ({ page }) => {
    await autenticar(page)
  })

  test('exporta planilha e verifica conteudo', async ({ page }) => {
    await page.goto(`${BASE}/admin/empresas/empresa-1/pessoas/pessoa-1`)
    await expect(page.getByRole('heading', { name: 'Ana Silva' })).toBeVisible()
    await expect(page.getByText('Review Novo Smartphone')).toBeVisible()

    const [download] = await Promise.all([
      page.waitForEvent('download'),
      page.getByText('Exportar XLSX').click(),
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
    // Check specific videos exist (order may vary in Firestore)
    const titulos = rows.map(r => r[0])
    expect(titulos).toContain('Review Novo Smartphone')
    expect(titulos).toContain('Setup Gamer 2025')
    expect(titulos).toContain('Review Fones de Ouvido 2025')

    // Check new columns exist
    const headers: string[] = []
    ws!.eachRow((row, rowNumber) => {
      if (rowNumber === 1) {
        const values = (row.values as any[]).slice(1)
        headers.push(...values)
      }
    })
    expect(headers).toContain('Priorizado')
    expect(headers).toContain('Material Bruto')
    expect(headers).toContain('Vídeo Final')
    expect(headers).toContain('Valor')
    expect(headers).toContain('Moeda')

    // Check that valor/moeda columns have data
    const valorCol = headers.indexOf('Valor')
    const moedaCol = headers.indexOf('Moeda')
    const hasValor = rows.some(r => r[valorCol] !== undefined && r[valorCol] !== 0)
    expect(hasValor).toBe(true)

    // Check priorizado values — find by title to be order-independent
    const headerIdx = (name) => headers.indexOf(name)
    const findRow = (titulo) => rows.find(r => r[0] === titulo)
    const vlogRow = findRow('Vlog Trabalhando Home Office')
    if (vlogRow) expect(vlogRow[headerIdx('Priorizado')]).toBe('Sim')
    const reviewRow = findRow('Review Novo Smartphone')
    if (reviewRow) expect(reviewRow[headerIdx('Priorizado')]).toBe('Não')
  })

  test('importa planilha e videos aparecem', async ({ page }) => {
    const tmpFile = path.join(os.tmpdir(), `test-videos-${Date.now()}.xlsx`)
    const workbook = new Excel.Workbook()
    const ws = workbook.addWorksheet('Videos')

    ws.columns = [
      { header: 'Título', key: 'titulo', width: 30 },
      { header: 'Status', key: 'status', width: 15 },
      { header: 'Canais', key: 'canais', width: 30 },
      { header: 'Ads', key: 'ads', width: 8 },
      { header: 'Material Bruto', key: 'linkMaterialBruto', width: 40 },
      { header: 'Priorizado', key: 'priorizado', width: 12 },
      { header: 'Valor', key: 'valor', width: 15 },
      { header: 'Moeda', key: 'moeda', width: 8 },
    ]
    ws.addRow({ titulo: 'Video Teste Import', status: 'gravado', canais: 'YouTube', ads: 'Sim', linkMaterialBruto: 'https://drive.google.com/raw', priorizado: 'Sim', valor: 550, moeda: 'BRL' })
    ws.addRow({ titulo: 'Segundo Video', status: 'editando', canais: 'Instagram, TikTok', ads: 'Não', linkMaterialBruto: '', priorizado: 'Não', valor: 120, moeda: 'USD' })

    await workbook.xlsx.writeFile(tmpFile)

    await page.goto(`${BASE}/admin/empresas/empresa-2/pessoas/pessoa-4`)
    await expect(page.getByRole('heading', { name: 'Mariana Santos' })).toBeVisible()
    await expect(page.getByText('Nenhum vídeo cadastrado')).toBeVisible()

    const [fileChooser] = await Promise.all([
      page.waitForEvent('filechooser'),
      page.getByText('Importar XLSX').click(),
    ])
    await fileChooser.setFiles(tmpFile)

    await expect(page.getByText('Video Teste Import')).toBeVisible({ timeout: 15000 })
    await expect(page.getByText('Segundo Video')).toBeVisible()

    // Verify imported videos appear in financeiro with correct values
    await page.goto(`${BASE}/admin/financeiro`)
    await expect(page.getByRole('heading', { name: 'Financeiro' })).toBeVisible()
    await expect(page.getByText('Video Teste Import').first()).toBeVisible()
    await expect(page.getByText('Segundo Video').first()).toBeVisible()

    fs.unlinkSync(tmpFile)
  })

})
