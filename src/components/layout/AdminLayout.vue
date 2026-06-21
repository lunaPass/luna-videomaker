<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useAuth } from '@/composables/useAuth'
import { useWebPush } from '@/composables/useWebPush'
import { useLocale } from '@/composables/useLocale'
import { LOCALE_OPTIONS } from '@/locales'
import type { Locale } from '@/locales'
import {
  listarTodasNotificacoesAdmin,
  marcarNotificacaoAdminLida,
  marcarTodasNotificacoesAdminLidas,
} from '@/firebase/db'
import type { NotificacaoAdmin } from '@/types/notificacao'

const { t } = useI18n()
const { logout } = useAuth()
const router = useRouter()
const { notify: notifyPush, request: requestPushPermission, supported } = useWebPush()
const { current: locale, set: setLocale } = useLocale()

const navItems = computed(() => [
  { label: t('nav.dashboard'), path: '/admin/dashboard', icon: 'dashboard' },
  { label: t('nav.empresas'), path: '/admin/empresas', icon: 'empresas' },
  { label: t('nav.videos'), path: '/admin/videos', icon: 'videos' },
  { label: t('nav.financeiro'), path: '/admin/financeiro', icon: 'financeiro' },
  { label: t('nav.config'), path: '/admin/config', icon: 'config' },
])

const icons: Record<string, string> = {
  dashboard: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>',
  empresas: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 6h6"/><path d="M9 10h6"/><path d="M9 14h6"/></svg>',
  videos: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><rect x="2" y="4" width="20" height="16" rx="3"/><path d="M10 9l6 3-6 3z"/></svg>',
  config: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>',
  financeiro: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>',
  sair: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>',
  sino: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/></svg>',
}

const notificacoes = ref<NotificacaoAdmin[]>([])
const showDropdown = ref(false)

const naoLidas = computed(() => notificacoes.value.filter((n) => !n.lida))

let pollingTimer: ReturnType<typeof setInterval> | null = null
let ultimoCount = 0

async function carregarNotificacoes() {
  notificacoes.value = await listarTodasNotificacoesAdmin()
  const count = naoLidas.value.length
  if (count > ultimoCount && ultimoCount > 0 && supported.value) {
    requestPushPermission()
    const novas = notificacoes.value.filter((n) => !n.lida).slice(0, count - ultimoCount)
    for (const n of novas) {
      const label =
        n.tipo === 'priorizado'
          ? t('notif.priorizou')
          : n.tipo === 'despriorizado'
            ? t('notif.removeuPrioridade')
            : t('notif.atualizouLink')
      notifyPush(`${n.pessoaNome} ${label} "${n.videoTitulo}"`)
    }
  }
  ultimoCount = count
}

function toggleDropdown() {
  showDropdown.value = !showDropdown.value
}

async function handleNotificacaoClick(n: NotificacaoAdmin) {
  await marcarNotificacaoAdminLida(n.empresaId, n.id)
  showDropdown.value = false
  router.push({ name: 'Videos', query: { editVideoId: n.videoId } })
}

async function marcarTodasLidas() {
  const empresas = [...new Set(notificacoes.value.map((n) => n.empresaId).filter(Boolean))]
  for (const eid of empresas) {
    await marcarTodasNotificacoesAdminLidas(eid)
  }
  await carregarNotificacoes()
}

function formatTimestamp(ts: number): string {
  const diff = Date.now() - ts
  const minutes = Math.floor(diff / 60000)
  if (minutes < 1) return t('notif.time.agora')
  if (minutes < 60) return `${minutes}${t('notif.time.min')}`
  const hours = Math.floor(minutes / 60)
  if (hours < 24) return `${hours}${t('notif.time.h')}`
  const days = Math.floor(hours / 24)
  return `${days}${t('notif.time.d')}`
}

function tipoLabel(tipo: string): string {
  switch (tipo) {
    case 'priorizado': return t('notif.priorizou')
    case 'despriorizado': return t('notif.removeuPrioridade')
    case 'linkBruto': return t('notif.atualizouLink')
    default: return tipo
  }
}

async function handleLogout() {
  await logout()
  router.push('/login')
}

function handleClickOutside(e: MouseEvent) {
  const target = e.target as HTMLElement
  if (!target.closest('[data-notification-bell]') && !target.closest('[data-notification-dropdown]')) {
    showDropdown.value = false
  }
}

