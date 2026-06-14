import { ref } from 'vue'
import type { Video, VideoFormData } from '@/types/video'
import * as db from '@/firebase/db'

export function useVideos() {
  const videos = ref<Video[]>([])
  const loading = ref(false)

  async function listar(empresaId: string, pessoaId: string) {
    loading.value = true
    videos.value = await db.listarVideos(empresaId, pessoaId)
    loading.value = false
  }

  async function criar(empresaId: string, pessoaId: string, data: VideoFormData) {
    await db.criarVideo(empresaId, pessoaId, data)
    await listar(empresaId, pessoaId)
  }

  async function atualizar(
    empresaId: string,
    pessoaId: string,
    videoId: string,
    data: Partial<VideoFormData>
  ) {
    await db.atualizarVideo(empresaId, pessoaId, videoId, data)
    await listar(empresaId, pessoaId)
  }

  async function excluir(empresaId: string, pessoaId: string, videoId: string) {
    await db.excluirVideo(empresaId, pessoaId, videoId)
    await listar(empresaId, pessoaId)
  }

  async function reordenar(empresaId: string, pessoaId: string, videoIds: string[]) {
    await db.reordenarVideos(empresaId, pessoaId, videoIds)
    await listar(empresaId, pessoaId)
  }

  return { videos, loading, listar, criar, atualizar, excluir, reordenar }
}
