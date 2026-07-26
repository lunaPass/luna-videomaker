<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
import { ref, computed, watch, onMounted, shallowRef } from 'vue'
import * as db from '@/firebase/db'
import type { Video, Moeda, VideoStatus } from '@/types/video'
import { MOEDA_SIMBOLO } from '@/types/video'
import type { Empresa } from '@/types/empresa'
import type { Pessoa } from '@/types/pessoa'
import { converter } from '@/composables/useCotacao'
import { useCharts } from '@/composables/useCharts'
import LoadingSkeleton from '@/components/ui/LoadingSkeleton.vue'
import EmptyState from '@/components/ui/EmptyState.vue'
import SearchInput from '@/components/ui/SearchInput.vue'
import Pagination from '@/components/ui/Pagination.vue'

const BarComp = shallowRef<any>()
const DoughnutComp = shallowRef<any>()
const allVideos = ref<Video[]>([])
const empresas = ref<Empresa[]>([])
const pessoas = ref<Pessoa[]>([])
const empresaSelecionada = ref('')
const moedaExibicao = ref<Moeda>('BRL')
const loading = ref(true)
const busca = ref('')
const filtroStatus = ref<VideoStatus | ''>('')
const currentPage = ref(1)
const pageSize = 20
const usdToBrl = ref(5.0)
const eurToBrl = ref(5.5)

const videosFiltrados = computed(() => {
  if (!empresaSelecionada.value) return allVideos.value
  return allVideos.value.filter((v) => v.empresaId === empresaSelecionada.value)
})

const videosComValor = computed(() => videosFiltrados.value.filter((v) => (v.valor ?? 0) > 0))

const moedaSimbolo = computed(() => MOEDA_SIMBOLO[moedaExibicao.value])

function conv(valor: number, de: Moeda): number {
  return converter(valor, de, moedaExibicao.value, usdToBrl.value, eurToBrl.value)
}

function fmt(valor: number): string {
  return valor.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}

const totalConvertido = computed(() => {
  return videosComValor.value.reduce((acc, v) => acc + conv(v.valor ?? 0, v.moeda), 0)
})

const countMoeda = (m: Moeda) => computed(() => videosComValor.value.filter((v) => v.moeda === m).length)
const countUsd = countMoeda('USD')
const countEur = countMoeda('EUR')
const countBrl = countMoeda('BRL')

const moedaChartData = computed(() => {
  const values = [countBrl.value, countUsd.value, countEur.value]
  const labels = ['BRL', 'USD', 'EUR']
  const colors = ['#22C55E', '#3B82F6', '#A855F7']
  const filtered = labels.map((l, i) => ({ label: l, value: values[i], color: colors[i] })).filter((x) => x.value > 0)
  return {
    labels: filtered.map((x) => x.label),
    datasets: [
      {
        data: filtered.map((x) => x.value),
        backgroundColor: filtered.map((x) => x.color),
      },
    ],
  }
})

const moedaChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { position: 'bottom' as const },
  },
}

const topVideos = computed(() => {
  return [...videosComValor.value]
    .sort((a, b) => conv(b.valor ?? 0, b.moeda) - conv(a.valor ?? 0, a.moeda))
    .slice(0, 10)
})

const topVideosData = computed(() => ({
  labels: topVideos.value.map((v) => v.titulo.length > 25 ? v.titulo.slice(0, 25) + '...' : v.titulo),
  datasets: [
    {
      label: `Valor (${moedaExibicao.value})`,
      data: topVideos.value.map((v) => Math.round(conv(v.valor ?? 0, v.moeda) * 100) / 100),
      backgroundColor: topVideos.value.map((v) =>
        v.moeda === 'BRL' ? '#22C55E' : v.moeda === 'USD' ? '#3B82F6' : '#A855F7'
      ),
    },
  ],
}))

const topVideosOptions = computed(() => ({
  indexAxis: 'y' as const,
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    tooltip: {
      callbacks: {
        label: (ctx: any) =>
          `${moedaSimbolo.value} ${Number(ctx.raw).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`,
      },
    },
  },
  scales: {
    x: { beginAtZero: true, ticks: { callback: (v: any) => `${moedaSimbolo.value}${v}` } },
  },
}))

function formatarValor(video: Video): string {
  const valor = video.valor ?? 0
  if (!valor) return '—'
  const s = MOEDA_SIMBOLO[video.moeda]
  const f = valor.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
  const original = `${s} ${f}`
  if (video.moeda === moedaExibicao.value) return original
  const convertido = fmt(conv(valor, video.moeda))
  return `${moedaSimbolo.value} ${convertido} (${original})`
}

function nomeEmpresa(id: string): string {
  return empresas.value.find((e) => e.id === id)?.nome || id
}

