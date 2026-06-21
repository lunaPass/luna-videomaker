<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import * as db from '@/firebase/db'
import { VIDEO_STATUS_ORDER, type VideoStatus } from '@/types/video'
import type { Video, Moeda } from '@/types/video'
import type { Empresa } from '@/types/empresa'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar, Doughnut } from 'vue-chartjs'

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend)

const router = useRouter()
const { t, locale } = useI18n()

const allVideos = ref<Video[]>([])
const empresas = ref<Empresa[]>([])
const empresaSelecionada = ref('')
const loading = ref(true)

const videosFiltrados = computed(() => {
  if (!empresaSelecionada.value) return allVideos.value
  return allVideos.value.filter((v) => v.empresaId === empresaSelecionada.value)
})

const statusCards = computed(() => {
  const counts: Record<string, number> = {}
  for (const v of videosFiltrados.value) {
    counts[v.status] = (counts[v.status] || 0) + 1
  }
  return VIDEO_STATUS_ORDER.map((s) => ({
    label: t('status.' + s),
    count: counts[s] || 0,
    status: s,
    color: statusColors[s],
  }))
})

const totalVideos = computed(() => videosFiltrados.value.length)
const priorizadosCount = computed(() => videosFiltrados.value.filter((v) => v.priorizado).length)
const adsCount = computed(() => videosFiltrados.value.filter((v) => v.ads).length)
const nonAdsCount = computed(() => totalVideos.value - adsCount.value)

const canaisData = computed(() => {
  const buckets: Record<string, number> = {}
  for (const v of videosFiltrados.value) {
    for (const canal of v.canais) {
      buckets[canal] = (buckets[canal] || 0) + 1
    }
  }
  return Object.entries(buckets)
    .map(([nome, count]) => ({ nome, count }))
    .sort((a, b) => b.count - a.count)
})

const proximosPosts = computed(() => {
  const now = new Date()
  return videosFiltrados.value
    .filter((v) => v.dataPostagem && v.dataPostagem >= now)
    .sort((a, b) => (a.dataPostagem as Date).getTime() - (b.dataPostagem as Date).getTime())
    .slice(0, 10)
})

const atividadeRecente = computed(() => {
  return videosFiltrados.value
    .filter((v) => v.atualizadoEm)
    .sort((a, b) => b.atualizadoEm.getTime() - a.atualizadoEm.getTime())
    .slice(0, 10)
})

const statusColors: Record<VideoStatus, string> = {
  gravado: 'bg-yellow-100 text-yellow-800',
  editando: 'bg-blue-100 text-blue-800',
  revisao: 'bg-purple-100 text-purple-800',
  postado: 'bg-green-100 text-green-800',
}

const chartColors: Record<VideoStatus, string> = {
  gravado: '#EAB308',
  editando: '#3B82F6',
  revisao: '#A855F7',
  postado: '#22C55E',
}

const pipelineChartData = computed(() => ({
  labels: [t('status.gravado'), t('status.editando'), t('status.revisao'), t('status.postado')],
  datasets: [
    {
      label: t('charts.videos'),
      data: VIDEO_STATUS_ORDER.map(
        (s) => videosFiltrados.value.filter((v) => v.status === s).length
      ),
      backgroundColor: VIDEO_STATUS_ORDER.map((s) => chartColors[s]),
    },
  ],
}))

const pipelineChartOptions = {
  indexAxis: 'y' as const,
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
  },
  scales: {
    x: { beginAtZero: true, ticks: { stepSize: 1 } },
  },
}

const volumeMensalData = computed(() => {
  const monthMap: Record<string, { criados: number; postados: number }> = {}
  for (const v of videosFiltrados.value) {
    if (v.criadoEm) {
      const d = new Date(v.criadoEm)
      const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`
      if (!monthMap[key]) monthMap[key] = { criados: 0, postados: 0 }
      monthMap[key].criados++
    }
    if (v.dataPostagem) {
      const d = new Date(v.dataPostagem)
      const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`
      if (!monthMap[key]) monthMap[key] = { criados: 0, postados: 0 }
      monthMap[key].postados++
    }
  }
  const keys = Object.keys(monthMap).sort().slice(-6)
  return {
    labels: keys.map((k) => {
      const [y, m] = k.split('-')
      return `${m}/${y.slice(2)}`
    }),
    datasets: [
      {
        label: t('charts.criados'),
        data: keys.map((k) => monthMap[k].criados),
        backgroundColor: '#3B82F6',
      },
      {
        label: t('charts.postados'),
        data: keys.map((k) => monthMap[k].postados),
        backgroundColor: '#22C55E',
      },
    ],
  }
})

const volumeMensalOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: true, position: 'top' as const },
  },
  scales: {
    y: { beginAtZero: true, ticks: { stepSize: 1 } },
  },
}

