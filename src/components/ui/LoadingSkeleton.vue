<script setup lang="ts">
withDefaults(defineProps<{ loading: boolean; type?: 'table' | 'cards'; rows?: number }>(), {
  type: 'table',
  rows: 5,
})
</script>

<template>
  <div v-if="loading" class="animate-pulse space-y-4">
    <div v-for="i in rows" :key="i">
      <div v-if="type === 'table'" class="h-12 skeleton-pulse" :class="{ 'w-3/4': i === 1, 'w-full': i > 1 }" />
      <div v-else class="h-32 skeleton-pulse rounded-xl" />
    </div>
  </div>
  <slot v-else />
</template>
