import i18n from '@/locales'

type MessageSchema = typeof import('@/locales/pt-BR').default

const t = i18n.global.t as (key: string) => string

export interface XlsxColumnMap {
  titulo: string
  status: string
  dataPostagem: string
  canais: string
  ads: string
  observacoes: string
  materialBruto: string
  videoFinal: string
  priorizado: string
  valor: string
  moeda: string
}

function col(key: string): string {
  return t(`xlsx.columns.${key}`)
}

export function getColumnHeaders(): XlsxColumnMap {
  return {
    titulo: col('titulo'),
    status: col('status'),
    dataPostagem: col('dataPostagem'),
    canais: col('canais'),
    ads: col('ads'),
    observacoes: col('observacoes'),
    materialBruto: col('materialBruto'),
    videoFinal: col('videoFinal'),
    priorizado: col('priorizado'),
    valor: col('valor'),
    moeda: col('moeda'),
  }
}

export function findHeader(row: Record<string, any>, key: keyof XlsxColumnMap): string | undefined {
  const allHeaders: Record<keyof XlsxColumnMap, string[]> = {
    titulo: ['Título', 'Title', 'Título'],
    status: ['Status', 'Status', 'Estado'],
    dataPostagem: ['Data Postagem', 'Publish Date', 'Fecha de Publicación'],
    canais: ['Canais', 'Channels', 'Canales'],
    ads: ['Ads', 'Ads', 'Ads'],
    observacoes: ['Observações', 'Notes', 'Observaciones'],
    materialBruto: ['Material Bruto', 'Raw Material', 'Material Bruto'],
    videoFinal: ['Vídeo Final', 'Final Video', 'Video Final'],
    priorizado: ['Priorizado', 'Prioritized', 'Priorizado'],
    valor: ['Valor', 'Value', 'Valor'],
    moeda: ['Moeda', 'Currency', 'Moneda'],
  }

  for (const h of allHeaders[key]) {
    if (row[h] !== undefined) return h
  }
  return undefined
}
