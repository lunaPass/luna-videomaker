import * as XLSX from 'xlsx'

export function useXlsx() {
  const exportToXlsx = (data: any[], filename: string) => {
    const ws = XLSX.utils.json_to_sheet(data)
    const wb = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(wb, ws, 'Dados')
    XLSX.writeFile(wb, `${filename}.xlsx`)
  }

  const importFromXlsx = (file: File): Promise<any[]> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = (e) => {
        const data = e.target?.result
        const wb = XLSX.read(data, { type: 'binary' })
        const ws = wb.Sheets[wb.SheetNames[0]]
        const json = XLSX.utils.sheet_to_json(ws)
        resolve(json)
      }
      reader.onerror = reject
      reader.readAsBinaryString(file)
    })
  }

  return { exportToXlsx, importFromXlsx }
}
