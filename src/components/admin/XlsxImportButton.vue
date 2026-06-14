<script setup lang="ts">
import { ref } from 'vue'
import * as XLSX from 'xlsx'

const emit = defineEmits<{
  imported: [dados: any[]]
}>()

const loading = ref(false)

function handleFileUpload(event: Event) {
  const file = (event.target as HTMLInputElement).files?.[0]
  if (!file) return

  loading.value = true
  const reader = new FileReader()

  reader.onload = (e) => {
    const data = e.target?.result as ArrayBuffer
    const wb = XLSX.read(data, { type: 'array' })
    const ws = wb.Sheets[wb.SheetNames[0]]
    const json = XLSX.utils.sheet_to_json(ws)
    emit('imported', json)
    loading.value = false
  }

  reader.onerror = () => {
    loading.value = false
  }

  reader.readAsArrayBuffer(file)
  ;(event.target as HTMLInputElement).value = ''
}
</script>

<template>
  <label class="text-sm bg-gray-100 px-3 py-2 rounded-lg hover:bg-gray-200 cursor-pointer">
    📤 {{ loading ? 'Importando...' : 'Importar XLSX' }}
    <input type="file" accept=".xlsx,.xls" class="hidden" @change="handleFileUpload" />
  </label>
</template>
