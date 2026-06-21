<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const props = defineProps<{
  dados: any[]
  nomeArquivo: string
  titulo: string
}>()

async function exportar() {
  const Excel = await import('exceljs').then(m => m.default)
  const workbook = new Excel.Workbook()
  const ws = workbook.addWorksheet(t('xlsx.worksheet'))

  ws.columns = [
    { header: t('xlsx.columns.titulo'), key: 'titulo', width: 40 },
    { header: t('xlsx.columns.status'), key: 'status', width: 15 },
    { header: t('xlsx.columns.dataPostagem'), key: 'dataPostagem', width: 15 },
    { header: t('xlsx.columns.canais'), key: 'canais', width: 30 },
    { header: t('xlsx.columns.ads'), key: 'ads', width: 8 },
    { header: t('xlsx.columns.observacoes'), key: 'observacoes', width: 30 },
    { header: t('xlsx.columns.materialBruto'), key: 'linkMaterialBruto', width: 40 },
    { header: t('xlsx.columns.videoFinal'), key: 'linkVideoFinal', width: 40 },
    { header: t('xlsx.columns.priorizado'), key: 'priorizado', width: 12 },
    { header: t('xlsx.columns.valor'), key: 'valor', width: 15 },
    { header: t('xlsx.columns.moeda'), key: 'moeda', width: 8 },
  ]

  props.dados.forEach(d => {
    ws.addRow({
      titulo: d.titulo,
      status: d.status,
      dataPostagem: d.dataPostagem?.toLocaleDateString('pt-BR') ?? '',
      canais: Array.isArray(d.canais) ? d.canais.join(', ') : '',
      ads: d.ads ? t('common.yes') : t('common.no'),
      observacoes: d.observacoes ?? '',
      linkMaterialBruto: d.linkMaterialBruto ?? '',
      linkVideoFinal: d.linkVideoFinal ?? '',
      priorizado: d.priorizado ? t('common.yes') : t('common.no'),
      valor: d.valor ?? 0,
      moeda: d.moeda ?? 'BRL',
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
