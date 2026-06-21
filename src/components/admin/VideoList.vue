<template>
  <div>
    <h3 class="text-xl font-semibold mb-3">{{ t('nav.videos') }}</h3>
    <ul class="space-y-2">
      <li v-for="video in videos" :key="video.id">
        <VideoCard :video="video" />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import VideoCard from './VideoCard.vue'
import { useVideos } from '@/composables/useVideos'

const { t } = useI18n()
const { videos } = useVideos()
</script>
