<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import * as db from '@/firebase/db'
import { obterNotificacoes } from '@/firebase/notificacoes'
import { useWebPush } from '@/composables/useWebPush'
import StatusBadge from '@/components/admin/StatusBadge.vue'
import CanalTags from '@/components/admin/CanalTags.vue'
import type { Empresa } from '@/types/empresa'
import type { Pessoa } from '@/types/pessoa'
import type { Video } from '@/types/video'

const { supported, notify } = useWebPush()

const route = useRoute()
const loading = ref(true)
const error = ref('')

// Tokens
const empresaToken = ref('')
const pessoaToken = ref('')

// Empresa mode
const empresa = ref<Empresa | null>(null)
const pessoas = ref<Pessoa[]>([])

// Pessoa mode
const pessoaNome = ref('')
const empresaNome = ref('')
const videos = ref<Video[]>([])

let pollingTimer: ReturnType<typeof setInterval> | null = null

function getToken(): string {
  return (route.query.token as string) || ''
}

async function carregar() {
  const token = getToken()
  if (!token) {
    error.value = 'Link inválido: token não encontrado'
    loading.value = false
    return
  }

  // Try empresa token first
  const emp = await db.getEmpresaByToken(token)
  if (emp) {
    empresa.value = emp
    const pessoasList = await db.listarPessoas(emp.id)
    pessoas.value = pessoasList
    loading.value = false
    return
  }

  // Try pessoa token
  const result = await db.getPessoaByToken(token)
  if (result) {
    empresaNome.value = (await db.getEmpresaById(result.empresaId))?.nome || ''
    pessoaNome.value = result.pessoa.nome
    videos.value = await db.listarVideos(result.empresaId, result.pessoa.id)
    loading.value = false

    // Start polling for notifications (pessoa mode only)
    pessoaToken.value = result.pessoa.token
    verificarNotificacoes()
    pollingTimer = setInterval(verificarNotificacoes, 60000)
    return
  }

  error.value = 'Link inválido: token não reconhecido'
  loading.value = false
}

async function verificarNotificacoes() {
  if (!pessoaToken.value) return
  if (!supported.value) return

  const notificacoes = obterNotificacoes(pessoaToken.value)
  if (notificacoes.length === 0) return

  if (Notification.permission === 'default') {
    await Notification.requestPermission()
  }

  if (Notification.permission !== 'granted') return

  for (const n of notificacoes) {
    notify(`Status atualizado: ${n.videoTitulo}`, {
      body: `Mudou de "${n.statusAntigo}" para "${n.statusNovo}"`,
    })
  }
}

onMounted(carregar)

onUnmounted(() => {
  if (pollingTimer) {
    clearInterval(pollingTimer)
    pollingTimer = null
  }
})
</script>

<template>
  <div class="min-h-dvh bg-gray-50">
    <header class="bg-white border-b sticky top-0 z-10">
      <div class="max-w-4xl mx-auto px-4 py-3">
        <h1 class="text-lg font-bold text-gray-900">Luna Videomaker</h1>
      </div>
    </header>

    <main class="max-w-4xl mx-auto px-4 py-6">
      <!-- Loading -->
      <div v-if="loading" class="text-center py-12 text-gray-500">Carregando...</div>

      <!-- Error -->
      <div v-else-if="error" class="text-center py-12">
        <p class="text-red-600">{{ error }}</p>
      </div>

      <!-- Empresa View -->
      <div v-else-if="empresa && !pessoaNome">
        <h1 class="text-xl md:text-2xl font-bold mb-2">{{ empresa.nome }}</h1>
        <p class="text-gray-500 mb-6">Selecione uma pessoa para ver os vídeos</p>

        <div class="grid gap-3">
          <div
            v-for="pessoa in pessoas"
            :key="pessoa.id"
            class="bg-white rounded-xl shadow-sm border p-4 hover:shadow-md transition-shadow"
          >
            <a
              :href="`/luna-videomaker/v/${empresa.slug}?token=${pessoa.token}`"
              class="text-base md:text-lg font-semibold text-blue-600 hover:text-blue-800 block"
            >
              {{ pessoa.nome }}
            </a>
          </div>
          <p v-if="pessoas.length === 0" class="text-gray-400 text-center py-8">
            Nenhuma pessoa cadastrada ainda
          </p>
        </div>
      </div>

      <!-- Pessoa View -->
      <div v-else>
        <p class="text-sm text-gray-500 mb-1">{{ empresaNome }}</p>
        <h1 class="text-xl md:text-2xl font-bold mb-6">{{ pessoaNome }}</h1>

        <div class="space-y-3">
          <div
            v-for="video in videos"
            :key="video.id"
            class="bg-white rounded-xl shadow-sm border p-4"
          >
            <div class="flex items-start justify-between gap-3">
              <div class="min-w-0">
                <h3 class="font-semibold">{{ video.titulo }}</h3>
                <div class="flex flex-wrap items-center gap-2 mt-2">
                  <StatusBadge :status="video.status" />
                  <CanalTags :canais="video.canais" />
                  <span
                    v-if="video.ads"
                    class="px-2 py-0.5 bg-red-100 text-red-600 rounded text-xs font-medium"
                  >
                    Ads
                  </span>
                </div>
              </div>
              <div v-if="video.dataPostagem" class="text-sm text-gray-400 shrink-0">
                {{ video.dataPostagem.toLocaleDateString() }}
              </div>
            </div>
            <p v-if="video.observacoes" class="text-sm text-gray-500 mt-2">
              {{ video.observacoes }}
            </p>
          </div>
          <p v-if="videos.length === 0" class="text-gray-400 text-center py-8">
            Nenhum vídeo cadastrado ainda
          </p>
        </div>
      </div>
    </main>
  </div>
</template>
