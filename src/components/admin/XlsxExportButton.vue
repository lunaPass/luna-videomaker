<script setup lang="ts">
import * as XLSX from 'xlsx'

const props = defineProps<{
  dados: any[]
  nomeArquivo: string
  titulo: string
}>()

function exportar() {
  const rows = props.dados.map((d) => ({
    Título: d.titulo,
    Status: d.status,
    'Data Postagem': d.dataPostagem?.toLocaleDateString('pt-BR') ?? '',
    Canais: Array.isArray(d.canais) ? d.canais.join(', ') : '',
    Ads: d.ads ? 'Sim' : 'Não',
    Observações: d.observacoes ?? '',
  }))

  const ws = XLSX.utils.json_to_sheet(rows)
  const wb = XLSX.utils.book_new()
  XLSX.utils.book_append_sheet(wb, ws, 'Vídeos')

  const colWidths = [
    { wch: 40 },
    { wch: 15 },
    { wch: 15 },
    { wch: 30 },
    { wch: 8 },
    { wch: 30 },
  ]
  ws['!cols'] = colWidths

  XLSX.writeFile(wb, `${props.nomeArquivo}.xlsx`)
}
</script>

<template>
  <button
    @click="exportar"
    class="text-sm bg-gray-100 px-3 py-2 rounded-lg hover:bg-gray-200"
  >
    📥 {{ titulo }}
  </button>
</template>
