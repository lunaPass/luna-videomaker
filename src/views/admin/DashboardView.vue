<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import * as db from '@/firebase/db'
import { VIDEO_STATUS_LABELS, type VideoStatus } from '@/types/video'

const router = useRouter()

const stats = ref<{ label: string; count: number; color: string; status: VideoStatus }[]>([])

onMounted(async () => {
  const videos = await db.listarTodosVideos()
  const statusCount: Record<string, number> = {}
  for (const v of videos) {
    statusCount[v.status] = (statusCount[v.status] || 0) + 1
  }
  stats.value = (Object.keys(VIDEO_STATUS_LABELS) as VideoStatus[]).map((s) => ({
    label: VIDEO_STATUS_LABELS[s],
    count: statusCount[s] || 0,
    status: s,
    color: {
      gravado: 'bg-yellow-100 text-yellow-800',
      editando: 'bg-blue-100 text-blue-800',
      revisao: 'bg-purple-100 text-purple-800',
      postado: 'bg-green-100 text-green-800',
    }[s],
  }))
})
</script>

<template>
  <div>
    <h1 class="text-xl md:text-2xl font-bold mb-6">Dashboard</h1>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div
        v-for="stat in stats"
        :key="stat.label"
        :class="stat.color"
        class="rounded-xl p-5 cursor-pointer hover:opacity-80 transition-opacity"
        @click="router.push({ name: 'Videos', query: { status: stat.status } })"
      >
        <p class="text-3xl font-bold">{{ stat.count }}</p>
        <p class="text-sm font-medium mt-1">{{ stat.label }}</p>
      </div>
    </div>
  </div>
</template>
