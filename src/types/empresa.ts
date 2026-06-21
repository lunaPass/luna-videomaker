import type { Locale } from '@/locales'

export interface Empresa {
  id: string
  nome: string
  slug: string
  token: string
  locale: Locale
  criadoEm: Date
}

export interface EmpresaFormData {
  nome: string
  locale: Locale
}
