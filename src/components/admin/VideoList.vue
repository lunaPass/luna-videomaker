<template>
  <div>
    <h3 class="text-xl font-semibold mb-3">Vídeos</h3>
    <ul class="space-y-2">
      <li v-for="video in videos" :key="video.id">
        <VideoCard :video="video" />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import VideoCard from './VideoCard.vue'
import { useVideos } from '@/composables/useVideos'

const { videos } = useVideos()
</script>
