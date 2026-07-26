import { ref, nextTick } from 'vue'
import { useI18n } from 'vue-i18n'
import router from '@/router'

const STORAGE_KEY = 'luna_tour_completed'
const tourActive = ref(false)
let introInstance: any = null

export function useTour() {
  const { t } = useI18n()

  function isCompleted(): boolean {
    return localStorage.getItem(STORAGE_KEY) === 'true'
  }

  function markCompleted() {
    localStorage.setItem(STORAGE_KEY, 'true')
  }

  function reset() {
    localStorage.removeItem(STORAGE_KEY)
  }

  async function start() {
    if (introInstance) return
    const introJs = (await import('intro.js')).default
    const steps = [1, 2, 3, 4, 5, 6, 7]
      .map((step) => ({
        element: document.querySelector(`[data-tour-step="${step}"]`) as HTMLElement,
        intro: t(`tour.passo${step}`),
      }))
      .filter((s) => s.element)

    introInstance = introJs.tour()
    introInstance.setOptions({
      steps,
      showBullets: true,
      showProgress: true,
      exitOnOverlayClick: true,
      keyboardNavigation: true,
      overlayOpacity: 0.3,
      nextLabel: t('tour.proximo'),
      prevLabel: t('tour.anterior'),
      doneLabel: t('tour.concluir'),
      skipLabel: t('tour.pular'),
    })

    introInstance.oncomplete(() => {
      markCompleted()
      tourActive.value = false
      introInstance = null
    })

    introInstance.onexit(() => {
      tourActive.value = false
      introInstance = null
    })

    tourActive.value = true
    introInstance.start()
  }

  function stop() {
    if (introInstance) {
      introInstance.exit()
      introInstance = null
    }
    tourActive.value = false
  }

  async function restart() {
    stop()
    reset()
    await router.push('/admin/dashboard')
    await nextTick()
    setTimeout(() => start(), 1200)
  }

  return { tourActive, start, stop, restart, isCompleted, markCompleted, reset }
}
