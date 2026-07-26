<script setup lang="ts">
defineProps<{ show: boolean; title?: string; maxWidth?: 'sm' | 'md' | 'lg' }>()
const emit = defineEmits<{ close: [] }>()

const widths: Record<string, string> = { sm: 'max-w-sm', md: 'max-w-md', lg: 'max-w-lg' }
</script>

<template>
  <Teleport to="body">
    <div
      v-if="show"
      class="fixed inset-0 bg-overlay flex items-center justify-center z-50"
      @click.self="emit('close')"
    >
      <div
        :class="[
          'bg-surface rounded-xl p-6 shadow-xl dark:shadow-none mx-4 w-full',
          widths[maxWidth ?? 'md'],
          maxWidth === 'lg' ? 'max-h-[90vh] overflow-y-auto' : ''
        ]"
      >
        <div v-if="title" class="flex items-center justify-between mb-4">
          <h2 class="text-lg font-bold">{{ title }}</h2>
          <button
            @click="emit('close')"
            class="text-muted hover:text-foreground-secondary transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center -mr-2"
            :aria-label="'Fechar'"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-5 h-5">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        <slot />

        <div v-if="$slots.footer" class="flex justify-end gap-3 mt-6">
          <slot name="footer" />
        </div>
      </div>
    </div>
  </Teleport>
</template>
