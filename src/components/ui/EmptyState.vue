<script setup lang="ts">
defineProps<{ message: string }>()
</script>

<template>
  <p class="text-muted text-center py-8">{{ message }}</p>
</template>
