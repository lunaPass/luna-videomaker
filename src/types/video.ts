export type VideoStatus = 'gravado' | 'editando' | 'revisao' | 'postado'

export const VIDEO_STATUS_LABELS: Record<VideoStatus, string> = {
  gravado: 'Gravado',
  editando: 'Editando',
  revisao: 'Em Revisão',
  postado: 'Postado',
}

export const VIDEO_STATUS_ORDER: VideoStatus[] = ['gravado', 'editando', 'revisao', 'postado']

export type Moeda = 'BRL' | 'USD' | 'EUR'

export const MOEDA_SIMBOLO: Record<Moeda, string> = {
  BRL: 'R$',
  USD: 'US$',
  EUR: '€',
}

export interface Video {
  id: string
  titulo: string
  status: VideoStatus
  ordem: number
  dataPostagem: Date | null
  canais: string[]
  ads: boolean
  observacoes: string
  pessoaId: string
  empresaId: string
  criadoEm: Date
  atualizadoEm: Date
  priorizado: boolean
  linkMaterialBruto: string
  linkVideoFinal: string
  valor: number
  moeda: Moeda
}

export interface VideoFormData {
  titulo: string
  status: VideoStatus
  dataPostagem: string
  canais: string[]
  ads: boolean
  observacoes: string
  priorizado?: boolean
  linkMaterialBruto?: string
  linkVideoFinal?: string
  valor: number
  moeda: Moeda
}
