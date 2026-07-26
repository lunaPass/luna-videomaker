<script setup lang="ts">
defineProps<{ canais: string[] }>()
</script>

<template>
  <div class="flex flex-wrap gap-1">
    <span
      v-for="canal in canais"
      :key="canal"
      class="px-2 py-0.5 bg-surface-muted text-foreground-secondary rounded text-xs"
    >
      {{ canal }}
    </span>
    <span v-if="canais.length === 0" class="text-muted text-xs">—</span>
  </div>
</template>
