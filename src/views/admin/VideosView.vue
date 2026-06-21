<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import type { Video, VideoFormData, VideoStatus, Moeda } from '@/types/video'
import { MOEDA_SIMBOLO } from '@/types/video'
import * as db from '@/firebase/db'
import StatusBadge from '@/components/admin/StatusBadge.vue'
import CanalTags from '@/components/admin/CanalTags.vue'
import VideoForm from '@/components/admin/VideoForm.vue'

type VideoComNome = Video & { pessoaNome: string; empresaNome: string }

const { t } = useI18n()
const route = useRoute()
const router = useRouter()
const statusOptions: VideoStatus[] = ['gravado', 'editando', 'revisao', 'postado']

const videos = ref<VideoComNome[]>([])
const filterStatus = ref<VideoStatus | ''>('')
const filterEmpresa = ref('')
const empresas = ref<{ id: string; nome: string }[]>([])
const filtered = ref<VideoComNome[]>([])
const editingVideo = ref<Video | null>(null)
const deletingVideo = ref<Video | null>(null)
const salvando = ref(false)
const errorMessage = ref('')
const usdToBrl = ref(5.0)
const eurToBrl = ref(5.5)
const loading = ref(true)

const busca = ref('')
let buscaTimer: ReturnType<typeof setTimeout> | null = null
const currentPage = ref(1)
const pageSize = 20

const totalPages = computed(() => Math.ceil(filtered.value.length / pageSize))

const paginatedVideos = computed(() => {
  const start = (currentPage.value - 1) * pageSize
  return filtered.value.slice(start, start + pageSize)
})

watch(busca, () => {
  if (buscaTimer) clearTimeout(buscaTimer)
  buscaTimer = setTimeout(() => {
    currentPage.value = 1
    aplicarFiltro()
  }, 300)
})

function formatarValor(video: Video): string {
  const valor = video.valor ?? 0
  if (!valor) return '—'
  const simbolo = MOEDA_SIMBOLO[video.moeda]
  const formatted = valor.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
  if (video.moeda === 'BRL') return `${simbolo} ${formatted}`
  const taxa = video.moeda === 'USD' ? usdToBrl.value : eurToBrl.value
  const brl = (valor * taxa).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
  return `${simbolo} ${formatted} (R$ ${brl})`
}

function isVideoStatus(s: string): s is VideoStatus {
  return statusOptions.includes(s as VideoStatus)
}

async function listar() {
  try {
    videos.value = await db.listarTodosVideos()
    empresas.value = (await db.listarEmpresas()).map((e) => ({ id: e.id, nome: e.nome }))
    const config = await db.getConfig()
    usdToBrl.value = config.usdToBrl
    eurToBrl.value = config.eurToBrl
    aplicarFiltro()
  } catch {
    // Silently fail
  } finally {
    loading.value = false
  }
}

function aplicarFiltro() {
  const q = busca.value.toLowerCase().trim()
  filtered.value = videos.value.filter((v) => {
    if (filterStatus.value && v.status !== filterStatus.value) return false
    if (filterEmpresa.value && v.empresaId !== filterEmpresa.value) return false
    if (q) {
      const matchTitulo = v.titulo.toLowerCase().includes(q)
      const matchObs = v.observacoes.toLowerCase().includes(q)
      const matchEmpresa = v.empresaNome.toLowerCase().includes(q)
      const matchPessoa = v.pessoaNome.toLowerCase().includes(q)
      if (!matchTitulo && !matchObs && !matchEmpresa && !matchPessoa) return false
    }
    return true
  })
  if (currentPage.value > totalPages.value) {
    currentPage.value = 1
  }
}

function limparFiltro() {
  filterStatus.value = ''
  filterEmpresa.value = ''
  busca.value = ''
  router.replace({ name: 'Videos' })
  aplicarFiltro()
}

function setPage(page: number) {
  if (page < 1 || page > totalPages.value) return
  currentPage.value = page
  router.replace({
    name: 'Videos',
    query: {
      ...(filterStatus.value ? { status: filterStatus.value } : {}),
      ...(page > 1 ? { page: String(page) } : {}),
    },
  })
}

