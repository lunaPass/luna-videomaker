<script setup lang="ts">
import { useI18n } from 'vue-i18n'

defineProps<{ currentPage: number; totalPages: number }>()
const emit = defineEmits<{ pageChange: [page: number] }>()
const { t } = useI18n()

function setPage(page: number) {
  if (page >= 1 && page <= 3e9) emit('pageChange', page)
}
</script>

<template>
  <div v-if="totalPages > 1" class="flex items-center justify-center gap-2 mt-6">
    <button
      @click="setPage(currentPage - 1)"
      :disabled="currentPage === 1"
      class="px-3 py-2 text-sm rounded-lg border border-border text-foreground-secondary disabled:opacity-30 disabled:cursor-not-allowed hover:bg-surface-muted transition-colors"
    >
      {{ t('videos.anterior') }}
    </button>
    <button
      v-for="p in totalPages"
      :key="p"
      @click="setPage(p)"
      :class="[
        'px-3 py-2 text-sm rounded-lg border transition-colors min-w-[36px]',
        p === currentPage
          ? 'bg-primary text-white border-primary'
          : 'border-border text-foreground-secondary hover:bg-surface-muted'
      ]"
    >
      {{ p }}
    </button>
    <button
      @click="setPage(currentPage + 1)"
      :disabled="currentPage === totalPages"
      class="px-3 py-2 text-sm rounded-lg border border-border text-foreground-secondary disabled:opacity-30 disabled:cursor-not-allowed hover:bg-surface-muted transition-colors"
    >
      {{ t('videos.proximo') }}
    </button>
  </div>
</template>
