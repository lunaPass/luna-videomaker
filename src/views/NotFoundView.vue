<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { auth } from '@/firebase/init'

const router = useRouter()
const isAuthenticated = computed(() => !!auth.currentUser)

function goBack() {
  if (isAuthenticated.value) {
    router.push('/admin/dashboard')
  } else {
    router.push('/login')
  }
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 px-4">
    <div class="w-full max-w-sm text-center">
      <svg class="mx-auto w-20 h-20 text-blue-600 mb-4" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="6" y="10" width="52" height="38" rx="4" fill="#2563eb" stroke="#1e40af" stroke-width="2"/>
        <rect x="6" y="10" width="52" height="38" rx="4" fill="none" stroke="#1e40af" stroke-width="2"/>
        <rect x="50" y="8" width="12" height="6" rx="1" fill="#1e40af" transform="rotate(-15 56 11)"/>
        <circle cx="26" cy="34" r="8" fill="#fbbf24"/>
        <polygon points="24,29 24,39 34,34" fill="#1e3a5f"/>
      </svg>

      <h1 class="text-6xl font-bold text-gray-300 mb-2">404</h1>
      <p class="text-xl text-gray-600 font-medium mb-1">Página não encontrada</p>
      <p class="text-gray-400 text-sm mb-8">
        {{ isAuthenticated ? 'Essa página não existe no painel administrativo.' : 'O link que você acessou não existe.' }}
      </p>

      <button
        @click="goBack"
        class="inline-flex items-center gap-2 bg-blue-600 text-white rounded-lg px-6 py-2.5 font-medium hover:bg-blue-700 transition-colors"
      >
        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        {{ isAuthenticated ? 'Ir para o Dashboard' : 'Ir para o Login' }}
      </button>
    </div>
  </div>
</template>
