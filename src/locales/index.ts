import { createI18n } from 'vue-i18n'
import ptBR from './pt-BR'
import en from './en'
import es from './es'

export type Locale = 'pt-BR' | 'en' | 'es'

export const LOCALE_OPTIONS: { value: Locale; label: string; flag: string }[] = [
  { value: 'pt-BR', label: 'Português', flag: '🇧🇷' },
  { value: 'en', label: 'English', flag: '🇺🇸' },
  { value: 'es', label: 'Español', flag: '🇪🇸' },
]

const messages = { 'pt-BR': ptBR, en, es }

function detectLocale(): Locale {
  const stored = localStorage.getItem('luna_locale') as Locale | null
  if (stored && messages[stored]) return stored

  const nav = navigator.language
  if (nav.startsWith('es')) return 'es'
  if (nav.startsWith('en')) return 'en'
  return 'pt-BR'
}

const i18n = createI18n({
  legacy: false,
  locale: detectLocale(),
  fallbackLocale: 'pt-BR',
  messages,
})

export default i18n
