<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
import { ref, onMounted } from 'vue'
import * as db from '@/firebase/db'
import { useCotacao } from '@/composables/useCotacao'

const canais = ref<string[]>([])
const novoCanal = ref('')
const saving = ref(false)
const usdToBrl = ref(5.0)
const eurToBrl = ref(5.5)
const cotacaoMsg = ref('')

const { atualizar, loading: cotacaoLoading } = useCotacao()

async function carregar() {
  const config = await db.getConfig()
  canais.value = config.canais
  usdToBrl.value = config.usdToBrl
  eurToBrl.value = config.eurToBrl
}

async function adicionarCanal() {
  const nome = novoCanal.value.trim()
  if (!nome || canais.value.includes(nome)) return
  canais.value.push(nome)
  novoCanal.value = ''
  await salvarCanais()
}

function removerCanal(canal: string) {
  canais.value = canais.value.filter((c) => c !== canal)
  salvarCanais()
}

async function salvarCanais() {
  saving.value = true
  await db.atualizarCanais(canais.value)
  saving.value = false
}

async function salvarTaxas() {
  saving.value = true
  await db.atualizarTaxasCambio(usdToBrl.value, eurToBrl.value)
  saving.value = false
    cotacaoMsg.value = t('config.taxasSalvas')
  setTimeout(() => (cotacaoMsg.value = ''), 3000)
}

async function buscarCotacao() {
  const result = await atualizar()
  if (result) {
    usdToBrl.value = result.usdToBrl
    eurToBrl.value = result.eurToBrl
    await db.atualizarTaxasCambio(result.usdToBrl, result.eurToBrl)
    cotacaoMsg.value = `${t('config.cotacaoAtualizada')} USD ${result.usdToBrl.toFixed(2)} | EUR ${result.eurToBrl.toFixed(2)}`
  } else {
    cotacaoMsg.value = t('config.erroCotacao')
  }
  setTimeout(() => (cotacaoMsg.value = ''), 5000)
}

onMounted(carregar)
</script>

<template>
  <div>
    <h1 class="text-2xl font-bold mb-6">{{ t('config.titulo') }}</h1>

    <div class="bg-white rounded-xl shadow-sm border p-6 max-w-lg mb-6">
      <h2 class="text-lg font-semibold mb-4">{{ t('config.canaisRedeSocial') }}</h2>

      <div class="flex gap-2 mb-4">
        <input
          v-model="novoCanal"
          type="text"
          :placeholder="t('config.novoCanal')"
          class="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          @keyup.enter="adicionarCanal"
        />
        <button
          @click="adicionarCanal"
          class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          {{ t('config.adicionar') }}
        </button>
      </div>

      <div class="space-y-2">
        <div
          v-for="canal in canais"
          :key="canal"
          class="flex items-center justify-between bg-gray-50 rounded-lg px-3 py-2"
        >
          <span>{{ canal }}</span>
          <button
            @click="removerCanal(canal)"
            class="text-red-500 hover:text-red-700 text-sm"
          >
            {{ t('config.remover') }}
          </button>
        </div>
        <p v-if="canais.length === 0" class="text-gray-400 text-sm">{{ t('config.nenhumCanal') }}</p>
      </div>
    </div>

    <div class="bg-white rounded-xl shadow-sm border p-6 max-w-lg">
      <h2 class="text-lg font-semibold mb-4">{{ t('config.taxasCambio') }}</h2>

      <div class="space-y-4 mb-4">
        <div>
          <label for="usd-input" class="block text-sm font-medium text-gray-700 mb-1">{{ t('config.usdParaBrl') }}</label>
          <input
            id="usd-input"
            v-model.number="usdToBrl"
            type="number"
            step="0.01"
            min="0"
            class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label for="eur-input" class="block text-sm font-medium text-gray-700 mb-1">{{ t('config.eurParaBrl') }}</label>
          <input
            id="eur-input"
            v-model.number="eurToBrl"
            type="number"
            step="0.01"
            min="0"
            class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div class="flex gap-3">
        <button
          @click="salvarTaxas"
          :disabled="saving"
          class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"
        >
          {{ t('config.salvarTaxas') }}
        </button>
        <button
          @click="buscarCotacao"
          :disabled="cotacaoLoading"
          class="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 disabled:opacity-50"
        >
          {{ cotacaoLoading ? t('config.buscando') : t('config.buscarCotacao') }}
        </button>
      </div>

      <p v-if="cotacaoMsg" class="text-sm text-gray-600 mt-3">{{ cotacaoMsg }}</p>
      <p v-if="saving" class="text-sm text-gray-500 mt-2">{{ t('common.saving') }}</p>
    </div>
  </div>
</template>
