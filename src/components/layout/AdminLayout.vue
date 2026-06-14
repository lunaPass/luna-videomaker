<script setup lang="ts">
import { useAuth } from '@/composables/useAuth'
import { useRouter } from 'vue-router'
import { onMounted } from 'vue'

const { logout } = useAuth()
const router = useRouter()

const navItems = [
  { label: 'Dashboard', path: '/admin/dashboard', icon: 'dashboard' },
  { label: 'Empresas', path: '/admin/empresas', icon: 'empresas' },
  { label: 'Vídeos', path: '/admin/videos', icon: 'videos' },
  { label: 'Config', path: '/admin/config', icon: 'config' },
]

const icons: Record<string, string> = {
  dashboard: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>',
  empresas: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 6h6"/><path d="M9 10h6"/><path d="M9 14h6"/></svg>',
  videos: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><rect x="2" y="4" width="20" height="16" rx="3"/><path d="M10 9l6 3-6 3z"/></svg>',
  config: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>',
  sair: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>',
}

async function handleLogout() {
  await logout()
  router.push('/login')
}

onMounted(() => {
  useAuth()
})
</script>

<template>
  <div class="min-h-dvh flex flex-col md:flex-row bg-gray-50">
    <!-- Desktop sidebar -->
    <aside class="hidden md:flex md:flex-col bg-gray-900 text-white md:w-64 shrink-0">
      <div class="p-4 text-lg font-bold border-b border-gray-700 shrink-0">
        Luna Videomaker
      </div>
      <nav class="flex-1 p-2 space-y-1 overflow-y-auto">
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
      <div class="p-4 border-t border-gray-700">
        <button
          @click="handleLogout"
          class="flex items-center gap-3 w-full px-3 py-2.5 rounded-lg hover:bg-gray-800 transition-colors text-gray-400 text-sm font-medium"
        >
          <span v-html="icons.sair" />
          <span>Sair</span>
        </button>
      </div>
    </aside>

    <!-- Mobile header -->
    <header class="md:hidden flex items-center justify-between px-4 py-3 bg-white border-b sticky top-0 z-10">
      <h1 class="font-bold text-gray-900">Luna Videomaker</h1>
      <button
        @click="handleLogout"
        class="p-2 text-gray-500 hover:text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
        aria-label="Sair"
      >
        <span v-html="icons.sair" />
      </button>
    </header>

    <!-- Main content -->
    <main class="flex-1 overflow-auto pb-20 md:pb-0">
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
  </div>
</template>
