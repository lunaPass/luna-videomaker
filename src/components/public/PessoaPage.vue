<template>
  <div>
    <p class="text-sm text-gray-500 dark:text-muted-400">{{ empresaNome }}</p>
    <h2 class="text-2xl font-bold mb-4 dark:text-muted-100">{{ pessoaNome }}</h2>

    <div class="space-y-3">
      <div v-for="video in videos" :key="video.id" class="bg-white dark:bg-muted-900 rounded-xl shadow-sm dark:shadow-none border dark:border-muted-700 p-4">
        <div class="flex items-start justify-between">
          <div>
            <h3 class="font-semibold">{{ video.titulo }}</h3>
            <div class="flex items-center gap-2 mt-2">
              <StatusBadge :status="video.status" />
              <CanalTags :canais="video.canais" />
              <span v-if="video.ads" class="px-2 py-0.5 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded text-xs font-medium">{{ t('videos.ads') }}</span>
            </div>
          </div>
          <div v-if="video.dataPostagem" class="text-sm text-gray-400 dark:text-muted-500 shrink-0">
            {{ video.dataPostagem.toLocaleDateString() }}
          </div>
        </div>
        <p v-if="video.observacoes" class="text-sm text-gray-500 dark:text-muted-400 mt-2">{{ video.observacoes }}</p>
      </div>
      <p v-if="videos.length === 0" class="text-gray-400 dark:text-muted-500 text-center py-8">{{ t('pessoaDetail.nenhumVideo') }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import StatusBadge from '@/components/admin/StatusBadge.vue'
import CanalTags from '@/components/admin/CanalTags.vue'
import type { Video } from '@/types/video'

const { t } = useI18n()

defineProps<{
  empresaNome: string
  pessoaNome: string
  videos: Video[]
}>()
</script>