async function atualizarVideo(data: VideoFormData) {
  if (!editingVideo.value) return
  errorMessage.value = ''
  salvando.value = true
  const oldVideo = editingVideo.value
  try {
    await db.atualizarVideo(oldVideo.empresaId, oldVideo.pessoaId, oldVideo.id, data)
    if (data.status !== oldVideo.status) {
      await db.criarNotificacao(oldVideo.empresaId, oldVideo.pessoaId, {
        videoTitulo: data.titulo,
        statusAntigo: oldVideo.status,
        statusNovo: data.status,
        timestamp: Date.now(),
      })
    }
    editingVideo.value = null
    await listar()
  } catch (e: any) {
    errorMessage.value = t('videos.erroAtualizar') + (e?.message || t('common.unknown'))
  } finally {
    salvando.value = false
  }
}

async function confirmarExcluir() {
  if (!deletingVideo.value) return
  await db.excluirVideo(deletingVideo.value.empresaId, deletingVideo.value.pessoaId, deletingVideo.value.id)
  deletingVideo.value = null
  await listar()
}

function abrirEdicao(video: Video) {
  editingVideo.value = video
}

function findVideoById(id: string) {
  return videos.value.find((v) => v.id === id) || null
}

onMounted(async () => {
  const qStatus = route.query.status as string | undefined
  if (qStatus && isVideoStatus(qStatus)) {
    filterStatus.value = qStatus
  }
  const qPage = route.query.page as string | undefined
  if (qPage) {
    currentPage.value = parseInt(qPage) || 1
  }
  await listar()

  const editVideoId = route.query.editVideoId as string | undefined
  if (editVideoId) {
    const video = findVideoById(editVideoId)
    if (video) {
      editingVideo.value = video
    }
    router.replace({ name: 'Videos', query: { ...(filterStatus.value ? { status: filterStatus.value } : {}), ...(currentPage.value > 1 ? { page: String(currentPage.value) } : {}) } })
  }
})
</script>

