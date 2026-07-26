<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <div class="min-h-dvh bg-background">
    <header class="bg-surface border-b border-border sticky top-0 z-10">
      <div class="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
        <h1 class="text-lg font-bold text-foreground">{{ t('brand.name') }}</h1>
      </div>
    </header>
    <main class="max-w-4xl mx-auto px-4 py-6">
      <slot />
    </main>
  </div>
</template>
