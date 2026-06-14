export interface Empresa {
  id: string
  nome: string
  slug: string
  token: string
  criadoEm: Date
}

export interface EmpresaFormData {
  nome: string
}
