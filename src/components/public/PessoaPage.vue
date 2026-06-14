<template>
  <div>
    <p class="text-sm text-gray-500">{{ empresaNome }}</p>
    <h2 class="text-2xl font-bold mb-4">{{ pessoaNome }}</h2>

    <div class="space-y-3">
      <div v-for="video in videos" :key="video.id" class="bg-white rounded-xl shadow-sm border p-4">
        <div class="flex items-start justify-between">
          <div>
            <h3 class="font-semibold">{{ video.titulo }}</h3>
            <div class="flex items-center gap-2 mt-2">
              <StatusBadge :status="video.status" />
              <CanalTags :canais="video.canais" />
              <span v-if="video.ads" class="px-2 py-0.5 bg-red-100 text-red-600 rounded text-xs font-medium">Ads</span>
            </div>
          </div>
          <div v-if="video.dataPostagem" class="text-sm text-gray-400 shrink-0">
            {{ video.dataPostagem.toLocaleDateString() }}
          </div>
        </div>
        <p v-if="video.observacoes" class="text-sm text-gray-500 mt-2">{{ video.observacoes }}</p>
      </div>
      <p v-if="videos.length === 0" class="text-gray-400 text-center py-8">Nenhum vídeo cadastrado ainda</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import StatusBadge from '@/components/admin/StatusBadge.vue'
import CanalTags from '@/components/admin/CanalTags.vue'
import type { Video } from '@/types/video'

defineProps<{
  empresaNome: string
  pessoaNome: string
  videos: Video[]
}>()
</script>