function nomePessoa(video: Video): string {
  return pessoas.value.find((p) => p.id === video.pessoaId && p.empresaId === video.empresaId)?.nome || video.pessoaId
}

const statusOptions: VideoStatus[] = ['gravado', 'editando', 'revisao', 'postado']

const videosPesquisados = computed(() => {
  const q = busca.value.toLowerCase().trim()
  if (!q && !filtroStatus.value) return videosComValor.value
  return videosComValor.value.filter((v) => {
    if (filtroStatus.value && v.status !== filtroStatus.value) return false
    if (q) {
      const matchTitulo = v.titulo.toLowerCase().includes(q)
      const matchObs = v.observacoes.toLowerCase().includes(q)
      const matchEmpresa = nomeEmpresa(v.empresaId).toLowerCase().includes(q)
      const matchPessoa = nomePessoa(v).toLowerCase().includes(q)
      if (!matchTitulo && !matchObs && !matchEmpresa && !matchPessoa) return false
    }
    return true
  })
})

const totalPages = computed(() => Math.ceil(videosPesquisados.value.length / pageSize))

const paginatedVideos = computed(() => {
  const start = (currentPage.value - 1) * pageSize
  return videosPesquisados.value.slice(start, start + pageSize)
})

let buscaTimer: ReturnType<typeof setTimeout> | null = null

watch(busca, () => {
  if (buscaTimer) clearTimeout(buscaTimer)
  buscaTimer = setTimeout(() => {
    currentPage.value = 1
  }, 300)
})

watch([empresaSelecionada, filtroStatus], () => {
  currentPage.value = 1
})

function setPage(page: number) {
  if (page < 1 || page > totalPages.value) return
  currentPage.value = page
}

onMounted(async () => {
  const [videos, emp, pess, config, { Bar, Doughnut }] = await Promise.all([
    db.listarTodosVideos(),
    db.listarEmpresas(),
    db.listarTodasPessoas(),
    db.getConfig(),
    useCharts(),
  ])
  BarComp.value = Bar
  DoughnutComp.value = Doughnut
  allVideos.value = videos
  empresas.value = emp
  pessoas.value = pess
  usdToBrl.value = config.usdToBrl
  eurToBrl.value = config.eurToBrl
  loading.value = false
})
</script>

