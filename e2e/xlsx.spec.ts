import { test, expect } from '@playwright/test'
import Excel from 'exceljs'
import * as path from 'path'
import * as fs from 'fs'
import * as os from 'os'

const BASE = '/luna-videomaker'

test.describe('XLSX Import/Export (local mode)', () => {

  test.beforeEach(async ({ page }) => {
    await page.addInitScript(() => {
      localStorage.setItem('luna_local_auth', JSON.stringify({ email: 'lunaheloisaa82@gmail.com' }))
    })
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

    expect(rows.length).toBe(4)
    expect(rows[0][0]).toBe('Review Novo Smartphone')
    expect(rows[3][0]).toBe('Setup Gamer 2025')
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
    ]
    ws.addRow({ titulo: 'Video Teste Import', status: 'gravado', canais: 'YouTube', ads: 'Sim' })
    ws.addRow({ titulo: 'Segundo Video', status: 'editando', canais: 'Instagram, TikTok', ads: 'Não' })

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

    fs.unlinkSync(tmpFile)
  })

})
