<script setup lang="ts">
const props = defineProps<{
  dados: any[]
  nomeArquivo: string
  titulo: string
}>()

async function exportar() {
  const Excel = await import('exceljs').then(m => m.default)
  const workbook = new Excel.Workbook()
  const ws = workbook.addWorksheet('Vídeos')

  ws.columns = [
    { header: 'Título', key: 'titulo', width: 40 },
    { header: 'Status', key: 'status', width: 15 },
    { header: 'Data Postagem', key: 'dataPostagem', width: 15 },
    { header: 'Canais', key: 'canais', width: 30 },
    { header: 'Ads', key: 'ads', width: 8 },
    { header: 'Observações', key: 'observacoes', width: 30 },
  ]

  props.dados.forEach(d => {
    ws.addRow({
      titulo: d.titulo,
      status: d.status,
      dataPostagem: d.dataPostagem?.toLocaleDateString('pt-BR') ?? '',
      canais: Array.isArray(d.canais) ? d.canais.join(', ') : '',
      ads: d.ads ? 'Sim' : 'Não',
      observacoes: d.observacoes ?? '',
    })
  })

  const buffer = await workbook.xlsx.writeBuffer()
  const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `${props.nomeArquivo}.xlsx`
  a.click()
  URL.revokeObjectURL(url)
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