const canalChartData = computed(() => ({
  labels: canaisData.value.map((c) => c.nome),
  datasets: [
    {
      data: canaisData.value.map((c) => c.count),
      backgroundColor: ['#3B82F6', '#A855F7', '#22C55E', '#EAB308', '#F97316', '#EC4899', '#06B6D4'],
    },
  ],
}))

const canalChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { position: 'bottom' as const },
  },
}

const usdToBrl = ref(5.0)
const eurToBrl = ref(5.5)

function valorEmBrl(valor: number, moeda: Moeda): number {
  if (moeda === 'BRL') return valor
  const taxa = moeda === 'USD' ? usdToBrl.value : eurToBrl.value
  return valor * taxa
}

const receitaEmpresaData = computed(() => {
  const buckets: Record<string, number> = {}
  for (const v of videosFiltrados.value) {
    const val = v.valor ?? 0
    if (val > 0) {
      const nome = empresas.value.find((e) => e.id === v.empresaId)?.nome || v.empresaId
      buckets[nome] = (buckets[nome] || 0) + valorEmBrl(val, v.moeda)
    }
  }
  const entries = Object.entries(buckets).sort((a, b) => b[1] - a[1])
  return {
    labels: entries.map(([nome]) => nome),
    datasets: [
      {
        label: t('charts.receita'),
        data: entries.map(([, total]) => Math.round(total * 100) / 100),
        backgroundColor: '#22C55E',
      },
    ],
  }
})

const receitaEmpresaOptions = {
  indexAxis: 'y' as const,
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    tooltip: {
      callbacks: {
        label: (ctx: any) => `R$ ${Number(ctx.raw).toLocaleString(locale.value, { minimumFractionDigits: 2 })}`,
      },
    },
  },
  scales: {
    x: { beginAtZero: true, ticks: { callback: (v: any) => `R$${v}` } },
  },
}

const temReceita = computed(() => receitaEmpresaData.value.labels.length > 0)

onMounted(async () => {
  const [videos, emp, config] = await Promise.all([db.listarTodosVideos(), db.listarEmpresas(), db.getConfig()])
  allVideos.value = videos
  empresas.value = emp
  usdToBrl.value = config.usdToBrl
  eurToBrl.value = config.eurToBrl
  loading.value = false
})

function formatDate(d: Date): string {
  return d.toLocaleDateString(locale.value)
}

function formatDateTime(d: Date): string {
  try {
    return (
      d.toLocaleDateString(locale.value, { day: 'numeric', month: 'short' }) +
      ' ' +
      d.toLocaleTimeString(locale.value, { timeStyle: 'short' })
    )
  } catch {
    return d.toISOString().slice(0, 16).replace('T', ' ')
  }
}
</script>

