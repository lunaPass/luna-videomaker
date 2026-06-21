<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import type { Locale } from '@/locales'
import * as db from '@/firebase/db'
import { useWebPush } from '@/composables/useWebPush'
import StatusBadge from '@/components/admin/StatusBadge.vue'
import CanalTags from '@/components/admin/CanalTags.vue'
import StatusFilter from '@/components/public/StatusFilter.vue'
import type { Empresa } from '@/types/empresa'
import type { Pessoa } from '@/types/pessoa'
import type { Video, VideoStatus } from '@/types/video'
import { VIDEO_STATUS_ORDER } from '@/types/video'

const { t, locale: globalLocale } = useI18n()
const { supported, notify } = useWebPush()

const route = useRoute()
const loading = ref(true)
const error = ref('')

const empresa = ref<Empresa | null>(null)
const pessoas = ref<Pessoa[]>([])
const videos = ref<(Video & { pessoaNome: string })[]>([])
const empresaNome = ref('')
const empresaIdNotif = ref('')
const pessoaIdNotif = ref('')
const pessoaNome = ref('')
const pessoaToken = ref('')
const filtroStatus = ref<VideoStatus | 'todos'>('todos')
const filtroPriorizados = ref(false)
const filtroPessoaId = ref<string>('todas')
const busca = ref('')
const ordenacao = ref<'ordem' | 'data-desc' | 'data-asc' | 'az' | 'za' | 'status'>('ordem')
const pessoasExpandidas = ref<Set<string>>(new Set())
const editandoLink = ref<Record<string, boolean>>({})
const copiedLinkId = ref<string | null>(null)
const showBottomSheet = ref(false)

let pollingTimer: ReturnType<typeof setInterval> | null = null
let copyTimer: ReturnType<typeof setTimeout> | null = null
let savedAdminLocale: string | null = null

const isEmpresaMode = computed(() => empresa.value && !pessoaNome.value)

const statusCount = computed(() => {
  const acc: Record<string, number> = {}
  for (const v of videos.value) {
    acc[v.status] = (acc[v.status] || 0) + 1
  }
  return acc as Record<VideoStatus, number>
})

const priorizadosCount = computed(() => videos.value.filter(v => v.priorizado).length)

const videosFiltrados = computed(() => {
  let result = videos.value.filter((v) => {
    if (filtroStatus.value !== 'todos' && v.status !== filtroStatus.value) return false
    if (filtroPriorizados.value && !v.priorizado) return false
    if (isEmpresaMode.value && filtroPessoaId.value !== 'todas' && v.pessoaId !== filtroPessoaId.value) return false
    if (busca.value) {
      const q = busca.value.toLowerCase()
      if (!v.titulo.toLowerCase().includes(q) && !v.observacoes.toLowerCase().includes(q)) return false
    }
    return true
  })

  switch (ordenacao.value) {
    case 'data-desc':
      result.sort((a, b) => (b.dataPostagem?.getTime() || 0) - (a.dataPostagem?.getTime() || 0))
      break
    case 'data-asc':
      result.sort((a, b) => (a.dataPostagem?.getTime() || 0) - (b.dataPostagem?.getTime() || 0))
      break
    case 'az':
      result.sort((a, b) => a.titulo.localeCompare(b.titulo, 'pt-BR'))
      break
    case 'za':
      result.sort((a, b) => b.titulo.localeCompare(a.titulo, 'pt-BR'))
      break
    case 'status':
      result.sort((a, b) => VIDEO_STATUS_ORDER.indexOf(a.status) - VIDEO_STATUS_ORDER.indexOf(b.status))
      break
    default:
      result.sort((a, b) => a.ordem - b.ordem)
  }

  return result
})

const videosPorPessoa = computed(() => {
  const map = new Map<string, (Video & { pessoaNome: string })[]>()
  if (!isEmpresaMode.value) return map
  for (const v of videosFiltrados.value) {
    if (!map.has(v.pessoaId)) map.set(v.pessoaId, [])
    map.get(v.pessoaId)!.push(v)
  }
  return map
})

function getToken(): string {
  return (route.query.token as string) || ''
}

