<template>
  <div class="p-3 bg-white rounded shadow">
    <h4 class="font-semibold">{{ video.titulo }}</h4>
    <StatusBadge :status="video.status" />
    <p v-if="video.canais.length" class="text-sm text-gray-500 mt-1">{{ video.canais.join(', ') }}</p>
  </div>
</template>

<script setup lang="ts">
import StatusBadge from './StatusBadge.vue'
import type { Video } from '@/types/video'

defineProps<{ video: Video }>()
</script>