<template>
  <!-- Skeleton shimmer -->
  <div v-if="loading" class="animate-pulse space-y-6">
    <div class="h-8 w-48 skeleton-pulse mb-6" />

    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
      <div v-for="i in 10" :key="i" class="h-24 skeleton-pulse" />
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
      <div class="h-80 skeleton-pulse" />
      <div class="h-80 skeleton-pulse" />
    </div>

    <div class="h-80 skeleton-pulse mb-6" />

    <div class="h-80 skeleton-pulse mb-6" />

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div class="h-64 skeleton-pulse" />
      <div class="h-64 skeleton-pulse" />
    </div>
  </div>

  <div v-else>
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
      <h1 class="text-xl md:text-2xl font-bold">{{ t('dashboard.title') }}</h1>
      <select
        v-model="empresaSelecionada"
        class="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">{{ t('dashboard.todasEmpresas') }}</option>
        <option v-for="emp in empresas" :key="emp.id" :value="emp.id">{{ emp.nome }}</option>
      </select>
    </div>

    <!-- Status + Stats Cards -->
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
      <div
        v-for="card in statusCards"
        :key="card.status"
        :class="card.color"
        class="rounded-xl p-5 cursor-pointer hover:opacity-80 transition-opacity"
        @click="router.push({ name: 'Videos', query: { status: card.status, empresa: empresaSelecionada } })"
      >
        <p class="text-3xl font-bold">{{ card.count }}</p>
        <p class="text-sm font-medium mt-1">{{ card.label }}</p>
      </div>
      <div class="rounded-xl p-5 bg-gray-100 text-gray-800">
        <p class="text-3xl font-bold">{{ totalVideos }}</p>
        <p class="text-sm font-medium mt-1">{{ t('dashboard.total') }}</p>
      </div>
      <div class="rounded-xl p-5 bg-amber-50 text-amber-800">
        <p class="text-3xl font-bold">{{ priorizadosCount }}</p>
        <p class="text-sm font-medium mt-1">{{ t('dashboard.priorizados') }}</p>
      </div>
      <div class="rounded-xl p-5 bg-red-50 text-red-800">
        <p class="text-3xl font-bold">{{ adsCount }}</p>
        <p class="text-sm font-medium mt-1">{{ t('dashboard.comAds') }}</p>
      </div>
      <div class="rounded-xl p-5 bg-gray-50 text-gray-800">
        <p class="text-3xl font-bold">{{ nonAdsCount }}</p>
        <p class="text-sm font-medium mt-1">{{ t('dashboard.semAds') }}</p>
      </div>
      <div class="rounded-xl p-5 bg-indigo-50 text-indigo-800">
        <p class="text-3xl font-bold">{{ empresas.length }}</p>
        <p class="text-sm font-medium mt-1">{{ t('dashboard.empresas') }}</p>
      </div>
    </div>

    <!-- Pipeline + Volume Mensal -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
      <div class="bg-white rounded-xl shadow-sm border p-5">
        <h2 class="text-lg font-bold mb-4">{{ t('dashboard.pipelineProducao') }}</h2>
        <div class="h-64" v-if="totalVideos > 0">
          <Bar :data="pipelineChartData" :options="pipelineChartOptions" />
        </div>
        <p v-else class="text-gray-400 text-center py-8">{{ t('dashboard.nenhumVideo') }}</p>
      </div>
      <div class="bg-white rounded-xl shadow-sm border p-5">
        <h2 class="text-lg font-bold mb-4">{{ t('dashboard.volumeMensal') }}</h2>
        <div class="h-64" v-if="totalVideos > 0">
          <Bar :data="volumeMensalData" :options="volumeMensalOptions" />
        </div>
        <p v-else class="text-gray-400 text-center py-8">{{ t('dashboard.nenhumVideo') }}</p>
      </div>
    </div>

    <!-- Canal Distribution -->
    <div class="bg-white rounded-xl shadow-sm border p-5 mb-6">
      <h2 class="text-lg font-bold mb-4">{{ t('dashboard.videosPorCanal') }}</h2>
      <div class="h-72 flex items-center justify-center" v-if="canaisData.length > 0">
        <div class="w-72">
          <Doughnut :data="canalChartData" :options="canalChartOptions" />
        </div>
      </div>
      <p v-else class="text-gray-400 text-center py-8">{{ t('dashboard.nenhumCanal') }}</p>
    </div>

    <!-- Receita por Empresa -->
    <div class="bg-white rounded-xl shadow-sm border p-5 mb-6">
      <h2 class="text-lg font-bold mb-4">{{ t('dashboard.receitaEmpresa') }}</h2>
      <div class="h-64" v-if="temReceita">
        <Bar :data="receitaEmpresaData" :options="receitaEmpresaOptions" />
      </div>
      <p v-else class="text-gray-400 text-center py-8">{{ t('dashboard.nenhumValor') }}</p>
    </div>

    <!-- Proximos Posts + Atividade Recente -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div class="bg-white rounded-xl shadow-sm border p-5">
        <h2 class="text-lg font-bold mb-4">{{ t('dashboard.proximosPosts') }}</h2>
        <div v-if="proximosPosts.length === 0" class="text-gray-400 text-center py-8">
          {{ t('dashboard.nenhumPost') }}
        </div>
        <ul v-else class="divide-y">
          <li
            v-for="video in proximosPosts"
            :key="video.id"
            class="py-2.5 flex items-center justify-between"
          >
            <div class="min-w-0 flex-1">
              <p class="text-sm font-medium truncate">{{ video.titulo }}</p>
              <p class="text-xs text-gray-400 mt-0.5">
                {{ video.dataPostagem ? formatDate(video.dataPostagem) : '—' }}
              </p>
            </div>
            <span
              class="ml-3 shrink-0 px-2 py-0.5 rounded text-xs font-medium"
              :class="statusColors[video.status]"
            >
              {{ t('status.' + video.status) }}
            </span>
          </li>
        </ul>
      </div>
      <div class="bg-white rounded-xl shadow-sm border p-5">
        <h2 class="text-lg font-bold mb-4">{{ t('dashboard.atividadeRecente') }}</h2>
        <div v-if="atividadeRecente.length === 0" class="text-gray-400 text-center py-8">
          {{ t('dashboard.nenhumaAtividade') }}
        </div>
        <ul v-else class="divide-y">
          <li
            v-for="video in atividadeRecente"
            :key="video.id"
            class="py-2.5 flex items-center justify-between"
          >
            <div class="min-w-0 flex-1">
              <p class="text-sm font-medium truncate">{{ video.titulo }}</p>
              <p class="text-xs text-gray-400 mt-0.5" :title="video.atualizadoEm.toISOString()">
                {{ formatDateTime(video.atualizadoEm) }}
              </p>
            </div>
            <span
              class="ml-3 shrink-0 px-2 py-0.5 rounded text-xs font-medium"
              :class="statusColors[video.status]"
            >
              {{ t('status.' + video.status) }}
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