async function carregar() {
  try {
    const token = getToken()
    if (!token) {
      error.value = t('public.erroToken')
      loading.value = false
      return
    }

    const emp = await db.getEmpresaByToken(token)
    if (emp) {
      empresa.value = emp
      if (emp.locale && emp.locale !== globalLocale.value) {
        savedAdminLocale = globalLocale.value
        globalLocale.value = emp.locale
      }
      const pessoasList = await db.listarPessoas(emp.id)
      pessoas.value = pessoasList
      pessoasExpandidas.value = new Set(pessoasList.map(p => p.id))
      videos.value = await db.listarVideosPorEmpresa(emp.id)
      loading.value = false
      return
    }

    const result = await db.getPessoaByToken(token)
    if (result) {
      const emp = await db.getEmpresaById(result.empresaId)
      empresaNome.value = emp?.nome || ''
      if (emp?.locale && emp.locale !== globalLocale.value) {
        savedAdminLocale = globalLocale.value
        globalLocale.value = emp.locale
      }
      empresaIdNotif.value = result.empresaId
      pessoaIdNotif.value = result.pessoa.id
      pessoaNome.value = result.pessoa.nome
      const raw = await db.listarVideosPorEmpresa(result.empresaId)
      videos.value = raw.filter((v) => v.pessoaId === result.pessoa.id)
      loading.value = false

      pessoaToken.value = result.pessoa.token
      verificarNotificacoes()
      pollingTimer = setInterval(verificarNotificacoes, 60000)
      return
    }

    error.value = t('public.erroTokenReconhecido')
    loading.value = false
  } catch {
    error.value = t('public.erroCarregar')
    loading.value = false
  }
}

async function togglePriorizado(video: Video & { pessoaNome: string }) {
  const novo = !video.priorizado
  video.priorizado = novo
  const empresaId = empresa.value?.id || (await db.getEmpresaByToken(getToken()))?.id
  if (!empresaId) return
  try {
    await Promise.all([
      db.atualizarVideoPublic(empresaId, video.pessoaId, video.id, { priorizado: novo }, getToken()),
      db.criarNotificacaoAdmin(empresaId, {
        tipo: novo ? 'priorizado' : 'despriorizado',
        videoId: video.id,
        videoTitulo: video.titulo,
        pessoaNome: video.pessoaNome,
        empresaNome: empresa.value?.nome || '',
        empresaId,
        pessoaId: video.pessoaId,
        _token: getToken(),
      }),
    ])
  } catch (e) {
    console.error('Erro ao atualizar priorizado:', e)
    video.priorizado = !novo
  }
}

function iniciarEdicaoLink(videoId: string) {
  editandoLink.value[videoId] = true
}

function cancelarEdicaoLink(videoId: string) {
  editandoLink.value[videoId] = false
}

async function salvarLinkMaterialBruto(video: Video & { pessoaNome: string }, link: string) {
  video.linkMaterialBruto = link
  editandoLink.value[video.id] = false
  const empresaId = empresa.value?.id || (await db.getEmpresaByToken(getToken()))?.id
  if (!empresaId) return
  try {
    await Promise.all([
      db.atualizarVideoPublic(empresaId, video.pessoaId, video.id, { linkMaterialBruto: link }, getToken()),
      db.criarNotificacaoAdmin(empresaId, {
        tipo: 'linkBruto',
        videoId: video.id,
        videoTitulo: video.titulo,
        pessoaNome: video.pessoaNome,
        empresaNome: empresa.value?.nome || '',
        empresaId,
        pessoaId: video.pessoaId,
        _token: getToken(),
      }),
    ])
  } catch (e) {
    console.error('Erro ao salvar link:', e)
  }
}

async function copiarLink(videoId: string, url: string) {
  try {
    await navigator.clipboard.writeText(url)
    copiedLinkId.value = videoId
    if (copyTimer) clearTimeout(copyTimer)
    copyTimer = setTimeout(() => { copiedLinkId.value = null }, 2000)
  } catch {
    const ta = document.createElement('textarea')
    ta.value = url
    ta.style.position = 'fixed'
    ta.style.opacity = '0'
    document.body.appendChild(ta)
    ta.select()
    document.execCommand('copy')
    document.body.removeChild(ta)
    copiedLinkId.value = videoId
    if (copyTimer) clearTimeout(copyTimer)
    copyTimer = setTimeout(() => { copiedLinkId.value = null }, 2000)
  }
}

