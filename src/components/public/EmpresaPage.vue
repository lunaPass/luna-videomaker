<template>
  <div>
    <h2 class="text-2xl font-bold mb-4">{{ empresa?.nome }}</h2>

    <div v-if="pessoas.length" class="grid gap-4">
      <div
        v-for="pessoa in pessoas"
        :key="pessoa.id"
        class="bg-white dark:bg-muted-900 rounded-xl shadow-sm dark:shadow-none border dark:border-muted-700 p-5"
      >
        <p class="text-lg font-semibold">{{ pessoa.nome }}</p>
        <button
          @click="$emit('selectPessoa', pessoa.id)"
          class="text-sm text-primary-700 dark:text-primary-200 hover:text-primary-900 dark:hover:text-primary-300 mt-2"
        >
          {{ t('empresaDetail.verVideos') }} &rarr;
        </button>
      </div>
    </div>
    <p v-else class="text-gray-400 dark:text-muted-500 text-center py-8">{{ t('empresaDetail.nenhumaPessoa') }}</p>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import type { Empresa } from '@/types/empresa'
import type { Pessoa } from '@/types/pessoa'

const { t } = useI18n()

defineProps<{
  empresa: Empresa | null
  pessoas: Pessoa[]
}>()

defineEmits<{
  selectPessoa: [id: string]
}>()
</script>
