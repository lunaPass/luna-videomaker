<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import * as db from '@/firebase/db'
import type { Video, Moeda, VideoStatus } from '@/types/video'
import { MOEDA_SIMBOLO } from '@/types/video'
import type { Empresa } from '@/types/empresa'
import type { Pessoa } from '@/types/pessoa'
import { converter } from '@/composables/useCotacao'
import { useXlsx } from '@/composables/useXlsx'
import type { XlsxColumn } from '@/composables/useXlsx'
import LoadingSkeleton from '@/components/ui/LoadingSkeleton.vue'
import EmptyState from '@/components/ui/EmptyState.vue'

const { t } = useI18n()
const { exportToXlsx } = useXlsx()

const empresas = ref<Empresa[]>([])
const pessoas = ref<Pessoa[]>([])
const videos = ref<(Video & { pessoaNome: string })[]>([])
const loading = ref(false)
const loaded = ref(false)

const empresaId = ref('')
const pessoaId = ref('')
const filtroStatus = ref<VideoStatus | ''>('')
const dataInicial = ref('')
const dataFinal = ref('')
const moedaExibicao = ref<Moeda>('BRL')
const usdToBrl = ref(5.0)
const eurToBrl = ref(5.5)

const statusOptions: VideoStatus[] = ['gravado', 'editando', 'revisao', 'postado']

const statusColors: Record<VideoStatus, string> = {
  gravado: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300',
  editando: 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300',
  revisao: 'bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300',
  postado: 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300',
}

const empresaNome = computed(() =>
  empresas.value.find((e) => e.id === empresaId.value)?.nome ?? ''
)

const videosFiltrados = computed(() => {
  let result = videos.value
  if (pessoaId.value) {
    result = result.filter((v) => v.pessoaId === pessoaId.value)
  }
  if (filtroStatus.value) {
    result = result.filter((v) => v.status === filtroStatus.value)
  }
  if (dataInicial.value) {
    const d = new Date(dataInicial.value)
    result = result.filter((v) => v.dataPostagem && v.dataPostagem >= d)
  }
  if (dataFinal.value) {
    const d = new Date(dataFinal.value)
    d.setHours(23, 59, 59, 999)
    result = result.filter((v) => v.dataPostagem && v.dataPostagem <= d)
  }
  return result
})

const totalGeral = computed(() =>
  videosFiltrados.value.reduce(
    (acc, v) => acc + converter(v.valor ?? 0, v.moeda, moedaExibicao.value, usdToBrl.value, eurToBrl.value),
    0,
  ),
)

const currentPage = ref(1)
const pageSize = 50
const totalPages = computed(() => Math.ceil(videosFiltrados.value.length / pageSize))

const paginatedVideos = computed(() => {
  const start = (currentPage.value - 1) * pageSize
  return videosFiltrados.value.slice(start, start + pageSize)
})

function setPage(page: number) {
  if (page < 1 || page > totalPages.value) return
  currentPage.value = page
}

async function gerar() {
  if (!empresaId.value) return
  loading.value = true
  loaded.value = false
  currentPage.value = 1
  const [vids, pess, config] = await Promise.all([
    db.listarVideosPorEmpresa(empresaId.value),
    db.listarPessoas(empresaId.value),
    db.getConfig(),
  ])
  videos.value = vids
  pessoas.value = pess
  usdToBrl.value = config.usdToBrl
  eurToBrl.value = config.eurToBrl
  loading.value = false
  loaded.value = true
}

function formatDate(d: Date | null): string {
  if (!d) return '—'
  return d.toLocaleDateString()
}

function fmtValor(v: number): string {
  return v.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}

function converterValor(video: Video): number {
  return converter(video.valor ?? 0, video.moeda, moedaExibicao.value, usdToBrl.value, eurToBrl.value)
}

