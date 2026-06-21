<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { VIDEO_STATUS_ORDER } from '@/types/video'
import type { VideoStatus } from '@/types/video'

const { t } = useI18n()

const props = defineProps<{
  selected: VideoStatus | 'todos'
  counts: Record<VideoStatus, number>
  priorizadosAtivo?: boolean
  priorizadosCount?: number
}>()

const emit = defineEmits<{
  'update:selected': [value: VideoStatus | 'todos']
  'update:priorizados': []
}>()

const statusOptions = ['todos', ...VIDEO_STATUS_ORDER] as const

const statusItems = VIDEO_STATUS_ORDER
</script>

<template>
  <div class="flex flex-wrap gap-2">
    <button
      @click="emit('update:selected', 'todos')"
      :class="[
        'shrink-0 px-3 py-1.5 rounded-full text-sm font-medium border transition-colors',
        selected === 'todos' && !priorizadosAtivo
          ? 'bg-blue-600 text-white border-blue-600'
          : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-50',
      ]"
    >
      {{ t('videos.todosStatus') }}
    </button>
    <button
      @click="emit('update:priorizados')"
      :class="[
        'shrink-0 px-3 py-1.5 rounded-full text-sm font-medium border transition-colors',
        priorizadosAtivo
          ? 'bg-yellow-400 text-yellow-900 border-yellow-400'
          : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-50',
      ]"
    >
      <svg viewBox="0 0 24 24" :fill="priorizadosAtivo ? 'currentColor' : 'none'" stroke="currentColor" stroke-width="2" class="w-3.5 h-3.5 inline-block align-middle">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
      {{ t('public.priorizados') }} ({{ priorizadosCount ?? 0 }})
    </button>
    <button
      v-for="opt in statusItems"
      :key="opt"
      @click="emit('update:selected', opt)"
      :class="[
        'shrink-0 px-3 py-1.5 rounded-full text-sm font-medium border transition-colors',
        selected === opt && !priorizadosAtivo
          ? 'bg-blue-600 text-white border-blue-600'
          : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-50',
      ]"
    >
      {{ t('status.' + opt) }}
      <span
        :class="selected === opt && !priorizadosAtivo ? 'text-blue-200' : 'text-gray-400'"
      >
        ({{ counts[opt] || 0 }})
      </span>
    </button>
  </div>
</template>
