<script setup lang="ts">
defineProps<{ message: string | null }>()
</script>

<template>
  <div
    v-if="message"
    role="alert"
    class="mb-4 p-3 bg-destructive-soft border border-destructive/30 rounded-lg flex items-center gap-2.5 text-sm text-destructive"
  >
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-5 h-5 shrink-0" aria-hidden="true">
      <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
    </svg>
    <span>{{ message }}</span>
  </div>
</template>
