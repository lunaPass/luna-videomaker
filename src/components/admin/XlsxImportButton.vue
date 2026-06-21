<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const emit = defineEmits<{
  imported: [dados: any[]]
}>()

const loading = ref(false)

async function handleFileUpload(event: Event) {
  const file = (event.target as HTMLInputElement).files?.[0]
  if (!file) return

  if (file.size > 10 * 1024 * 1024) {
    alert(t('xlsx.arquivoGrande'))
    return
  }

  loading.value = true
  try {
    const Excel = await import('exceljs').then(m => m.default)
    const buffer = await file.arrayBuffer()
    const workbook = new Excel.Workbook()
    await workbook.xlsx.load(buffer)
    const ws = workbook.getWorksheet(1)
    if (!ws) return

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

    emit('imported', json)
  } catch {
    alert(t('xlsx.erroArquivo'))
  } finally {
    loading.value = false
  }

  ;(event.target as HTMLInputElement).value = ''
}
</script>

<template>
  <label class="text-sm bg-gray-100 px-3 py-2 rounded-lg hover:bg-gray-200 cursor-pointer">
    📤 {{ loading ? t('xlsx.importando') : t('xlsx.importar') }}
    <input type="file" accept=".xlsx,.xls" class="hidden" @change="handleFileUpload" />
  </label>
</template>