<template>
  <div>
    <!-- Skeleton shimmer -->
    <div v-if="loading" class="animate-pulse space-y-6">
      <div class="h-8 w-48 skeleton-pulse" />
      <div class="flex gap-3">
        <div class="flex-1 h-10 skeleton-pulse rounded-lg" />
        <div class="w-40 h-10 skeleton-pulse rounded-lg" />
        <div class="w-48 h-10 skeleton-pulse rounded-lg" />
      </div>
      <div class="hidden md:block space-y-3">
        <div v-for="i in 6" :key="i" class="h-14 skeleton-pulse" />
      </div>
      <div class="md:hidden space-y-3">
        <div v-for="i in 3" :key="i" class="h-32 skeleton-pulse" />
      </div>
    </div>

    <template v-else>

    <h1 class="text-xl md:text-2xl font-bold mb-6">{{ t('videos.title') }}</h1>

    <div class="flex flex-col sm:flex-row gap-3 mb-4">
      <div class="relative flex-1">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400">
          <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
        <input
          v-model="busca"
          type="text"
          :placeholder="t('videos.buscar')"
          class="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
        />
      </div>
      <select
        v-model="filterStatus"
        @change="aplicarFiltro"
        class="border border-gray-300 rounded-lg px-3 py-2.5 text-sm bg-white"
      >
        <option value="">{{ t('videos.todosStatus') }}</option>
        <option v-for="s in statusOptions" :key="s" :value="s">
          {{ t('status.' + s) }}
        </option>
      </select>

      <select
        v-model="filterEmpresa"
        @change="aplicarFiltro"
        class="border border-gray-300 rounded-lg px-3 py-2.5 text-sm bg-white"
      >
        <option value="">{{ t('videos.todasEmpresas') }}</option>
        <option v-for="empresa in empresas" :key="empresa.id" :value="empresa.id">
          {{ empresa.nome }}
        </option>
      </select>

      <button
        v-if="filterStatus || filterEmpresa || busca"
        @click="limparFiltro"
        class="text-sm text-gray-500 hover:text-gray-700 px-3 py-2.5"
      >
        {{ t('videos.limparFiltros') }}
      </button>
    </div>

    <div v-if="errorMessage" class="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm">
      {{ errorMessage }}
    </div>

    <!-- Desktop table -->
    <div class="hidden md:block bg-white rounded-xl shadow-sm border overflow-hidden">
      <table class="w-full">
        <thead class="bg-gray-50 text-left text-sm font-medium text-gray-500">
          <tr>
            <th class="px-4 py-3 w-8"></th>
            <th class="px-4 py-3">{{ t('videos.th.titulo') }}</th>
            <th class="px-4 py-3">{{ t('videos.th.status') }}</th>
            <th class="px-4 py-3">{{ t('videos.th.canais') }}</th>
            <th class="px-4 py-3">{{ t('videos.th.postagem') }}</th>
            <th class="px-4 py-3">{{ t('videos.th.links') }}</th>
            <th class="px-4 py-3">{{ t('videos.th.valor') }}</th>
            <th class="px-4 py-3 w-20"></th>
          </tr>
        </thead>
        <tbody class="divide-y">
          <tr v-for="video in paginatedVideos" :key="video.id" class="hover:bg-gray-50">
            <td class="px-4 py-3">
              <span v-if="video.priorizado" class="text-yellow-500" :title="t('videos.priorizado')">
                <svg viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </span>
            </td>
            <td class="px-4 py-3 font-medium max-w-xs truncate">{{ video.titulo }}</td>
            <td class="px-4 py-3"><StatusBadge :status="video.status" /></td>
            <td class="px-4 py-3"><CanalTags :canais="video.canais" /></td>
            <td class="px-4 py-3 text-sm text-gray-500">
              {{ video.dataPostagem?.toLocaleDateString() || '—' }}
            </td>
            <td class="px-4 py-3 text-xs">
              <div class="flex flex-col gap-0.5">
                <a v-if="video.linkMaterialBruto" :href="video.linkMaterialBruto" target="_blank" class="text-blue-600 hover:underline">{{ t('videos.bruto') }}</a>
                <a v-if="video.linkVideoFinal" :href="video.linkVideoFinal" target="_blank" class="text-green-600 hover:underline">{{ t('videos.final') }}</a>
                <span v-if="!video.linkMaterialBruto && !video.linkVideoFinal" class="text-gray-400">—</span>
              </div>
            </td>
            <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">
              {{ formatarValor(video) }}
            </td>
            <td class="px-4 py-3">
              <div class="flex gap-1">
                <button
                  @click="abrirEdicao(video)"
                  class="p-1.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                  :aria-label="t('videos.editar')"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4">
                    <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/>
                    <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/>
                  </svg>
                </button>
                <button
                  @click="deletingVideo = video"
                  class="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                  :aria-label="t('videos.excluir')"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4">
                    <polyline points="3 6 5 6 21 6"/>
                    <path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"/>
                    <path d="M10 11v6"/><path d="M14 11v6"/>
                    <path d="M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2"/>
                  </svg>
                </button>
              </div>
            </td>
          </tr>
          <tr v-if="filtered.length === 0">
            <td colspan="8" class="px-4 py-8 text-center text-gray-400">
              {{ t('videos.nenhumVideo') }}
            </td>
          </tr>
          <tr v-if="filtered.length > 0 && paginatedVideos.length === 0">
            <td colspan="8" class="px-4 py-8 text-center text-gray-400">
              {{ t('videos.nenhumaPagina') }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Mobile cards -->
    <div class="md:hidden space-y-3">
      <div
        v-for="video in paginatedVideos"
        :key="video.id"
        class="bg-white rounded-xl shadow-sm border p-4"
      >
        <div class="flex items-center gap-1.5">
          <span v-if="video.priorizado" class="text-yellow-500 shrink-0" :title="t('videos.priorizado')">
            <svg viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </span>
          <div class="font-medium text-gray-900 flex-1">{{ video.titulo }}</div>
          <div class="flex gap-1 shrink-0">
            <button
              @click="abrirEdicao(video)"
              class="p-1.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
              :aria-label="t('videos.editar')"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4">
                <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/>
                <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/>
              </svg>
            </button>
            <button
              @click="deletingVideo = video"
              class="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
              :aria-label="t('videos.excluir')"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4">
                <polyline points="3 6 5 6 21 6"/>
                <path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"/>
                <path d="M10 11v6"/><path d="M14 11v6"/>
                <path d="M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2"/>
              </svg>
            </button>
          </div>
        </div>
        <div class="flex flex-wrap items-center gap-2 mt-2">
          <StatusBadge :status="video.status" />
          <CanalTags :canais="video.canais" />
          <span v-if="video.ads" class="px-2 py-0.5 bg-red-100 text-red-600 rounded text-xs font-medium">{{ t('videos.ads') }}</span>
        </div>
        <div class="flex flex-wrap gap-2 mt-1.5">
          <a v-if="video.linkMaterialBruto" :href="video.linkMaterialBruto" target="_blank" class="text-xs text-blue-600 hover:underline">{{ t('videos.materialBruto') }}</a>
          <a v-if="video.linkVideoFinal" :href="video.linkVideoFinal" target="_blank" class="text-xs text-green-600 hover:underline">{{ t('videos.videoFinal') }}</a>
        </div>
        <div v-if="video.dataPostagem" class="text-sm text-gray-400 mt-2">
          {{ video.dataPostagem.toLocaleDateString() }}
        </div>
        <div v-if="video.valor" class="text-sm font-medium text-gray-800 mt-1">
          {{ formatarValor(video) }}
        </div>
      </div>
      <p v-if="filtered.length === 0" class="text-gray-400 text-center py-8">
        {{ t('videos.nenhumVideo') }}
      </p>
    </div>

    <!-- Paginação -->
    <div v-if="totalPages > 1" class="flex items-center justify-center gap-2 mt-6">
      <button
        @click="setPage(currentPage - 1)"
        :disabled="currentPage === 1"
        class="px-3 py-1.5 text-sm rounded-lg border border-gray-300 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
      >
        {{ t('videos.anterior') }}
      </button>
      <button
        v-for="p in totalPages"
        :key="p"
        @click="setPage(p)"
        :class="[
          'px-3 py-1.5 text-sm rounded-lg border transition-colors min-w-[36px]',
          p === currentPage
            ? 'bg-blue-600 text-white border-blue-600'
            : 'border-gray-300 hover:bg-gray-50'
        ]"
      >
        {{ p }}
      </button>
      <button
        @click="setPage(currentPage + 1)"
        :disabled="currentPage === totalPages"
        class="px-3 py-1.5 text-sm rounded-lg border border-gray-300 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
      >
        {{ t('videos.proximo') }}
      </button>
    </div>

    <!-- Edit modal -->
    <VideoForm
      v-if="editingVideo"
      :video="editingVideo"
      :saving="salvando"
      @submit="atualizarVideo"
      @close="editingVideo = null"
    />

    <!-- Delete confirmation modal -->
    <div
      v-if="deletingVideo"
      class="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
      @click.self="deletingVideo = null"
    >
      <div class="bg-white rounded-xl p-6 w-full max-w-sm shadow-xl">
        <h2 class="text-lg font-bold mb-2">{{ t('videos.modalTitulo') }}</h2>
        <p class="text-sm text-gray-600 mb-6">
          {{ t('videos.confirmarExclusao') }} <strong>{{ deletingVideo.titulo }}</strong>?
        </p>
        <div class="flex justify-end gap-3">
          <button
            @click="deletingVideo = null"
            class="px-4 py-2 text-gray-600 hover:text-gray-800"
          >
            {{ t('common.cancel') }}
          </button>
          <button
            @click="confirmarExcluir"
            class="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            {{ t('common.excluir') }}
          </button>
        </div>
      </div>
    </div>
  </template>
</div>
</template>