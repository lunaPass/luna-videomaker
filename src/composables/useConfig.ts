import { ref } from 'vue'
import type { Config } from '@/types/config'
import * as db from '@/firebase/db'

export function useConfig() {
  const config = ref<Config>({ canais: [], usdToBrl: 5.0, eurToBrl: 5.5 })
  const loading = ref(false)

  async function carregar() {
    loading.value = true
    config.value = await db.getConfig()
    loading.value = false
  }

  async function atualizarCanais(canais: string[]) {
    await db.atualizarCanais(canais)
    await carregar()
  }

  return { config, loading, carregar, atualizarCanais }
}
