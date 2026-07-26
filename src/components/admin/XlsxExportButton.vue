<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useXlsx } from '@/composables/useXlsx'
import type { XlsxColumn } from '@/composables/useXlsx'

const { t } = useI18n()
const { exportToXlsx } = useXlsx()

const props = defineProps<{
  dados: any[]
  nomeArquivo: string
  titulo: string
}>()

async function exportar() {
  const colunas: XlsxColumn[] = [
    { header: t('xlsx.columns.titulo'), key: 'titulo', width: 40 },
    { header: t('xlsx.columns.status'), key: 'status', width: 15 },
    {
      header: t('xlsx.columns.dataPostagem'),
      key: 'dataPostagem',
      width: 15,
      format: (v: Date | null) => (v ? v.toLocaleDateString('pt-BR') : ''),
    },
    {
      header: t('xlsx.columns.canais'),
      key: 'canais',
      width: 30,
      format: (v: string[]) => (Array.isArray(v) ? v.join(', ') : ''),
    },
    {
      header: t('xlsx.columns.ads'),
      key: 'ads',
      width: 8,
      format: (v: boolean) => (v ? t('common.yes') : t('common.no')),
    },
    { header: t('xlsx.columns.observacoes'), key: 'observacoes', width: 30 },
    { header: t('xlsx.columns.materialBruto'), key: 'linkMaterialBruto', width: 40 },
    { header: t('xlsx.columns.videoFinal'), key: 'linkVideoFinal', width: 40 },
    {
      header: t('xlsx.columns.priorizado'),
      key: 'priorizado',
      width: 12,
      format: (v: boolean) => (v ? t('common.yes') : t('common.no')),
    },
    { header: t('xlsx.columns.valor'), key: 'valor', width: 15 },
    { header: t('xlsx.columns.moeda'), key: 'moeda', width: 8 },
  ]

  await exportToXlsx(props.dados, colunas, props.nomeArquivo, t('xlsx.worksheet'))
}
</script>

<template>
  <button
    @click="exportar"
    class="text-sm bg-surface-muted text-foreground-secondary px-3 py-2.5 rounded-lg hover:bg-surface-muted"
  >
    📥 {{ titulo }}
  </button>
</template>
