import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import type { Locale } from '@/locales'

const STORAGE_KEY = 'luna_locale'

export function useLocale() {
  const { locale } = useI18n()

  const current = computed<Locale>(() => locale.value as Locale)

  function set(l: Locale) {
    locale.value = l
    localStorage.setItem(STORAGE_KEY, l)
  }

  return { current, set }
}