onMounted(() => {
  useAuth()
  carregarNotificacoes()
  pollingTimer = setInterval(carregarNotificacoes, 30000)
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  if (pollingTimer) {
    clearInterval(pollingTimer)
    pollingTimer = null
  }
  document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <div class="min-h-dvh flex flex-col md:flex-row bg-gray-50">
    <!-- Desktop sidebar -->
    <aside class="hidden md:flex md:flex-col bg-gray-900 text-white md:w-64 shrink-0 min-h-0 md:h-dvh">
      <div class="p-4 text-lg font-bold border-b border-gray-700 shrink-0">
        {{ t('brand.name') }}
      </div>

      <!-- Scrollable area: nav items + notification panel -->
      <div class="flex-1 flex flex-col min-h-0 overflow-y-auto">
        <nav class="p-2 space-y-1">
          <router-link
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            class="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium"
            active-class="bg-gray-700"
          >
            <span v-html="icons[item.icon]" />
            <span>{{ item.label }}</span>
          </router-link>
        </nav>

        <!-- Notification panel (inline) -->
        <div
          v-if="showDropdown"
          data-notification-dropdown
          class="shrink-0 max-h-64 overflow-y-auto border-t border-gray-700"
        >
          <div class="sticky top-0 bg-gray-900 border-b border-gray-700 px-3 py-2 flex items-center justify-between">
            <span class="text-xs font-semibold text-gray-300">{{ t('notif.heading') }}</span>
            <button
              v-if="naoLidas.length > 0"
              @click="marcarTodasLidas"
              class="text-[10px] text-blue-400 hover:text-blue-300"
            >
              {{ t('notif.marcarLidas') }}
            </button>
          </div>
          <div v-if="notificacoes.length === 0" class="p-4 text-center text-xs text-gray-500">
            {{ t('notif.nenhuma') }}
          </div>
          <div v-else class="divide-y divide-gray-700">
            <button
              v-for="n in [...notificacoes].reverse()"
              :key="n.id"
              @click="handleNotificacaoClick(n)"
              class="w-full text-left px-3 py-2.5 hover:bg-gray-700 transition-colors"
              :class="{ 'bg-gray-800': !n.lida }"
            >
              <div class="flex items-start gap-2">
                <span
                  v-if="!n.lida"
                  class="mt-1 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0"
                />
                <span v-else class="mt-1 w-1.5 h-1.5 shrink-0" />
                <div class="min-w-0 flex-1">
                  <p class="text-[10px] font-medium text-gray-400">{{ n.pessoaNome }}</p>
                  <p class="text-xs text-gray-200 mt-0.5 line-clamp-2">
                    {{ tipoLabel(n.tipo) }}
                    <span class="font-medium">"{{ n.videoTitulo }}"</span>
                  </p>
                  <p class="text-[10px] text-gray-500 mt-0.5">{{ formatTimestamp(n.timestamp) }}</p>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>

      <!-- Bottom buttons -->
      <div class="shrink-0 p-2 space-y-1 border-t border-gray-700">
        <!-- Language selector -->
        <div class="px-2 py-1.5">
          <select
            :value="locale"
            @change="setLocale(($event.target as HTMLSelectElement).value as Locale)"
            class="w-full bg-gray-800 text-gray-300 border border-gray-600 rounded px-2 py-1.5 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-gray-500"
          >
            <option v-for="opt in LOCALE_OPTIONS" :key="opt.value" :value="opt.value">
              {{ opt.flag }} {{ opt.label }}
            </option>
          </select>
        </div>

        <button
          data-notification-bell
          @click="toggleDropdown"
          class="relative flex items-center gap-3 w-full px-3 py-2.5 rounded-lg hover:bg-gray-800 transition-colors text-gray-400 text-sm font-medium"
        >
          <span v-html="icons.sino" />
          <span>{{ t('notif.heading') }}</span>
          <span
            v-if="naoLidas.length > 0"
            class="ml-auto bg-red-500 text-white text-xs font-bold rounded-full min-w-[20px] h-5 flex items-center justify-center px-1"
          >
            {{ naoLidas.length > 99 ? '99+' : naoLidas.length }}
          </span>
        </button>
        <button
          @click="handleLogout"
          class="flex items-center gap-3 w-full px-3 py-2.5 rounded-lg hover:bg-gray-800 transition-colors text-gray-400 text-sm font-medium"
        >
          <span v-html="icons.sair" />
          <span>{{ t('nav.config') === 'Config' ? 'Sair' : t('nav.config') }}</span>
        </button>
      </div>
    </aside>

    <!-- Mobile header -->
    <header class="md:hidden flex items-center justify-between px-4 py-3 bg-white border-b sticky top-0 z-10">
      <h1 class="font-bold text-gray-900">{{ t('brand.name') }}</h1>
      <div class="flex items-center gap-2">
        <!-- Mobile language selector -->
        <select
          :value="locale"
          @change="setLocale(($event.target as HTMLSelectElement).value as Locale)"
          class="border border-gray-300 rounded px-1.5 py-1 text-xs"
        >
          <option v-for="opt in LOCALE_OPTIONS" :key="opt.value" :value="opt.value">
            {{ opt.flag }} {{ opt.label }}
          </option>
        </select>

        <button
          data-notification-bell
          @click="toggleDropdown"
          class="relative p-2 text-gray-500 hover:text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
          :aria-label="t('notif.heading')"
        >
          <span v-html="icons.sino" />
          <span
            v-if="naoLidas.length > 0"
            class="absolute -top-0.5 -right-0.5 bg-red-500 text-white text-[10px] font-bold rounded-full min-w-[16px] h-4 flex items-center justify-center px-0.5"
          >
            {{ naoLidas.length > 9 ? '9+' : naoLidas.length }}
          </span>
        </button>
        <button
          @click="handleLogout"
          class="p-2 text-gray-500 hover:text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
          :aria-label="'Sair'"
        >
          <span v-html="icons.sair" />
        </button>
      </div>
    </header>

    <!-- Main content -->
    <main class="flex-1 overflow-auto pb-20 md:pb-0 md:h-dvh">
      <div class="p-4 md:p-6 lg:p-8 max-w-6xl mx-auto">
        <router-view />
      </div>
    </main>

    <!-- Mobile bottom nav -->
    <nav
      class="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t flex items-center justify-around z-10"
      style="padding-bottom: env(safe-area-inset-bottom, 0px)"
    >
      <router-link
        v-for="item in navItems"
        :key="item.path"
        :to="item.path"
        class="flex flex-col items-center gap-0.5 py-2 px-2 text-[10px] font-medium text-gray-500 min-w-0 flex-1 transition-colors"
        active-class="text-blue-600"
      >
        <span v-html="icons[item.icon]" />
        <span class="truncate max-w-full leading-tight">{{ item.label }}</span>
      </router-link>
    </nav>

    <!-- Mobile notification overlay (bottom sheet) -->
    <Teleport to="body">
      <div v-if="showDropdown" class="md:hidden fixed inset-0 z-50 flex flex-col justify-end">
        <div class="absolute inset-0 bg-black/40" @click="showDropdown = false" />
        <div
          data-notification-dropdown
          class="relative bg-white rounded-t-2xl shadow-xl max-h-[70vh] flex flex-col"
        >
          <div class="sticky top-0 bg-white border-b rounded-t-2xl px-5 py-4 flex items-center justify-between shrink-0">
            <span class="font-semibold text-sm text-gray-900">{{ t('notif.heading') }}</span>
            <button
              v-if="naoLidas.length > 0"
              @click="marcarTodasLidas"
              class="text-xs text-blue-600 hover:text-blue-800"
            >
              {{ t('notif.marcarLidas') }}
            </button>
          </div>
          <div v-if="notificacoes.length === 0" class="p-6 text-center text-sm text-gray-400">
            {{ t('notif.nenhuma') }}
          </div>
          <div v-else class="overflow-y-auto divide-y">
            <button
              v-for="n in [...notificacoes].reverse()"
              :key="n.id"
              @click="handleNotificacaoClick(n)"
              class="w-full text-left px-5 py-3.5 hover:bg-gray-50 transition-colors"
              :class="{ 'bg-blue-50/50': !n.lida }"
            >
              <div class="flex items-start gap-3">
                <span
                  v-if="!n.lida"
                  class="mt-1.5 w-2 h-2 rounded-full bg-blue-500 shrink-0"
                />
                <span v-else class="mt-1.5 w-2 h-2 shrink-0" />
                <div class="min-w-0 flex-1">
                  <p class="text-xs font-medium text-gray-500">{{ n.pessoaNome }}</p>
                  <p class="text-sm text-gray-900 mt-0.5 line-clamp-2">
                    {{ tipoLabel(n.tipo) }}
                    <span class="font-medium">"{{ n.videoTitulo }}"</span>
                  </p>
                  <p class="text-xs text-gray-400 mt-1">{{ formatTimestamp(n.timestamp) }}</p>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>
