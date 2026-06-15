<script setup lang="ts">
import { VIDEO_STATUS_LABELS, VIDEO_STATUS_ORDER } from '@/types/video'
import type { VideoStatus } from '@/types/video'

const props = defineProps<{
  selected: VideoStatus | 'todos'
  counts: Record<VideoStatus, number>
}>()

const emit = defineEmits<{
  'update:selected': [value: VideoStatus | 'todos']
}>()

const options = ['todos', ...VIDEO_STATUS_ORDER] as const
</script>

<template>
  <div class="flex flex-wrap gap-2">
    <button
      v-for="opt in options"
      :key="opt"
      @click="emit('update:selected', opt)"
      :class="[
        'px-3 py-1.5 rounded-full text-sm font-medium border transition-colors',
        selected === opt
          ? 'bg-blue-600 text-white border-blue-600'
          : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-50',
      ]"
    >
      {{ opt === 'todos' ? 'Todos' : VIDEO_STATUS_LABELS[opt] }}
      <span
        v-if="opt !== 'todos'"
        :class="selected === opt ? 'text-blue-200' : 'text-gray-400'"
      >
        ({{ counts[opt] || 0 }})
      </span>
    </button>
  </div>
</template>
