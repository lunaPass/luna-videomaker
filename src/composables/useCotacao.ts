import { ref } from 'vue'
import type { Moeda } from '@/types/video'

const CACHE_KEY = 'luna_cotacoes'
const CACHE_TTL = 60 * 60 * 1000
const FETCH_TIMEOUT = 10000

const DEFAULT_USD = 5.0
const DEFAULT_EUR = 5.5

const AWESOME_API = 'https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL'
const FALLBACK_API = 'https://api.exchangerate-api.com/v4/latest/USD'

interface CotacaoCache {
  usdToBrl: number
  eurToBrl: number
  timestamp: number
}

function lerCache(): CotacaoCache | null {
  try {
    const raw = localStorage.getItem(CACHE_KEY)
    if (!raw) return null
    const data: CotacaoCache = JSON.parse(raw)
    if (Date.now() - data.timestamp < CACHE_TTL) return data
    return null
  } catch {
    return null
  }
}

function salvarCache(usdToBrl: number, eurToBrl: number) {
  const data: CotacaoCache = { usdToBrl, eurToBrl, timestamp: Date.now() }
  localStorage.setItem(CACHE_KEY, JSON.stringify(data))
}

function fetchComTimeout(url: string, timeout: number): Promise<Response> {
  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), timeout)
  return fetch(url, { signal: controller.signal }).finally(() => clearTimeout(timeoutId))
}

async function fetchAwesomeApi(): Promise<{ usdToBrl: number; eurToBrl: number }> {
  const res = await fetchComTimeout(AWESOME_API, FETCH_TIMEOUT)
  if (!res.ok) throw new Error(`AwesomeAPI HTTP ${res.status}`)
  const json = await res.json()
  const usdBid = parseFloat(json.USDBRL?.bid ?? '0')
  const eurBid = parseFloat(json.EURBRL?.bid ?? '0')
  if (!usdBid || !eurBid) throw new Error('Resposta inválida da AwesomeAPI')
  return { usdToBrl: usdBid, eurToBrl: eurBid }
}

async function fetchFallbackApi(): Promise<{ usdToBrl: number; eurToBrl: number }> {
  const res = await fetchComTimeout(FALLBACK_API, FETCH_TIMEOUT)
  if (!res.ok) throw new Error(`Fallback API HTTP ${res.status}`)
  const json = await res.json()
  const brl = parseFloat(json.rates?.BRL ?? '0')
  const eur = parseFloat(json.rates?.EUR ?? '0')
  if (!brl || !eur) throw new Error('Resposta inválida da fallback API')
  return { usdToBrl: brl, eurToBrl: brl / eur }
}

export function converter(valor: number, de: Moeda, para: Moeda, usdToBrl: number, eurToBrl: number): number {
  if (de === para || !valor) return valor
  let emBrl: number
  if (de === 'BRL') emBrl = valor
  else if (de === 'USD') emBrl = valor * usdToBrl
  else emBrl = valor * eurToBrl
  if (para === 'BRL') return emBrl
  if (para === 'USD') return emBrl / usdToBrl
  return emBrl / eurToBrl
}

export function useCotacao() {
  const loading = ref(false)
  const error = ref('')

  const cache = lerCache()
  const usdToBrl = ref(cache?.usdToBrl ?? DEFAULT_USD)
  const eurToBrl = ref(cache?.eurToBrl ?? DEFAULT_EUR)

  async function atualizar(): Promise<{ usdToBrl: number; eurToBrl: number } | null> {
    loading.value = true
    error.value = ''
    try {
      let result: { usdToBrl: number; eurToBrl: number }
      try {
        result = await fetchAwesomeApi()
      } catch (primaryErr: any) {
        console.warn('[useCotacao] AwesomeAPI falhou, tentando fallback:', primaryErr?.message)
        try {
          result = await fetchFallbackApi()
        } catch (fallbackErr: any) {
          console.error('[useCotacao] Ambas APIs falharam:', fallbackErr?.message)
          throw fallbackErr
        }
      }
      usdToBrl.value = result.usdToBrl
      eurToBrl.value = result.eurToBrl
      salvarCache(result.usdToBrl, result.eurToBrl)
      return result
    } catch (e: any) {
      error.value = e?.message || 'Erro ao buscar cotação'
      console.error('[useCotacao]', e?.message || e)
      const cache = lerCache()
      if (cache) {
        usdToBrl.value = cache.usdToBrl
        eurToBrl.value = cache.eurToBrl
      }
      return null
    } finally {
      loading.value = false
    }
  }

  return { usdToBrl, eurToBrl, atualizar, loading, error }
}
