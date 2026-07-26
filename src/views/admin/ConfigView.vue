<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
import { ref, onMounted } from 'vue'
import * as db from '@/firebase/db'
import { useCotacao } from '@/composables/useCotacao'
import { useTour } from '@/composables/useTour'
import EmptyState from '@/components/ui/EmptyState.vue'

const canais = ref<string[]>([])
const novoCanal = ref('')
const saving = ref(false)
const usdToBrl = ref(5.0)
const eurToBrl = ref(5.5)
const cotacaoMsg = ref('')

const { atualizar, loading: cotacaoLoading } = useCotacao()
const { restart } = useTour()

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

    <div class="bg-surface rounded-xl shadow-sm dark:shadow-none border border-border p-6 max-w-lg mb-6">
      <h2 class="text-lg font-semibold mb-4">{{ t('config.canaisRedeSocial') }}</h2>

      <div class="flex gap-2 mb-4">
        <input
          v-model="novoCanal"
          type="text"
          :placeholder="t('config.novoCanal')"
          class="flex-1 border border-border bg-surface text-foreground rounded-lg px-3 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
          @keyup.enter="adicionarCanal"
        />
        <button
          @click="adicionarCanal"
          class="bg-primary text-white px-4 py-3 rounded-lg hover:bg-primary-hover"
        >
          {{ t('config.adicionar') }}
        </button>
      </div>

      <div class="space-y-2">
        <div
          v-for="canal in canais"
          :key="canal"
          class="flex items-center justify-between bg-surface-muted rounded-lg px-3 py-2"
        >
          <span class="text-foreground-secondary">{{ canal }}</span>
          <button
            @click="removerCanal(canal)"
            class="text-red-500 hover:text-red-700 text-sm"
          >
            {{ t('config.remover') }}
          </button>
        </div>
        <EmptyState v-if="canais.length === 0" :message="t('config.nenhumCanal')" />
      </div>
    </div>

    <div class="bg-surface rounded-xl shadow-sm dark:shadow-none border border-border p-6 max-w-lg">
      <h2 class="text-lg font-semibold mb-4">{{ t('config.taxasCambio') }}</h2>

      <div class="space-y-4 mb-4">
        <div>
          <label for="usd-input" class="block text-sm font-medium text-foreground-secondary mb-1">{{ t('config.usdParaBrl') }}</label>
          <input
            id="usd-input"
            v-model.number="usdToBrl"
            type="number"
            step="0.01"
            min="0"
            class="w-full border border-border bg-surface text-foreground rounded-lg px-3 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div>
          <label for="eur-input" class="block text-sm font-medium text-foreground-secondary mb-1">{{ t('config.eurParaBrl') }}</label>
          <input
            id="eur-input"
            v-model.number="eurToBrl"
            type="number"
            step="0.01"
            min="0"
            class="w-full border border-border bg-surface text-foreground rounded-lg px-3 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>

      <div class="flex gap-3">
        <button
          @click="salvarTaxas"
          :disabled="saving"
          class="bg-primary text-white px-4 py-3 rounded-lg hover:bg-primary-hover disabled:opacity-50"
        >
          {{ t('config.salvarTaxas') }}
        </button>
        <button
          @click="buscarCotacao"
          :disabled="cotacaoLoading"
          class="bg-green-600 text-white px-4 py-3 rounded-lg hover:bg-green-700 disabled:opacity-50"
        >
          {{ cotacaoLoading ? t('config.buscando') : t('config.buscarCotacao') }}
        </button>
      </div>

      <p v-if="cotacaoMsg" class="text-sm text-foreground-secondary mt-3">{{ cotacaoMsg }}</p>
      <p v-if="saving" class="text-sm text-foreground-muted mt-2">{{ t('common.saving') }}</p>
    </div>

    <div class="bg-surface rounded-xl shadow-sm dark:shadow-none border border-border p-6 max-w-lg mt-6">
      <h2 class="text-lg font-semibold mb-4">{{ t('tour.heading') }}</h2>
      <button
        @click="restart()"
        class="bg-primary text-white px-4 py-3 rounded-lg hover:bg-primary-hover"
      >
        {{ t('tour.reiniciar') }}
      </button>
    </div>
  </div>
</template>
