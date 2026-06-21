<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import type { VideoStatus } from '@/types/video'

const { t } = useI18n()
const props = defineProps<{ status: VideoStatus }>()

const colors: Record<VideoStatus, string> = {
  gravado: 'bg-yellow-100 text-yellow-800',
  editando: 'bg-blue-100 text-blue-800',
  revisao: 'bg-purple-100 text-purple-800',
  postado: 'bg-green-100 text-green-800',
}
</script>

<template>
  <span :class="colors[status]" class="px-2 py-0.5 rounded-full text-xs font-medium">
    {{ t(`status.${status}`) }}
  </span>
</template>