function togglePessoa(pessoaId: string) {
  const nova = new Set(pessoasExpandidas.value)
  if (nova.has(pessoaId)) {
    nova.delete(pessoaId)
  } else {
    nova.add(pessoaId)
  }
  pessoasExpandidas.value = nova
}

function togglePessoaAll(expand: boolean) {
  if (!isEmpresaMode.value) return
  const nova = new Set(expand ? pessoas.value.map(p => p.id) : [])
  pessoasExpandidas.value = nova
}

async function verificarNotificacoes() {
  if (!pessoaToken.value || !empresaIdNotif.value || !pessoaIdNotif.value) return
  if (!supported.value) return

  const notificacoes = await db.listarNotificacoes(empresaIdNotif.value, pessoaIdNotif.value)
  if (notificacoes.length === 0) return

  if (Notification.permission === 'default') {
    await Notification.requestPermission()
  }

  if (Notification.permission !== 'granted') return

  for (const n of notificacoes) {
    notify(t('public.statusAtualizado') + ': ' + n.videoTitulo, {
      body: t('public.mudouStatus', { antigo: n.statusAntigo, novo: n.statusNovo }),
    })
  }
}

const sortOptions = computed(() => [
  { value: 'ordem', label: t('public.ordemPadrao') },
  { value: 'data-desc', label: t('public.dataDesc') },
  { value: 'data-asc', label: t('public.dataAsc') },
  { value: 'az', label: t('public.aZ') },
  { value: 'za', label: t('public.zA') },
  { value: 'status', label: t('public.porStatus') },
] as const)

function selecionarStatus(status: VideoStatus | 'todos') {
  filtroStatus.value = status
  filtroPriorizados.value = false
}

function togglePriorizados() {
  filtroPriorizados.value = !filtroPriorizados.value
  if (filtroPriorizados.value) {
    filtroStatus.value = 'todos'
  }
}

function limparFiltros() {
  filtroStatus.value = 'todos'
  filtroPriorizados.value = false
  filtroPessoaId.value = 'todas'
  showBottomSheet.value = false
}

globalLocale.value = 'pt-BR'
onMounted(carregar)

onUnmounted(() => {
  if (savedAdminLocale) {
    globalLocale.value = savedAdminLocale
  }
  if (pollingTimer) {
    clearInterval(pollingTimer)
    pollingTimer = null
  }
  if (copyTimer) {
    clearTimeout(copyTimer)
    copyTimer = null
  }
})
</script>

