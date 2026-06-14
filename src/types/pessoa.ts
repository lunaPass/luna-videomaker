export interface Pessoa {
  id: string
  nome: string
  token: string
  empresaId: string
  ordem: number
  criadoEm: Date
}

export interface PessoaFormData {
  nome: string
}
