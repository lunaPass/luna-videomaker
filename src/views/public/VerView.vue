<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import * as db from '@/firebase/db'
import { obterNotificacoes } from '@/firebase/notificacoes'
import { useWebPush } from '@/composables/useWebPush'
import StatusBadge from '@/components/admin/StatusBadge.vue'
import CanalTags from '@/components/admin/CanalTags.vue'
import StatusFilter from '@/components/public/StatusFilter.vue'
import type { Empresa } from '@/types/empresa'
import type { Pessoa } from '@/types/pessoa'
import type { Video, VideoStatus } from '@/types/video'
import { VIDEO_STATUS_LABELS, VIDEO_STATUS_ORDER } from '@/types/video'

const { supported, notify } = useWebPush()

const route = useRoute()
const loading = ref(true)
const error = ref('')

const empresa = ref<Empresa | null>(null)
const pessoas = ref<Pessoa[]>([])
const videos = ref<(Video & { pessoaNome: string })[]>([])
const empresaNome = ref('')
const pessoaNome = ref('')
const pessoaToken = ref('')
const filtroStatus = ref<VideoStatus | 'todos'>('todos')
const filtroPessoaId = ref<string>('todas')

let pollingTimer: ReturnType<typeof setInterval> | null = null

const isEmpresaMode = computed(() => empresa.value && !pessoaNome.value)

const statusCount = computed(() => {
  const acc: Record<string, number> = {}
  for (const v of videos.value) {
    acc[v.status] = (acc[v.status] || 0) + 1
  }
  return acc as Record<VideoStatus, number>
})

const videosFiltrados = computed(() => {
  return videos.value.filter((v) => {
    if (filtroStatus.value !== 'todos' && v.status !== filtroStatus.value) return false
    if (isEmpresaMode.value && filtroPessoaId.value !== 'todas' && v.pessoaId !== filtroPessoaId.value) return false
    return true
  })
})

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

  const emp = await db.getEmpresaByToken(token)
  if (emp) {
    empresa.value = emp
    const pessoasList = await db.listarPessoas(emp.id)
    pessoas.value = pessoasList
    videos.value = await db.listarVideosPorEmpresa(emp.id)
    loading.value = false
    return
  }

  const result = await db.getPessoaByToken(token)
  if (result) {
    empresaNome.value = (await db.getEmpresaById(result.empresaId))?.nome || ''
    pessoaNome.value = result.pessoa.nome
    const raw = await db.listarVideosPorEmpresa(result.empresaId)
    videos.value = raw.filter((v) => v.pessoaId === result.pessoa.id)
    loading.value = false

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
      <div v-if="loading" class="text-center py-12 text-gray-500">Carregando...</div>

      <div v-else-if="error" class="text-center py-12">
        <p class="text-red-600">{{ error }}</p>
      </div>

      <template v-else-if="empresa || pessoaNome">
        <!-- Heading -->
        <template v-if="pessoaNome">
          <p class="text-sm text-gray-500 mb-1">{{ empresaNome }}</p>
          <h1 class="text-xl md:text-2xl font-bold mb-6">{{ pessoaNome }}</h1>
        </template>
        <h1 v-else class="text-xl md:text-2xl font-bold mb-2">{{ empresa!.nome }}</h1>

        <!-- Dashboard -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          <button
            v-for="s in VIDEO_STATUS_ORDER"
            :key="s"
            @click="filtroStatus = filtroStatus === s ? 'todos' : s"
            :class="[
              'rounded-xl border p-4 text-left transition-all',
              filtroStatus === s
                ? 'ring-2 ring-blue-500 border-blue-500 bg-blue-50'
                : 'bg-white border-gray-200 hover:shadow-sm',
            ]"
          >
            <div class="text-2xl font-bold" :class="{
              'text-yellow-600': s === 'gravado',
              'text-blue-600': s === 'editando',
              'text-purple-600': s === 'revisao',
              'text-green-600': s === 'postado',
            }">
              {{ statusCount[s] || 0 }}
            </div>
            <div class="text-sm text-gray-500 mt-1">{{ VIDEO_STATUS_LABELS[s] }}</div>
          </button>
        </div>

        <!-- Filters -->
        <div class="flex flex-col sm:flex-row gap-3 mb-6">
          <StatusFilter v-model:selected="filtroStatus" :counts="statusCount" />
          <select
            v-if="isEmpresaMode && pessoas.length > 1"
            v-model="filtroPessoaId"
            class="sm:ml-auto px-3 py-1.5 rounded-lg border border-gray-300 text-sm bg-white text-gray-700"
          >
            <option value="todas">Todas as pessoas</option>
            <option v-for="p in pessoas" :key="p.id" :value="p.id">{{ p.nome }}</option>
          </select>
        </div>

        <!-- Video list -->
        <div v-if="videosFiltrados.length === 0" class="text-center py-12 text-gray-400">
          Nenhum vídeo cadastrado ainda
        </div>
        <div v-else class="space-y-3">
          <div
            v-for="video in videosFiltrados"
            :key="video.id"
            class="bg-white rounded-xl shadow-sm border p-4"
          >
            <div class="flex items-start justify-between gap-3">
              <div class="min-w-0">
                <div class="flex items-center gap-2 flex-wrap">
                  <h3 class="font-semibold">{{ video.titulo }}</h3>
                  <span
                    v-if="isEmpresaMode"
                    class="text-xs text-gray-400"
                  >{{ video.pessoaNome }}</span>
                </div>
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
        </div>
      </template>
    </main>
  </div>
</template>