function slugify(text: string): string {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

function gerarNomeArquivo(): string {
  const emp = slugify(empresaNome.value)
  const pes = pessoaId.value
    ? slugify(pessoas.value.find((p) => p.id === pessoaId.value)?.nome ?? '')
    : 'todos'
  const periodo =
    dataInicial.value && dataFinal.value
      ? `_${dataInicial.value.slice(0, 7)}_${dataFinal.value.slice(0, 7)}`
      : ''
  return `${emp}_${pes}${periodo}`
}

async function exportar() {
  const colunas: XlsxColumn[] = [
    {
      header: t('relatorios.colunas.empresa'),
      key: 'empresa',
      width: 25,
      format: () => empresaNome.value,
    },
    {
      header: t('relatorios.colunas.pessoa'),
      key: 'pessoa',
      width: 25,
      format: (_v, row) => row.pessoaNome,
    },
    { header: t('relatorios.colunas.titulo'), key: 'titulo', width: 40 },
    {
      header: t('relatorios.colunas.status'),
      key: 'status',
      width: 15,
      format: (v: string) => t(`status.${v}`),
    },
    {
      header: t('relatorios.colunas.dataPostagem'),
      key: 'dataPostagem',
      width: 15,
      format: (v: Date | null) => (v ? v.toLocaleDateString('pt-BR') : ''),
    },
    {
      header: t('relatorios.colunas.valorOriginal'),
      key: 'valorOriginal',
      width: 18,
      format: (v: number, row: any) => `${MOEDA_SIMBOLO[row.moeda as Moeda] || ''} ${fmtValor(v)}`,
    },
    { header: t('relatorios.colunas.moeda'), key: 'moeda', width: 8 },
    {
      header: t('relatorios.colunas.valorConvertido'),
      key: 'valorConvertido',
      width: 18,
      format: (v: number) => `${MOEDA_SIMBOLO[moedaExibicao.value]} ${fmtValor(v)}`,
    },
    {
      header: t('relatorios.colunas.canais'),
      key: 'canais',
      width: 30,
      format: (v: string[]) => (Array.isArray(v) ? v.join(', ') : ''),
    },
    { header: t('relatorios.colunas.observacoes'), key: 'observacoes', width: 30 },
  ]

  const dados = videosFiltrados.value.map((v) => ({
    ...v,
    valorOriginal: v.valor ?? 0,
    valorConvertido: converterValor(v as Video),
  }))

  await exportToXlsx(dados, colunas, gerarNomeArquivo(), t('xlsx.worksheet'))
}

onMounted(async () => {
  const [emps, config] = await Promise.all([db.listarEmpresas(), db.getConfig()])
  empresas.value = emps
  usdToBrl.value = config.usdToBrl
  eurToBrl.value = config.eurToBrl
})
</script>

<template>
  <div>
    <h1 class="text-xl md:text-2xl font-bold mb-6">{{ t('relatorios.titulo') }}</h1>

    <!-- Filters -->
    <div class="bg-surface rounded-xl shadow-sm dark:shadow-none border border-border p-5 mb-6">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
          <label class="block text-sm font-medium text-foreground-secondary mb-1">{{ t('relatorios.empresa') }}</label>
          <select
            v-model="empresaId"
            class="w-full border border-border bg-surface text-foreground rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="">{{ t('relatorios.selecionarEmpresa') }}</option>
            <option v-for="emp in empresas" :key="emp.id" :value="emp.id">{{ emp.nome }}</option>
          </select>
        </div>

        <div>
          <label class="block text-sm font-medium text-foreground-secondary mb-1">{{ t('relatorios.pessoa') }}</label>
          <select
            v-model="pessoaId"
            class="w-full border border-border bg-surface text-foreground rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            :disabled="!empresaId"
          >
            <option value="">{{ t('relatorios.todasPessoas') }}</option>
            <option v-for="pes in pessoas" :key="pes.id" :value="pes.id">{{ pes.nome }}</option>
          </select>
        </div>

        <div>
          <label class="block text-sm font-medium text-foreground-secondary mb-1">{{ t('relatorios.status') }}</label>
          <select
            v-model="filtroStatus"
            class="w-full border border-border bg-surface text-foreground rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="">{{ t('relatorios.todosStatus') }}</option>
            <option v-for="s in statusOptions" :key="s" :value="s">{{ t('status.' + s) }}</option>
          </select>
        </div>

        <div>
          <label class="block text-sm font-medium text-foreground-secondary mb-1">{{ t('relatorios.moedaExibicao') }}</label>
          <select
            v-model="moedaExibicao"
            class="w-full border border-border bg-surface text-foreground rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="BRL">BRL (R$)</option>
            <option value="USD">USD (US$)</option>
            <option value="EUR">EUR (€)</option>
          </select>
        </div>

        <div>
          <label class="block text-sm font-medium text-foreground-secondary mb-1">{{ t('relatorios.dataInicial') }}</label>
          <input
            v-model="dataInicial"
            type="date"
            class="w-full border border-border bg-surface text-foreground rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-foreground-secondary mb-1">{{ t('relatorios.dataFinal') }}</label>
          <input
            v-model="dataFinal"
            type="date"
            class="w-full border border-border bg-surface text-foreground rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div class="flex items-end">
          <button
            @click="gerar"
            :disabled="!empresaId || loading"
            class="bg-primary text-white px-6 py-2.5 rounded-lg hover:bg-primary-hover disabled:opacity-50 text-sm font-medium"
          >
            {{ loading ? t('common.loading') : t('relatorios.gerar') }}
          </button>
        </div>
      </div>
    </div>

    <!-- Results -->
    <LoadingSkeleton :loading="loading" type="table" :rows="5">
      <div v-if="!loaded" class="text-center py-12 text-foreground-muted">
        {{ t('relatorios.selecioneFiltros') }}
      </div>

      <div v-else-if="videosFiltrados.length === 0" class="text-center py-12">
        <EmptyState :message="t('relatorios.nenhumResultado')" />
      </div>

      <div v-else class="bg-surface rounded-xl shadow-sm dark:shadow-none border border-border overflow-hidden">
        <!-- Export header -->
        <div class="flex items-center justify-between px-5 py-3 border-b border-border">
          <span class="text-sm text-foreground-secondary">
            {{ videosFiltrados.length }} {{ t('videos.title') }}
          </span>
          <button
            @click="exportar"
            class="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-hover text-sm font-medium"
          >
            {{ t('relatorios.exportar') }}
          </button>
        </div>

        <!-- Table -->
        <div class="overflow-x-auto">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-surface-muted text-foreground-secondary text-xs uppercase tracking-wider">
                <th class="text-left px-4 py-3 font-medium">{{ t('relatorios.colunas.empresa') }}</th>
                <th class="text-left px-4 py-3 font-medium">{{ t('relatorios.colunas.pessoa') }}</th>
                <th class="text-left px-4 py-3 font-medium">{{ t('relatorios.colunas.titulo') }}</th>
                <th class="text-left px-4 py-3 font-medium">{{ t('relatorios.colunas.status') }}</th>
                <th class="text-left px-4 py-3 font-medium">{{ t('relatorios.colunas.dataPostagem') }}</th>
                <th class="text-right px-4 py-3 font-medium">{{ t('relatorios.colunas.valorOriginal') }}</th>
                <th class="text-center px-4 py-3 font-medium">{{ t('relatorios.colunas.moeda') }}</th>
                <th class="text-right px-4 py-3 font-medium">{{ t('relatorios.colunas.valorConvertido') }}</th>
                <th class="text-left px-4 py-3 font-medium">{{ t('relatorios.colunas.canais') }}</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-border">
              <tr v-for="video in paginatedVideos" :key="video.id" class="hover:bg-surface-muted/50">
                <td class="px-4 py-3 text-foreground">{{ empresaNome }}</td>
                <td class="px-4 py-3 text-foreground">{{ video.pessoaNome }}</td>
                <td class="px-4 py-3 text-foreground font-medium max-w-xs truncate">{{ video.titulo }}</td>
                <td class="px-4 py-3">
                  <span class="text-xs font-medium px-2 py-0.5 rounded" :class="statusColors[video.status]">
                    {{ t('status.' + video.status) }}
                  </span>
                </td>
                <td class="px-4 py-3 text-foreground-secondary whitespace-nowrap">{{ formatDate(video.dataPostagem) }}</td>
                <td class="px-4 py-3 text-right text-foreground whitespace-nowrap tabular-nums">
                  {{ MOEDA_SIMBOLO[video.moeda] }} {{ fmtValor(video.valor ?? 0) }}
                </td>
                <td class="px-4 py-3 text-center text-foreground-muted text-xs">{{ video.moeda }}</td>
                <td class="px-4 py-3 text-right text-foreground font-medium whitespace-nowrap tabular-nums">
                  {{ MOEDA_SIMBOLO[moedaExibicao] }} {{ fmtValor(converterValor(video)) }}
                </td>
                <td class="px-4 py-3 text-foreground-secondary max-w-[120px] truncate">
                  {{ Array.isArray(video.canais) ? video.canais.join(', ') : '' }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Footer with total + pagination -->
        <div class="flex items-center justify-between px-5 py-3 border-t border-border bg-surface-muted">
          <span class="text-sm font-bold text-foreground">
            {{ t('relatorios.total') }}: {{ MOEDA_SIMBOLO[moedaExibicao] }} {{ fmtValor(totalGeral) }}
          </span>

          <div v-if="totalPages > 1" class="flex items-center gap-2">
            <button
              :disabled="currentPage <= 1"
              @click="setPage(currentPage - 1)"
              class="px-3 py-1.5 text-sm rounded-lg border border-border bg-surface text-foreground-secondary hover:bg-surface-muted disabled:opacity-30"
            >
              {{ t('videos.anterior') }}
            </button>
            <span class="text-sm text-foreground-muted">
              {{ currentPage }}/{{ totalPages }}
            </span>
            <button
              :disabled="currentPage >= totalPages"
              @click="setPage(currentPage + 1)"
              class="px-3 py-1.5 text-sm rounded-lg border border-border bg-surface text-foreground-secondary hover:bg-surface-muted disabled:opacity-30"
            >
              {{ t('videos.proximo') }}
            </button>
          </div>
        </div>
      </div>
    </LoadingSkeleton>
  </div>
</template>

<style scoped>
.tabular-nums {
  font-variant-numeric: tabular-nums;
}
</style>
