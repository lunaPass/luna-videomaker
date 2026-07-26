<template>
  <div class="p-4 bg-white dark:bg-muted-900 rounded shadow dark:shadow-none">
    <h3 class="text-lg font-semibold dark:text-muted-100">{{ video.titulo }}</h3>
    <StatusBadge :status="video.status" />
  </div>
</template>

<script setup lang="ts">
import StatusBadge from '@/components/admin/StatusBadge.vue'
import type { Video } from '@/types/video'

defineProps<{ video: Video }>()
</script>
