import { isLocalMode } from './init'

export interface Notificacao {
  videoTitulo: string
  statusAntigo: string
  statusNovo: string
  timestamp: number
}

export function notificarMudancaStatus(
  pessoaToken: string,
  videoTitulo: string,
  statusAntigo: string,
  statusNovo: string
) {
  if (isLocalMode) {
    const key = `luna_notificacoes_${pessoaToken}`
    const lista: Notificacao[] = JSON.parse(localStorage.getItem(key) || '[]')
    lista.push({ videoTitulo, statusAntigo, statusNovo, timestamp: Date.now() })
    localStorage.setItem(key, JSON.stringify(lista))
    return
  }
}

export function obterNotificacoes(pessoaToken: string): Notificacao[] {
  if (isLocalMode) {
    const key = `luna_notificacoes_${pessoaToken}`
    const lista: Notificacao[] = JSON.parse(localStorage.getItem(key) || '[]')
    localStorage.removeItem(key)
    return lista
  }
  return []
}
