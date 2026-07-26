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
import QuickCreateModal from '@/components/admin/QuickCreateModal.vue'
import ErrorMessage from '@/components/ui/ErrorMessage.vue'
import EmptyState from '@/components/ui/EmptyState.vue'
import LoadingSkeleton from '@/components/ui/LoadingSkeleton.vue'
import SearchInput from '@/components/ui/SearchInput.vue'
import Pagination from '@/components/ui/Pagination.vue'
import ConfirmDeleteModal from '@/components/ui/ConfirmDeleteModal.vue'

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
const showQuickCreate = ref(false)

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
  } catch (e) {
    console.error('Erro ao carregar videos:', e)
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
    <LoadingSkeleton :loading="loading" type="table" :rows="6">

    <h1 class="text-xl md:text-2xl font-bold mb-6">{{ t('videos.title') }}</h1>

    <div class="flex flex-col sm:flex-row gap-3 mb-4">
      <SearchInput v-model="busca" :placeholder="t('videos.buscar')" />
      <select
        v-model="filterStatus"
        @change="aplicarFiltro"
        class="border border-border bg-surface text-foreground-secondary rounded-lg px-3 py-2.5 text-sm"
      >
        <option value="">{{ t('videos.todosStatus') }}</option>
        <option v-for="s in statusOptions" :key="s" :value="s">
          {{ t('status.' + s) }}
        </option>
      </select>

      <select
        v-model="filterEmpresa"
        @change="aplicarFiltro"
        class="border border-border bg-surface text-foreground-secondary rounded-lg px-3 py-2.5 text-sm"
      >
        <option value="">{{ t('videos.todasEmpresas') }}</option>
        <option v-for="empresa in empresas" :key="empresa.id" :value="empresa.id">
          {{ empresa.nome }}
        </option>
      </select>

      <button
        @click="showQuickCreate = true"
        class="px-4 py-2.5 bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors text-sm font-medium whitespace-nowrap"
      >
        {{ t('pessoaDetail.novoVideo') }}
      </button>

      <button
        v-if="filterStatus || filterEmpresa || busca"
        @click="limparFiltro"
        class="text-sm text-foreground-muted hover:text-foreground-secondary px-3 py-2.5"
      >
        {{ t('videos.limparFiltros') }}
      </button>
    </div>

    <ErrorMessage :message="errorMessage" />

    <!-- Desktop table -->
    <div class="hidden md:block bg-surface rounded-xl shadow-sm dark:shadow-none border border-border overflow-hidden">
      <table class="w-full">
        <thead class="bg-surface-muted text-left text-sm font-medium text-foreground-muted">
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
          <tr v-for="video in paginatedVideos" :key="video.id" class="hover:bg-surface-muted">
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
            <td class="px-4 py-3 text-sm text-foreground-muted">
              {{ video.dataPostagem?.toLocaleDateString() || '—' }}
            </td>
            <td class="px-4 py-3 text-xs">
              <div class="flex flex-col gap-0.5">
                <a v-if="video.linkMaterialBruto" :href="video.linkMaterialBruto" target="_blank" class="text-primary hover:underline">{{ t('videos.bruto') }}</a>
                <a v-if="video.linkVideoFinal" :href="video.linkVideoFinal" target="_blank" class="text-green-600 hover:underline">{{ t('videos.final') }}</a>
                <span v-if="!video.linkMaterialBruto && !video.linkVideoFinal" class="text-gray-400">—</span>
              </div>
            </td>
            <td class="px-4 py-3 text-sm text-foreground-secondary whitespace-nowrap">
              {{ formatarValor(video) }}
            </td>
            <td class="px-4 py-3">
              <div class="flex gap-1">
                <button
                  @click="abrirEdicao(video)"
                  class="p-1.5 text-muted hover:text-primary hover:bg-primary-soft rounded-lg transition-colors"
                  :aria-label="t('videos.editar')"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4">
                    <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/>
                    <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/>
                  </svg>
                </button>
                <button
                  @click="deletingVideo = video"
                  class="p-1.5 text-muted hover:text-destructive hover:bg-destructive-soft rounded-lg transition-colors"
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
            <td colspan="8">
              <EmptyState :message="t('videos.nenhumVideo')" />
            </td>
          </tr>
          <tr v-if="filtered.length > 0 && paginatedVideos.length === 0">
            <td colspan="8">
              <EmptyState :message="t('videos.nenhumaPagina')" />
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
        class="bg-surface rounded-xl shadow-sm dark:shadow-none border border-border p-4"
      >
        <div class="flex items-center gap-1.5">
          <span v-if="video.priorizado" class="text-yellow-500 shrink-0" :title="t('videos.priorizado')">
            <svg viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </span>
          <div class="font-medium text-foreground flex-1">{{ video.titulo }}</div>
          <div class="flex gap-1 shrink-0">
            <button
              @click="abrirEdicao(video)"
              class="p-1.5 text-muted hover:text-primary hover:bg-primary-soft rounded-lg transition-colors"
              :aria-label="t('videos.editar')"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4">
                <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/>
                <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/>
              </svg>
            </button>
            <button
              @click="deletingVideo = video"
              class="p-1.5 text-muted hover:text-destructive hover:bg-destructive-soft rounded-lg transition-colors"
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
          <span v-if="video.ads" class="px-2 py-0.5 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded text-xs font-medium">{{ t('videos.ads') }}</span>
        </div>
        <div class="flex flex-wrap gap-2 mt-1.5">
          <a v-if="video.linkMaterialBruto" :href="video.linkMaterialBruto" target="_blank" class="text-xs text-primary hover:underline">{{ t('videos.materialBruto') }}</a>
          <a v-if="video.linkVideoFinal" :href="video.linkVideoFinal" target="_blank" class="text-xs text-green-600 hover:underline">{{ t('videos.videoFinal') }}</a>
        </div>
        <div v-if="video.dataPostagem" class="text-sm text-muted mt-2">
          {{ video.dataPostagem.toLocaleDateString() }}
        </div>
        <div v-if="video.valor" class="text-sm font-medium text-foreground mt-1">
          {{ formatarValor(video) }}
        </div>
      </div>
      <EmptyState v-if="filtered.length === 0" :message="t('videos.nenhumVideo')" />
    </div>

    <Pagination :current-page="currentPage" :total-pages="totalPages" @page-change="setPage" />

    <!-- Edit modal -->
    <VideoForm
      v-if="editingVideo"
      :video="editingVideo"
      :saving="salvando"
      @submit="atualizarVideo"
      @close="editingVideo = null"
    />

    <QuickCreateModal :show="showQuickCreate" @close="showQuickCreate = false" />

    <ConfirmDeleteModal
      :show="!!deletingVideo"
      :item-name="deletingVideo?.titulo || ''"
      item-type="video"
      @confirm="confirmarExcluir"
      @cancel="deletingVideo = null"
    />
  </LoadingSkeleton>
</div>
</template>