<template>
  <LoadingSkeleton :loading="loading" type="cards" :rows="6">
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
      <h1 class="text-xl md:text-2xl font-bold">{{ t('financeiro.titulo') }}</h1>
      <div class="flex gap-3">
        <select
          v-model="empresaSelecionada"
          class="border border-border bg-surface text-foreground-secondary rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="">{{ t('financeiro.todasEmpresas') }}</option>
          <option v-for="emp in empresas" :key="emp.id" :value="emp.id">{{ emp.nome }}</option>
        </select>
        <select
          v-model="moedaExibicao"
          class="border border-border bg-surface text-foreground-secondary rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option v-for="m in (['BRL', 'USD', 'EUR'] as Moeda[])" :key="m" :value="m">
            {{ MOEDA_SIMBOLO[m] }} {{ m }}
          </option>
        </select>
      </div>
    </div>

    <!-- Summary cards -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      <div class="rounded-xl p-5 bg-green-50 dark:bg-green-900/30 text-green-800 dark:text-green-300">
        <p class="text-2xl font-bold">
          {{ moedaSimbolo }} {{ fmt(totalConvertido) }}
        </p>
        <p class="text-sm font-medium mt-1">{{ t('financeiro.totalMoeda') }} ({{ moedaExibicao }})</p>
      </div>
      <div class="rounded-xl p-5 bg-blue-50 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300">
        <p class="text-2xl font-bold">{{ countBrl }}</p>
        <p class="text-sm font-medium mt-1">{{ t('financeiro.videosEmBrl') }}</p>
      </div>
      <div class="rounded-xl p-5 bg-purple-50 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300">
        <p class="text-2xl font-bold">{{ countUsd }}</p>
        <p class="text-sm font-medium mt-1">{{ t('financeiro.videosEmUsd') }}</p>
      </div>
      <div class="rounded-xl p-5 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300">
        <p class="text-2xl font-bold">{{ countEur }}</p>
        <p class="text-sm font-medium mt-1">{{ t('financeiro.videosEmEur') }}</p>
      </div>
    </div>

    <!-- Charts -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
      <div class="  bg-surface rounded-xl shadow-sm dark:shadow-none border border-border p-5">
        <h2 class="text-lg font-bold mb-4">{{ t('financeiro.topVideos') }} ({{ moedaExibicao }})</h2>
        <div class="h-80" v-if="topVideos.length > 0 && BarComp">
          <component :is="BarComp" :data="topVideosData" :options="topVideosOptions" />
        </div>
        <EmptyState v-else :message="t('financeiro.nenhumVideoValor')" />
      </div>
      <div class="  bg-surface rounded-xl shadow-sm dark:shadow-none border border-border p-5">
        <h2 class="text-lg font-bold mb-4">{{ t('financeiro.distribuicaoMoeda') }}</h2>
        <div class="h-72 flex items-center justify-center" v-if="videosComValor.length > 0 && DoughnutComp">
          <div class="w-64">
            <component :is="DoughnutComp" :data="moedaChartData" :options="moedaChartOptions" />
          </div>
        </div>
        <EmptyState v-else :message="t('financeiro.nenhumVideoValor')" />
      </div>
    </div>

    <!-- Search + Status Filter -->
    <div class="flex flex-col sm:flex-row gap-3 mb-4">
      <SearchInput v-model="busca" :placeholder="t('videos.buscar')" />
      <select
        v-model="filtroStatus"
        class="border border-border bg-surface text-foreground-secondary rounded-lg px-3 py-2.5 text-sm"
      >
        <option value="">{{ t('videos.todosStatus') }}</option>
        <option v-for="s in statusOptions" :key="s" :value="s">
          {{ t('status.' + s) }}
        </option>
      </select>
    </div>

    <!-- Desktop table -->
    <div class="hidden md:block bg-surface rounded-xl shadow-sm dark:shadow-none border border-border overflow-hidden">
      <table class="w-full">
        <thead class="bg-surface-muted text-left text-sm font-medium text-foreground-muted">
          <tr>
            <th class="px-4 py-3">{{ t('financeiro.th.video') }}</th>
            <th class="px-4 py-3">{{ t('financeiro.th.empresa') }}</th>
            <th class="px-4 py-3">{{ t('financeiro.th.pessoa') }}</th>
            <th class="px-4 py-3">{{ t('financeiro.th.valor') }}</th>
            <th class="px-4 py-3">{{ t('financeiro.th.status') }}</th>
          </tr>
        </thead>
        <tbody class="divide-y">
          <tr v-for="video in paginatedVideos" :key="video.id" class="hover:bg-surface-muted">
            <td class="px-4 py-3 font-medium text-foreground">{{ video.titulo }}</td>
            <td class="px-4 py-3 text-sm text-foreground-secondary">{{ nomeEmpresa(video.empresaId) }}</td>
            <td class="px-4 py-3 text-sm text-foreground-secondary">{{ nomePessoa(video) }}</td>
            <td class="px-4 py-3 text-sm text-foreground-secondary whitespace-nowrap">{{ formatarValor(video) }}</td>
            <td class="px-4 py-3">
              <span
                class="px-2 py-0.5 rounded text-xs font-medium"
                :class="{
                  'bg-yellow-100 text-yellow-800': video.status === 'gravado',
                  'bg-blue-100 text-blue-800': video.status === 'editando',
                  'bg-purple-100 text-purple-800': video.status === 'revisao',
                  'bg-green-100 text-green-800': video.status === 'postado',
                }"
              >
                {{ t('status.' + video.status) }}
              </span>
            </td>
          </tr>
          <tr v-if="videosPesquisados.length === 0">
            <td colspan="5">
              <EmptyState :message="t('financeiro.nenhumVideoValor')" />
            </td>
          </tr>
          <tr v-if="videosPesquisados.length > 0 && paginatedVideos.length === 0">
            <td colspan="5">
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
        <div class="font-medium text-foreground">{{ video.titulo }}</div>
        <div class="text-sm text-foreground-muted mt-0.5">{{ nomeEmpresa(video.empresaId) }} · {{ nomePessoa(video) }}</div>
        <div class="flex items-center justify-between mt-2">
          <span class="text-sm font-semibold text-foreground">{{ formatarValor(video) }}</span>
          <span
            class="px-2 py-0.5 rounded text-xs font-medium"
            :class="{
              'bg-yellow-100 text-yellow-800': video.status === 'gravado',
              'bg-blue-100 text-blue-800': video.status === 'editando',
              'bg-purple-100 text-purple-800': video.status === 'revisao',
              'bg-green-100 text-green-800': video.status === 'postado',
            }"
          >
            {{ t('status.' + video.status) }}
          </span>
        </div>
      </div>
      <div v-if="videosPesquisados.length === 0 || (videosPesquisados.length > 0 && paginatedVideos.length === 0)">
        <EmptyState
          :message="videosPesquisados.length === 0 ? t('financeiro.nenhumVideoValor') : t('videos.nenhumaPagina')"
        />
      </div>
    </div>

    <Pagination :current-page="currentPage" :total-pages="totalPages" @page-change="setPage" />
  </LoadingSkeleton>
</template>
