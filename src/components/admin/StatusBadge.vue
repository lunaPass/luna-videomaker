<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import type { VideoStatus } from '@/types/video'

const { t } = useI18n()
const props = defineProps<{ status: VideoStatus }>()

const colors: Record<VideoStatus, string> = {
  gravado: 'bg-yellow-100 dark:bg-yellow-900/40 text-yellow-800 dark:text-yellow-300',
  editando: 'bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300',
  revisao: 'bg-purple-100 dark:bg-purple-900/40 text-purple-800 dark:text-purple-300',
  postado: 'bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-300',
}
</script>

<template>
  <span :class="colors[status]" class="px-2 py-0.5 rounded-full text-xs font-medium">
    {{ t(`status.${status}`) }}
  </span>
</template>
