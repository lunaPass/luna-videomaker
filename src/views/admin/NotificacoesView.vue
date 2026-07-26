<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
import { ref, computed, onMounted } from 'vue'
import * as db from '@/firebase/db'
import type { NotificacaoAdmin } from '@/types/notificacao'
import LoadingSkeleton from '@/components/ui/LoadingSkeleton.vue'
import EmptyState from '@/components/ui/EmptyState.vue'

const notificacoes = ref<NotificacaoAdmin[]>([])
const loading = ref(true)
const filtroEmpresa = ref('')
const filtroLidas = ref<'todas' | 'lidas' | 'naoLidas'>('todas')

const empresas = computed(() => {
  const ids = [...new Set(notificacoes.value.map(n => n.empresaId).filter(Boolean))]
  return ids.map(id => ({ id, nome: notificacoes.value.find(n => n.empresaId === id)?.empresaNome || id }))
})

const filtradas = computed(() => {
  let lista = notificacoes.value
  if (filtroEmpresa.value) {
    lista = lista.filter(n => n.empresaId === filtroEmpresa.value)
  }
  if (filtroLidas.value === 'lidas') {
    lista = lista.filter(n => n.lida)
  } else if (filtroLidas.value === 'naoLidas') {
    lista = lista.filter(n => !n.lida)
  }
  return [...lista].reverse() // newest first
})

function formatDate(ts: number): string {
  return new Date(ts).toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' })
}

function tipoLabel(tipo: string): string {
  switch (tipo) {
    case 'priorizado': return t('notif.priorizou')
    case 'despriorizado': return t('notif.removeuPrioridade')
    case 'linkBruto': return t('notif.atualizouLink')
    default: return tipo
  }
}

async function marcarLida(n: NotificacaoAdmin) {
  if (n.lida) return
  await db.marcarNotificacaoAdminLida(n.empresaId, n.id)
  n.lida = true
}

async function marcarTodasLidas() {
  for (const empresaId of empresas.value.map(e => e.id)) {
    await db.marcarTodasNotificacoesAdminLidas(empresaId)
  }
  notificacoes.value.forEach(n => { n.lida = true })
}

async function limparAntigas() {
  for (const empresaId of empresas.value.map(e => e.id)) {
    await db.limparNotificacoesAdminAntigas(empresaId)
  }
  await carregar()
}

async function carregar() {
  try {
    notificacoes.value = await db.listarTodasNotificacoesAdmin()
  } catch (e) {
    console.error('Erro ao carregar notificacoes:', e)
  } finally {
    loading.value = false
  }
}

onMounted(carregar)
</script>

<template>
  <div>
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
      <h1 class="text-xl md:text-2xl font-bold">{{ t('notificacoes.title') }}</h1>
      <div class="flex gap-2 flex-wrap">
        <button
          @click="marcarTodasLidas"
          class="text-sm bg-surface-muted text-foreground-secondary px-3 py-2.5 rounded-lg hover:bg-surface-muted"
        >
          {{ t('notificacoes.marcarTodasLidas') }}
        </button>
        <button
          @click="limparAntigas"
          class="text-sm bg-surface-muted text-foreground-secondary px-3 py-2.5 rounded-lg hover:bg-surface-muted"
        >
          {{ t('notificacoes.limparAntigas') }}
        </button>
      </div>
    </div>

    <!-- Filters -->
    <div class="flex flex-col sm:flex-row gap-3 mb-4">
      <select
        v-model="filtroEmpresa"
        class="border border-border bg-surface text-foreground-secondary rounded-lg px-3 py-2.5 text-sm"
      >
        <option value="">{{ t('notificacoes.filtroEmpresa') }}</option>
        <option v-for="emp in empresas" :key="emp.id" :value="emp.id">
          {{ emp.nome }}
        </option>
      </select>
      <select
        v-model="filtroLidas"
        class="border border-border bg-surface text-foreground-secondary rounded-lg px-3 py-2.5 text-sm"
      >
        <option value="todas">{{ t('notificacoes.filtroLidas') }}</option>
        <option value="lidas">{{ t('notificacoes.lidas') }}</option>
        <option value="naoLidas">{{ t('notificacoes.naoLidas') }}</option>
      </select>
    </div>

    <LoadingSkeleton :loading="loading" type="table" :rows="5">
      <div v-if="filtradas.length === 0">
        <EmptyState :message="t('notificacoes.nenhuma')" />
      </div>

      <!-- Desktop table -->
      <div class="hidden md:block bg-surface rounded-xl shadow-sm dark:shadow-none border border-border overflow-hidden">
      <table class="w-full">
        <thead class="bg-surface-muted text-left text-sm font-medium text-foreground-muted">
          <tr>
            <th class="px-4 py-3 w-4"></th>
            <th class="px-4 py-3">{{ t('notificacoes.tipo') }}</th>
            <th class="px-4 py-3">{{ t('notificacoes.video') }}</th>
            <th class="px-4 py-3">{{ t('notificacoes.pessoa') }}</th>
            <th class="px-4 py-3">{{ t('notificacoes.empresa') }}</th>
            <th class="px-4 py-3">{{ t('notificacoes.data') }}</th>
          </tr>
        </thead>
        <tbody class="divide-y">
          <tr
            v-for="n in filtradas"
            :key="n.id"
            class="hover:bg-surface-muted cursor-pointer"
            :class="{ 'bg-primary-soft/30': !n.lida }"
            @click="marcarLida(n)"
          >
            <td class="px-4 py-3">
              <span v-if="!n.lida" class="w-2 h-2 rounded-full bg-primary inline-block" />
            </td>
            <td class="px-4 py-3 text-sm">{{ tipoLabel(n.tipo) }}</td>
            <td class="px-4 py-3 text-sm font-medium">{{ n.videoTitulo }}</td>
            <td class="px-4 py-3 text-sm text-foreground-secondary">{{ n.pessoaNome }}</td>
            <td class="px-4 py-3 text-sm text-foreground-secondary">{{ n.empresaNome }}</td>
            <td class="px-4 py-3 text-sm text-foreground-muted">{{ formatDate(n.timestamp) }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Mobile cards -->
    <div class="md:hidden space-y-3">
      <div
        v-for="n in filtradas"
        :key="n.id"
        class="bg-surface rounded-xl shadow-sm dark:shadow-none border border-border p-4 cursor-pointer"
        :class="{ 'bg-primary-soft/10 border-l-4 border-l-primary': !n.lida }"
        @click="marcarLida(n)"
      >
        <div class="flex items-center gap-2">
          <span v-if="!n.lida" class="w-2.5 h-2.5 rounded-full bg-primary shrink-0" />
          <span class="text-sm font-medium text-foreground truncate">{{ n.videoTitulo }}</span>
        </div>
        <div class="text-sm text-foreground-muted mt-1">{{ tipoLabel(n.tipo) }} · {{ n.pessoaNome }} · {{ n.empresaNome }}</div>
        <div class="text-xs text-muted mt-1">{{ formatDate(n.timestamp) }}</div>
      </div>
    </div>
    </LoadingSkeleton>
  </div>
</template>
