<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import type { Video, VideoStatus } from '@/types/video'
import { VIDEO_STATUS_LABELS } from '@/types/video'
import * as db from '@/firebase/db'
import StatusBadge from '@/components/admin/StatusBadge.vue'
import CanalTags from '@/components/admin/CanalTags.vue'
import { useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const statusOptions: VideoStatus[] = ['gravado', 'editando', 'revisao', 'postado']

const videos = ref<Video[]>([])
const filterStatus = ref<VideoStatus | ''>('')
const filterEmpresa = ref('')
const empresas = ref<{ id: string; nome: string }[]>([])

const filtered = ref<Video[]>([])

function isVideoStatus(s: string): s is VideoStatus {
  return statusOptions.includes(s as VideoStatus)
}

async function listar() {
  videos.value = await db.listarTodosVideos()
  empresas.value = (await db.listarEmpresas()).map((e) => ({ id: e.id, nome: e.nome }))
  aplicarFiltro()
}

function aplicarFiltro() {
  filtered.value = videos.value.filter((v) => {
    if (filterStatus.value && v.status !== filterStatus.value) return false
    if (filterEmpresa.value && v.empresaId !== filterEmpresa.value) return false
    return true
  })
}

function limparFiltro() {
  filterStatus.value = ''
  filterEmpresa.value = ''
  router.replace({ name: 'Videos' })
  aplicarFiltro()
}

onMounted(async () => {
  const qStatus = route.query.status as string | undefined
  if (qStatus && isVideoStatus(qStatus)) {
    filterStatus.value = qStatus
  }
  await listar()
})
</script>

<template>
  <div>
    <h1 class="text-xl md:text-2xl font-bold mb-6">Todos os Vídeos</h1>

    <div class="flex flex-col sm:flex-row gap-3 mb-4">
      <select
        v-model="filterStatus"
        @change="aplicarFiltro"
        class="border border-gray-300 rounded-lg px-3 py-2.5 text-sm bg-white"
      >
        <option value="">Todos os status</option>
        <option v-for="(label, key) in VIDEO_STATUS_LABELS" :key="key" :value="key">
          {{ label }}
        </option>
      </select>

      <select
        v-model="filterEmpresa"
        @change="aplicarFiltro"
        class="border border-gray-300 rounded-lg px-3 py-2.5 text-sm bg-white"
      >
        <option value="">Todas as empresas</option>
        <option v-for="empresa in empresas" :key="empresa.id" :value="empresa.id">
          {{ empresa.nome }}
        </option>
      </select>

      <button
        v-if="filterStatus || filterEmpresa"
        @click="limparFiltro"
        class="text-sm text-gray-500 hover:text-gray-700 px-3 py-2.5"
      >
        Limpar filtros
      </button>
    </div>

    <!-- Desktop table -->
    <div class="hidden md:block bg-white rounded-xl shadow-sm border overflow-hidden">
      <table class="w-full">
        <thead class="bg-gray-50 text-left text-sm font-medium text-gray-500">
          <tr>
            <th class="px-4 py-3">Título</th>
            <th class="px-4 py-3">Status</th>
            <th class="px-4 py-3">Canais</th>
            <th class="px-4 py-3">Postagem</th>
          </tr>
        </thead>
        <tbody class="divide-y">
          <tr v-for="video in filtered" :key="video.id" class="hover:bg-gray-50">
            <td class="px-4 py-3 font-medium max-w-xs truncate">{{ video.titulo }}</td>
            <td class="px-4 py-3"><StatusBadge :status="video.status" /></td>
            <td class="px-4 py-3"><CanalTags :canais="video.canais" /></td>
            <td class="px-4 py-3 text-sm text-gray-500">
              {{ video.dataPostagem?.toLocaleDateString() || '—' }}
            </td>
          </tr>
          <tr v-if="filtered.length === 0">
            <td colspan="4" class="px-4 py-8 text-center text-gray-400">
              Nenhum vídeo encontrado
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Mobile cards -->
    <div class="md:hidden space-y-3">
      <div
        v-for="video in filtered"
        :key="video.id"
        class="bg-white rounded-xl shadow-sm border p-4"
      >
        <div class="font-medium text-gray-900">{{ video.titulo }}</div>
        <div class="flex flex-wrap items-center gap-2 mt-2">
          <StatusBadge :status="video.status" />
          <CanalTags :canais="video.canais" />
          <span v-if="video.ads" class="px-2 py-0.5 bg-red-100 text-red-600 rounded text-xs font-medium">Ads</span>
        </div>
        <div v-if="video.dataPostagem" class="text-sm text-gray-400 mt-2">
          {{ video.dataPostagem.toLocaleDateString() }}
        </div>
      </div>
      <p v-if="filtered.length === 0" class="text-gray-400 text-center py-8">
        Nenhum vídeo encontrado
      </p>
    </div>
  </div>
</template>
