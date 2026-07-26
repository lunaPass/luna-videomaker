<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { login } from '@/firebase/auth'

const { t } = useI18n()

const email = ref('')
const password = ref('')
const error = ref('')
const loading = ref(false)
const showPassword = ref(false)
const router = useRouter()

onMounted(() => {
  document.querySelector<HTMLInputElement>('[autocomplete="email"]')?.focus()
})

async function handleSubmit() {
  error.value = ''
  loading.value = true
  try {
    await login(email.value, password.value)
    router.push('/admin/dashboard')
  } catch (e: any) {
    error.value = t('login.erroLogin')
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-violet-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 relative overflow-hidden">
    <!-- Background decoration -->
    <div class="absolute inset-0 pointer-events-none" aria-hidden="true">
      <div class="absolute -top-40 -right-40 w-80 h-80 bg-primary-soft dark:bg-primary-soft/20 rounded-full mix-blend-multiply opacity-50 blur-3xl" />
      <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-soft dark:bg-primary-soft/20 rounded-full mix-blend-multiply opacity-50 blur-3xl" />
    </div>

    <div
      class="relative w-full max-w-sm mx-4 animate-[fadeInUp_0.5s_ease-out]"
      :class="{ 'motion-safe:animate-[fadeInUp_0.5s_ease-out]': true }"
    >
      <div class="bg-surface rounded-2xl shadow-xl shadow-primary/5 dark:shadow-none border border-border p-10">
        <!-- Brand mark -->
        <div class="flex justify-center mb-6">
          <div class="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20">
            <svg viewBox="0 0 64 64" fill="none" class="w-8 h-8" aria-hidden="true">
              <rect x="2" y="12" width="48" height="36" rx="4" fill="white" />
              <circle cx="24" cy="33" r="9" fill="#2563eb" />
              <polygon points="22,28 22,38 32,33" fill="white" />
              <rect x="8" y="18" width="12" height="2" rx="1" fill="#C4B5FD" />
              <rect x="8" y="23" width="18" height="2" rx="1" fill="#C4B5FD" />
              <rect x="8" y="28" width="6" height="2" rx="1" fill="#C4B5FD" />
            </svg>
          </div>
        </div>

        <h1 class="text-2xl font-bold text-center text-foreground mb-1">
          {{ t('login.titulo') }}
        </h1>
        <p class="text-foreground-muted text-center text-base mb-8">
          {{ t('login.subtitulo') }}
        </p>

        <div v-if="error" role="alert" class="mb-6 p-3 bg-destructive-soft border border-destructive/30 rounded-lg flex items-center gap-2.5 text-sm text-destructive">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-5 h-5 shrink-0" aria-hidden="true">
            <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
          </svg>
          <span>{{ error }}</span>
        </div>

        <form @submit.prevent="handleSubmit" class="space-y-5">
          <div>
            <label for="login-email" class="block text-sm font-medium text-foreground-secondary mb-1.5">
              {{ t('login.email') }}
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 text-muted" aria-hidden="true">
                  <rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 4l-10 8L2 4"/>
                </svg>
              </div>
              <input
                id="login-email"
                v-model="email"
                type="email"
                autocomplete="email"
                required
              class="w-full pl-10 pr-3 py-3 border border-border bg-surface text-foreground rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-shadow duration-200"
              :placeholder="t('login.placeholderEmail')"
              />
            </div>
          </div>

          <div>
            <label for="login-password" class="block text-sm font-medium text-foreground-secondary mb-1.5">
              {{ t('login.senha') }}
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 text-muted" aria-hidden="true">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>
                </svg>
              </div>
              <input
                id="login-password"
                v-model="password"
                :type="showPassword ? 'text' : 'password'"
                autocomplete="current-password"
                required
                class="w-full pl-10 pr-10 py-3 border border-border bg-surface text-foreground rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-shadow duration-200"
                placeholder="********"
              />
              <button
                type="button"
                @click="showPassword = !showPassword"
                :aria-label="showPassword ? 'Esconder senha' : 'Mostrar senha'"
                class="absolute inset-y-0 right-0 flex items-center justify-center w-[44px] text-muted hover:text-foreground-secondary transition-colors"
              >
                <svg v-if="!showPassword" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4" aria-hidden="true">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
                </svg>
                <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4" aria-hidden="true">
                  <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"/>
                  <line x1="1" y1="1" x2="23" y2="23"/>
                </svg>
              </button>
            </div>
          </div>

          <button
            type="submit"
            :disabled="loading"
            class="w-full bg-primary text-white rounded-lg py-3 font-semibold text-base transition-all duration-200 hover:bg-primary-hover hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-md shadow-primary/20"
          >
            <span v-if="loading" class="inline-flex items-center gap-2">
              <svg class="animate-spin -ml-1 h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              {{ t('login.entrando') }}
            </span>
            <span v-else>{{ t('login.entrar') }}</span>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
