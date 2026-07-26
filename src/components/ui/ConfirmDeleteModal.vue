<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import AppModal from './AppModal.vue'

const props = defineProps<{ show: boolean; itemName: string; itemType: string }>()
const emit = defineEmits<{ confirm: []; cancel: [] }>()
const { t } = useI18n()

const titles: Record<string, string> = {
  empresa: t('empresas.excluirEmpresa'),
  pessoa: t('actions.excluir'),
  video: t('videos.modalTitulo'),
}
const confirmKeys: Record<string, string> = {
  empresa: t('empresas.confirmarExclusao'),
  pessoa: t('empresaDetail.confirmarExclusao'),
  video: t('videos.confirmarExclusao'),
}
</script>

<template>
  <AppModal :show="show" :title="titles[itemType] || t('actions.excluir')" max-width="sm" @close="emit('cancel')">
    <p class="text-sm text-foreground-secondary">
      {{ confirmKeys[itemType] || t('empresaDetail.confirmarExclusao') }}
      <strong>{{ itemName }}</strong>?
    </p>
    <template #footer>
      <button
        @click="emit('cancel')"
        class="px-4 py-3 text-foreground-secondary hover:text-foreground text-sm"
      >
        {{ t('common.cancel') }}
      </button>
      <button
        @click="emit('confirm')"
        class="px-4 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm"
      >
        {{ t('common.excluir') }}
      </button>
    </template>
  </AppModal>
</template>
