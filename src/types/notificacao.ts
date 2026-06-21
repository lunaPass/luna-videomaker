export interface Notificacao {
  videoTitulo: string
  statusAntigo: string
  statusNovo: string
  timestamp: number
}

export interface NotificacaoAdmin {
  id: string
  tipo: 'priorizado' | 'despriorizado' | 'linkBruto'
  videoId: string
  videoTitulo: string
  pessoaNome: string
  empresaNome: string
  empresaId: string
  pessoaId: string
  timestamp: number
  lida: boolean
  _token?: string
}
