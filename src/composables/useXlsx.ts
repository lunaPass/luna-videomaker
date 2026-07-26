export interface XlsxColumn {
  header: string
  key: string
  width?: number
  format?: (value: any, row: Record<string, any>) => string | number
}

export function useXlsx() {
  async function exportToXlsx(
    data: Record<string, any>[],
    columns: XlsxColumn[],
    filename: string,
    sheetName = 'Dados'
  ) {
    const Excel = await import('exceljs').then(m => m.default)
    const workbook = new Excel.Workbook()
    const ws = workbook.addWorksheet(sheetName)

    ws.columns = columns.map((c) => ({ header: c.header, key: c.key, width: c.width }))

    data.forEach((row) => {
      const formatted: Record<string, any> = {}
      columns.forEach((col) => {
        formatted[col.key] = col.format ? col.format(row[col.key], row) : row[col.key]
      })
      ws.addRow(formatted)
    })

    const buffer = await workbook.xlsx.writeBuffer()
    const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${filename}.xlsx`
    a.click()
    URL.revokeObjectURL(url)
  }

  async function importFromXlsx(file: File): Promise<any[]> {
    const Excel = await import('exceljs').then(m => m.default)
    const buffer = await file.arrayBuffer()
    const workbook = new Excel.Workbook()
    await workbook.xlsx.load(buffer)
    const ws = workbook.getWorksheet(1)
    if (!ws) return []

    const json: any[] = []
    let headers: string[] = []

    ws.eachRow({ includeEmpty: false }, (row, rowNumber) => {
      const values = (row.values as any[]).slice(1)
      if (rowNumber === 1) {
        headers = values.map(v => String(v ?? ''))
      } else {
        const obj: any = {}
        headers.forEach((h, i) => { obj[h] = values[i] })
        json.push(obj)
      }
    })

    return json
  }

  return { exportToXlsx, importFromXlsx }
}