<template>
  <div class="min-h-dvh bg-gray-50">
    <header class="bg-white border-b sticky top-0 z-10">
      <div class="max-w-4xl mx-auto px-4 py-3">
        <h1 class="text-lg font-bold text-gray-900">{{ t('public.titulo') }}</h1>
      </div>
    </header>

    <main class="max-w-4xl mx-auto px-4 py-6 pb-6">
      <!-- Skeleton shimmer -->
      <div v-if="loading" class="animate-pulse space-y-6">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div v-for="i in 4" :key="i" class="h-20 skeleton-pulse" />
        </div>
        <div class="flex gap-3">
          <div class="flex-1 h-10 skeleton-pulse" />
          <div class="w-32 h-10 skeleton-pulse" />
        </div>
        <div class="flex gap-2">
          <div v-for="i in 5" :key="i" class="h-8 w-20 skeleton-pulse rounded-full" />
        </div>
        <div class="space-y-3">
          <div v-for="i in 3" :key="i" class="h-32 skeleton-pulse" />
        </div>
      </div>

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

        <!-- Search + Sort -->
        <div class="flex flex-col sm:flex-row gap-3 mb-4">
          <div class="relative flex-1">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400">
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            <input
              v-model="busca"
              type="text"
              :placeholder="t('public.buscar')"
              class="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            />
          </div>
          <select
            v-model="ordenacao"
            class="px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white text-gray-700"
          >
            <option v-for="opt in sortOptions" :key="opt.value" :value="opt.value">
              {{ opt.label }}
            </option>
          </select>
        </div>

        <!-- Filters: inline on desktop -->
        <div class="hidden sm:flex flex-col sm:flex-row gap-3 mb-6">
          <div class="flex overflow-x-auto gap-2 pb-1 scrollbar-hide">
              <StatusFilter
                :selected="filtroStatus"
                :counts="statusCount"
                :priorizados-ativo="filtroPriorizados"
                :priorizados-count="priorizadosCount"
                @update:selected="selecionarStatus"
                @update:priorizados="togglePriorizados"
              />
          </div>
          <div v-if="isEmpresaMode && pessoas.length > 1" class="sm:ml-auto flex items-center gap-2">
            <select
              v-model="filtroPessoaId"
              class="px-3 py-1.5 rounded-lg border border-gray-300 text-sm bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="todas">{{ t('public.todasPessoas') }}</option>
              <option v-for="p in pessoas" :key="p.id" :value="p.id">{{ p.nome }}</option>
            </select>
          </div>
        </div>

        <!-- Mobile filter trigger -->
        <button
          v-if="isEmpresaMode || pessoas.length > 0"
          @click="showBottomSheet = true"
          class="sm:hidden w-full mb-4 px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm text-gray-600 flex items-center gap-2 active:bg-gray-50"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-4 h-4">
            <path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z"/>
          </svg>
          <span class="flex-1 text-left">{{ t('public.filtros') }}</span>
          <span class="text-xs text-gray-400">
            {{ filtroStatus !== 'todos' ? t('status.' + filtroStatus) : t('public.filtroStatus') }}
            <template v-if="filtroPriorizados || filtroPessoaId !== 'todas'">, +{{ [filtroPriorizados, filtroPessoaId !== 'todas'].filter(Boolean).length }}</template>
          </span>
        </button>

        <!-- Video list: accordion by person (empresa mode) -->
        <template v-if="isEmpresaMode">
          <div v-if="videosPorPessoa.size === 0" class="text-center py-12 text-gray-400">
            {{ t('public.nenhumVideo') }}
          </div>
          <div v-else class="space-y-4">
            <div
              v-for="[pessoaId, pessoaVideos] in videosPorPessoa"
              :key="pessoaId"
              class="bg-white rounded-xl shadow-sm border overflow-hidden"
            >
              <button
                @click="togglePessoa(pessoaId)"
                class="w-full flex items-center justify-between px-4 py-3 bg-gray-50 hover:bg-gray-100 transition-colors text-left"
              >
                <span class="font-semibold text-gray-900">
                  {{ pessoaVideos[0]?.pessoaNome || '—' }}
                  <span class="text-sm font-normal text-gray-500 ml-2">({{ pessoaVideos.length }})</span>
                </span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  class="w-4 h-4 text-gray-400 transition-transform duration-300"
                  :class="{ 'rotate-180': pessoasExpandidas.has(pessoaId) }"
                >
                  <polyline points="6 9 12 15 18 9"/>
                </svg>
              </button>
              <Transition name="accordion">
                <div v-if="pessoasExpandidas.has(pessoaId)" class="divide-y">
                  <div
                    v-for="video in pessoaVideos"
                    :key="video.id"
                    class="px-4 py-4"
                  >
                    <div class="flex items-start justify-between gap-3">
                      <div class="min-w-0 flex-1">
                        <div class="flex items-center gap-2">
                          <button
                            @click="togglePriorizado(video)"
                            :title="video.priorizado ? t('public.removerPrioridade') : t('public.priorizar')"
                            class="shrink-0 min-h-[44px] min-w-[44px] flex items-center justify-center -ml-2 -my-1"
                          >
                            <svg
                              v-if="video.priorizado"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              class="w-5 h-5 text-yellow-500 hover:text-yellow-600 transition-colors"
                            >
                              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                            </svg>
                            <svg
                              v-else
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              class="w-5 h-5 text-gray-300 hover:text-yellow-500 transition-colors"
                            >
                              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                            </svg>
                          </button>
                          <h3 class="font-semibold">{{ video.titulo }}</h3>
                        </div>
                        <div class="flex flex-wrap items-center gap-2 mt-2">
                          <StatusBadge :status="video.status" />
                          <CanalTags :canais="video.canais" />
                          <span
                            v-if="video.ads"
                            class="px-2 py-0.5 bg-red-100 text-red-600 rounded text-xs font-medium"
                          >
                            {{ t('public.ads') }}
                          </span>
                        </div>
                        <p v-if="video.observacoes" class="text-sm text-gray-500 mt-2">
                          {{ video.observacoes }}
                        </p>

                        <!-- Drive links -->
                        <div class="flex flex-col gap-2 mt-3">
                          <!-- Link Material Bruto -->
                          <div class="flex items-center gap-2">
                            <span class="text-xs text-gray-500 font-medium shrink-0">{{ t('public.materialBruto') }}</span>
                            <template v-if="editandoLink[video.id]">
                              <input
                                :value="video.linkMaterialBruto"
                                @keydown.enter="(e) => salvarLinkMaterialBruto(video, (e.target as HTMLInputElement).value)"
                                @keydown.escape="cancelarEdicaoLink(video.id)"
                                @blur="(e) => salvarLinkMaterialBruto(video, (e.target as HTMLInputElement).value)"
                                type="url"
                                class="flex-1 min-w-0 px-2 py-1 text-xs border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                                :placeholder="t('public.placeholderLink')"
                              />
                            </template>
                            <template v-else>
                              <div class="flex items-center gap-1 min-w-0 flex-1 group">
                                <a
                                  v-if="video.linkMaterialBruto"
                                  :href="video.linkMaterialBruto"
                                  target="_blank"
                                  class="text-xs text-blue-600 hover:underline truncate"
                                >
                                  {{ video.linkMaterialBruto }}
                                </a>
                                <span v-else class="text-xs text-gray-400 italic">{{ t('public.nenhumLink') }}</span>
                                <button
                                  v-if="video.linkMaterialBruto"
                                  @click="copiarLink(video.id, video.linkMaterialBruto)"
                                  class="shrink-0 text-gray-300 hover:text-blue-600 transition-colors p-1 -m-1"
                                  :title="copiedLinkId === video.id ? t('common.copied') : t('common.copyLink')"
                                >
                                  <svg v-if="copiedLinkId === video.id" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-3.5 h-3.5 text-green-500">
                                    <polyline points="20 6 9 17 4 12"/>
                                  </svg>
                                  <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-3.5 h-3.5">
                                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/>
                                  </svg>
                                </button>
                                <button
                                  @click="iniciarEdicaoLink(video.id)"
                                  class="shrink-0 text-gray-400 hover:text-blue-600 transition-colors p-1 -m-1"
                                  :title="t('public.editarLink')"
                                >
                                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-3.5 h-3.5">
                                    <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/>
                                    <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/>
                                  </svg>
                                </button>
                              </div>
                            </template>
                          </div>

                          <!-- Link Video Final -->
                          <div v-if="video.linkVideoFinal" class="flex items-center gap-2">
                            <span class="text-xs text-gray-500 font-medium shrink-0">{{ t('public.videoFinal') }}</span>
                            <div class="flex items-center gap-1 min-w-0 flex-1 group">
                              <a
                                :href="video.linkVideoFinal"
                                target="_blank"
                                class="text-xs text-green-600 hover:underline truncate"
                              >
                                {{ video.linkVideoFinal }}
                              </a>
                              <button
                                @click="copiarLink(video.id, video.linkVideoFinal)"
                                class="shrink-0 text-gray-300 hover:text-green-600 transition-colors p-1 -m-1"
                                :title="copiedLinkId === video.id ? t('common.copied') : t('common.copyLink')"
                              >
                                <svg v-if="copiedLinkId === video.id" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-3.5 h-3.5 text-green-500">
                                  <polyline points="20 6 9 17 4 12"/>
                                </svg>
                                <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-3.5 h-3.5">
                                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/>
                                </svg>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div v-if="video.dataPostagem" class="text-sm text-gray-400 shrink-0">
                        {{ video.dataPostagem.toLocaleDateString() }}
                      </div>
                    </div>
                  </div>
                </div>
              </Transition>
            </div>
          </div>
        </template>

        <!-- Video list: flat (pessoa mode) -->
        <template v-else>
          <div v-if="videosFiltrados.length === 0" class="text-center py-12 text-gray-400">
            {{ t('public.nenhumVideo') }}
          </div>
          <div v-else class="space-y-3">
            <div
              v-for="video in videosFiltrados"
              :key="video.id"
              class="bg-white rounded-xl shadow-sm border p-4"
            >
              <div class="flex items-start justify-between gap-3">
                <div class="min-w-0 flex-1">
                  <div class="flex items-center gap-2">
                    <button
                      @click="togglePriorizado(video)"
                      :title="video.priorizado ? t('public.removerPrioridade') : t('public.priorizar')"
                      class="shrink-0 min-h-[44px] min-w-[44px] flex items-center justify-center -ml-2 -my-1"
                    >
                      <svg
                        v-if="video.priorizado"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="w-5 h-5 text-yellow-500 hover:text-yellow-600 transition-colors"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                      <svg
                        v-else
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        class="w-5 h-5 text-gray-300 hover:text-yellow-500 transition-colors"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </button>
                    <h3 class="font-semibold">{{ video.titulo }}</h3>
                  </div>
                  <div class="flex flex-wrap items-center gap-2 mt-2">
                    <StatusBadge :status="video.status" />
                    <CanalTags :canais="video.canais" />
                    <span
                      v-if="video.ads"
                      class="px-2 py-0.5 bg-red-100 text-red-600 rounded text-xs font-medium"
                    >
                      {{ t('public.ads') }}
                    </span>
                  </div>
                  <p v-if="video.observacoes" class="text-sm text-gray-500 mt-2">
                    {{ video.observacoes }}
                  </p>

                  <!-- Drive links -->
                  <div class="flex flex-col gap-2 mt-3">
                    <div class="flex items-center gap-2">
                      <span class="text-xs text-gray-500 font-medium shrink-0">{{ t('public.materialBruto') }}</span>
                      <template v-if="editandoLink[video.id]">
                        <input
                          :value="video.linkMaterialBruto"
                          @keydown.enter="(e) => salvarLinkMaterialBruto(video, (e.target as HTMLInputElement).value)"
                          @keydown.escape="cancelarEdicaoLink(video.id)"
                          @blur="(e) => salvarLinkMaterialBruto(video, (e.target as HTMLInputElement).value)"
                          type="url"
                          class="flex-1 min-w-0 px-2 py-1 text-xs border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                          :placeholder="t('public.placeholderLink')"
                        />
                      </template>
                      <template v-else>
                        <div class="flex items-center gap-1 min-w-0 flex-1 group">
                          <a
                            v-if="video.linkMaterialBruto"
                            :href="video.linkMaterialBruto"
                            target="_blank"
                            class="text-xs text-blue-600 hover:underline truncate"
                          >
                            {{ video.linkMaterialBruto }}
                          </a>
                          <span v-else class="text-xs text-gray-400 italic">{{ t('public.nenhumLink') }}</span>
                          <button
                            v-if="video.linkMaterialBruto"
                            @click="copiarLink(video.id, video.linkMaterialBruto)"
                            class="shrink-0 text-gray-300 hover:text-blue-600 transition-colors p-1 -m-1"
                            :title="copiedLinkId === video.id ? t('common.copied') : t('common.copyLink')"
                          >
                            <svg v-if="copiedLinkId === video.id" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-3.5 h-3.5 text-green-500">
                              <polyline points="20 6 9 17 4 12"/>
                            </svg>
                            <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-3.5 h-3.5">
                              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/>
                            </svg>
                          </button>
                          <button
                            @click="iniciarEdicaoLink(video.id)"
                            class="shrink-0 text-gray-400 hover:text-blue-600 transition-colors p-1 -m-1"
                            :title="t('public.editarLink')"
                          >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-3.5 h-3.5">
                              <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/>
                              <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/>
                            </svg>
                          </button>
                        </div>
                      </template>
                    </div>

                    <div v-if="video.linkVideoFinal" class="flex items-center gap-2">
                      <span class="text-xs text-gray-500 font-medium shrink-0">{{ t('public.videoFinal') }}</span>
                      <div class="flex items-center gap-1 min-w-0 flex-1 group">
                        <a
                          :href="video.linkVideoFinal"
                          target="_blank"
                          class="text-xs text-green-600 hover:underline truncate"
                        >
                          {{ video.linkVideoFinal }}
                        </a>
                        <button
                          @click="copiarLink(video.id, video.linkVideoFinal)"
                          class="shrink-0 text-gray-300 hover:text-green-600 transition-colors p-1 -m-1"
                          :title="copiedLinkId === video.id ? t('common.copied') : t('common.copyLink')"
                        >
                          <svg v-if="copiedLinkId === video.id" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-3.5 h-3.5 text-green-500">
                            <polyline points="20 6 9 17 4 12"/>
                          </svg>
                          <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-3.5 h-3.5">
                            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div v-if="video.dataPostagem" class="text-sm text-gray-400 shrink-0">
                  {{ video.dataPostagem.toLocaleDateString() }}
                </div>
              </div>
            </div>
          </div>
        </template>
      </template>
    </main>

    <!-- Bottom sheet backdrop -->
    <Transition name="backdrop">
      <div v-if="showBottomSheet" class="fixed inset-0 bg-black/40 z-30 sm:hidden" @click="showBottomSheet = false" />
    </Transition>

    <!-- Bottom sheet filter panel -->
    <Transition name="bottom-sheet">
      <div v-if="showBottomSheet" class="fixed bottom-0 left-0 right-0 z-40 bg-white rounded-t-xl shadow-xl sm:hidden max-h-[75vh] flex flex-col">
        <div class="sticky top-0 bg-white border-b rounded-t-xl px-4 py-3 flex items-center justify-between">
          <span class="font-semibold text-sm text-gray-900">{{ t('public.filtros') }}</span>
          <button
            @click="showBottomSheet = false"
            class="text-gray-400 hover:text-gray-600 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center -mr-2"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-5 h-5">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>
        <div class="overflow-y-auto p-4 space-y-5">
          <div>
            <label class="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">{{ t('public.filtroStatus') }}</label>
          <div class="flex overflow-x-auto gap-2 pb-1 scrollbar-hide">
              <StatusFilter
                :selected="filtroStatus"
                :counts="statusCount"
                :priorizados-ativo="filtroPriorizados"
                :priorizados-count="priorizadosCount"
                @update:selected="selecionarStatus"
                @update:priorizados="togglePriorizados"
              />
            </div>
          </div>
          <div v-if="isEmpresaMode && pessoas.length > 1">
            <hr class="border-gray-100 mb-5">
            <select
              v-model="filtroPessoaId"
              class="w-full px-3 py-2.5 rounded-lg border border-gray-300 text-sm bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="todas">{{ t('public.todasPessoas') }}</option>
              <option v-for="p in pessoas" :key="p.id" :value="p.id">{{ p.nome }}</option>
            </select>
          </div>
          <hr class="border-gray-100">
          <div class="flex items-center gap-3">
            <button
              @click="limparFiltros()"
              class="flex-1 py-2.5 rounded-lg text-sm font-medium border border-gray-300 text-gray-600 active:bg-gray-50"
            >
              {{ t('public.limpar') }}
            </button>
            <button
              @click="showBottomSheet = false"
              class="flex-1 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-medium active:bg-blue-700"
            >
              {{ t('public.aplicar') }}
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.accordion-enter-active {
  transition: opacity 0.25s ease-out, transform 0.25s ease-out;
}
.accordion-leave-active {
  transition: opacity 0.2s ease-in, transform 0.2s ease-in;
}
.accordion-enter-from {
  opacity: 0;
  transform: translateY(-8px);
}
.accordion-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

.bottom-sheet-enter-active {
  transition: transform 0.3s cubic-bezier(0.32, 0.72, 0, 1);
}
.bottom-sheet-leave-active {
  transition: transform 0.2s ease-in;
}
.bottom-sheet-enter-from,
.bottom-sheet-leave-to {
  transform: translateY(100%);
}

.backdrop-enter-active {
  transition: opacity 0.25s ease;
}
.backdrop-leave-active {
  transition: opacity 0.2s ease;
}
.backdrop-enter-from,
.backdrop-leave-to {
  opacity: 0;
}
</style>
