<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import type { Video } from '@/types/video'
import type { Empresa } from '@/types/empresa'
import type { Pessoa } from '@/types/pessoa'
import * as db from '@/firebase/db'
import { notificarMudancaStatus } from '@/firebase/notificacoes'
import StatusBadge from '@/components/admin/StatusBadge.vue'
import CanalTags from '@/components/admin/CanalTags.vue'
import VideoForm from '@/components/admin/VideoForm.vue'
import { VueDraggable } from 'vue-draggable-plus'
import XlsxExportButton from '@/components/admin/XlsxExportButton.vue'
import XlsxImportButton from '@/components/admin/XlsxImportButton.vue'
import type { VideoFormData } from '@/types/video'

const route = useRoute()
const router = useRouter()

const empresa = ref<Empresa | null>(null)
const pessoa = ref<Pessoa | null>(null)
const videos = ref<Video[]>([])
const showVideoForm = ref(false)
const editingVideo = ref<Video | null>(null)
const errorMessage = ref('')
const salvando = ref(false)

async function carregar() {
  const empresaId = route.params.id as string
  const pessoaId = route.params.pessoaId as string

  empresa.value = await db.getEmpresaById(empresaId)
  pessoa.value = await db.getPessoaById(empresaId, pessoaId)

  if (!empresa.value || !pessoa.value) {
    router.push('/admin/empresas')
    return
  }

  videos.value = await db.listarVideos(empresaId, pessoaId)
}

async function criarVideo(data: VideoFormData) {
  if (!empresa.value || !pessoa.value) return
  errorMessage.value = ''
  salvando.value = true
  try {
    await db.criarVideo(empresa.value.id, pessoa.value.id, data)
    showVideoForm.value = false
    await carregar()
  } catch (e: any) {
    errorMessage.value = 'Erro ao criar vídeo: ' + (e?.message || 'desconhecido')
  } finally {
    salvando.value = false
  }
}

async function atualizarVideo(data: VideoFormData) {
  if (!empresa.value || !pessoa.value || !editingVideo.value) return
  errorMessage.value = ''
  salvando.value = true
  const oldVideo = editingVideo.value
  try {
    await db.atualizarVideo(empresa.value.id, pessoa.value.id, editingVideo.value.id, data)
    if (data.status !== oldVideo.status && pessoa.value) {
      notificarMudancaStatus(pessoa.value.token, data.titulo, oldVideo.status, data.status)
    }
    editingVideo.value = null
    await carregar()
  } catch (e: any) {
    errorMessage.value = 'Erro ao atualizar vídeo: ' + (e?.message || 'desconhecido')
  } finally {
    salvando.value = false
  }
}

async function onDrag() {
  if (!empresa.value || !pessoa.value) return
  const ids = videos.value.map((v) => v.id)
  await db.reordenarVideos(empresa.value.id, pessoa.value.id, ids)
}

async function excluirVideo(videoId: string) {
  if (!empresa.value || !pessoa.value) return
  await db.excluirVideo(empresa.value.id, pessoa.value.id, videoId)
  await carregar()
}

async function importarVideos(rows: any[]) {
  if (!empresa.value || !pessoa.value) return
  for (const row of rows) {
    const data: VideoFormData = {
      titulo: row['Título'] || row.titulo || '',
      status: row['Status'] || row.status || 'gravado',
      dataPostagem: row['Data Postagem'] || row.dataPostagem || '',
      canais: (row['Canais'] || row.canais || '').split(',').map((c: string) => c.trim()).filter(Boolean),
      ads: (row['Ads'] || row.ads) === 'Sim' || (row['Ads'] || row.ads) === true,
      observacoes: row['Observações'] || row.observacoes || '',
    }
    if (data.titulo) {
      await db.criarVideo(empresa.value.id, pessoa.value.id, data)
    }
  }
  await carregar()
}

onMounted(carregar)
</script>

<template>
  <div v-if="empresa && pessoa">
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
      <div>
        <button
          @click="router.push(`/admin/empresas/${empresa.id}`)"
          class="text-sm text-blue-600 hover:text-blue-800 mb-1 block"
        >
          &larr; {{ empresa.nome }}
        </button>
        <h1 class="text-xl md:text-2xl font-bold">{{ pessoa.nome }}</h1>
      </div>
      <div class="flex gap-2 flex-wrap">
        <XlsxExportButton
          :dados="videos"
          :nome-arquivo="`videos-${empresa.slug}-${pessoa.nome}`"
          titulo="Exportar XLSX"
        />
        <XlsxImportButton @imported="importarVideos" />
        <button
          @click="showVideoForm = true"
          class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
        >
          + Novo Vídeo
        </button>
      </div>
    </div>

    <div v-if="errorMessage" class="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm">
      {{ errorMessage }}
    </div>

    <div class="bg-white rounded-xl shadow-sm border">
      <div v-if="videos.length === 0" class="p-8 text-center text-gray-400">
        Nenhum vídeo cadastrado
      </div>

      <VueDraggable
        v-else
        v-model="videos"
        @end="onDrag"
        handle=".drag-handle"
        ghost-class="opacity-50"
        class="divide-y"
      >
        <div
          v-for="video in videos"
          :key="video.id"
          class="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors"
        >
          <span class="drag-handle cursor-grab text-gray-400 px-1 select-none">
            <svg viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
              <circle cx="9" cy="5" r="1.5"/><circle cx="15" cy="5" r="1.5"/>
              <circle cx="9" cy="12" r="1.5"/><circle cx="15" cy="12" r="1.5"/>
              <circle cx="9" cy="19" r="1.5"/><circle cx="15" cy="19" r="1.5"/>
            </svg>
          </span>

          <div class="flex-1 min-w-0">
            <p class="font-medium truncate">{{ video.titulo }}</p>
            <div class="flex flex-wrap items-center gap-2 mt-1">
              <StatusBadge :status="video.status" />
              <CanalTags :canais="video.canais" />
              <span v-if="video.ads" class="px-2 py-0.5 bg-red-100 text-red-600 rounded text-xs font-medium">
                Ads
              </span>
              <span v-if="video.dataPostagem" class="text-xs text-gray-400">
                {{ video.dataPostagem.toLocaleDateString() }}
              </span>
            </div>
          </div>

          <div class="flex gap-1 shrink-0">
            <button
              @click="editingVideo = video"
              class="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
              aria-label="Editar vídeo"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4">
                <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/>
                <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/>
              </svg>
            </button>
            <button
              @click="excluirVideo(video.id)"
              class="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
              aria-label="Excluir vídeo"
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
      </VueDraggable>
    </div>

    <VideoForm v-if="showVideoForm" :saving="salvando" @submit="criarVideo" @close="showVideoForm = false" />

    <VideoForm
      v-if="editingVideo"
      :video="editingVideo"
      :saving="salvando"
      @submit="atualizarVideo"
      @close="editingVideo = null"
    />
  </div>
</template>
