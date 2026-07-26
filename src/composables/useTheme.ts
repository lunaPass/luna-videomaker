import { ref, watch, onMounted, onUnmounted } from 'vue'

const STORAGE_KEY = 'luna_theme'

function getInitialDark(): boolean {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored === 'dark') return true
  if (stored === 'light') return false
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

function applyDark(dark: boolean) {
  document.documentElement.classList.toggle('dark', dark)
}

const isDark = ref(getInitialDark())

let mql: MediaQueryList | null = null
let mqlHandler: (() => void) | null = null

export function useTheme() {
  applyDark(isDark.value)

  function toggle() {
    isDark.value = !isDark.value
  }

  function setTheme(dark: boolean) {
    isDark.value = dark
  }

  watch(isDark, (val) => {
    applyDark(val)
    localStorage.setItem(STORAGE_KEY, val ? 'dark' : 'light')
  })

  onMounted(() => {
    mql = window.matchMedia('(prefers-color-scheme: dark)')
    mqlHandler = () => {
      if (!localStorage.getItem(STORAGE_KEY)) {
        isDark.value = mql!.matches
      }
    }
    mql.addEventListener('change', mqlHandler)
  })

  onUnmounted(() => {
    if (mql && mqlHandler) {
      mql.removeEventListener('change', mqlHandler)
    }
  })

  return { isDark, toggle, setTheme }
}
