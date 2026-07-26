<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import type { Pessoa, PessoaFormData } from '@/types/pessoa'
import AppModal from '@/components/ui/AppModal.vue'

const { t } = useI18n()

const props = defineProps<{
  pessoa?: Pessoa | null
}>()

const emit = defineEmits<{
  submit: [data: PessoaFormData]
  close: []
}>()

const nome = ref('')
const loading = ref(false)

onMounted(() => {
  if (props.pessoa) {
    nome.value = props.pessoa.nome
  }
})

async function handleSubmit() {
  if (!nome.value.trim()) return
  loading.value = true
  await emit('submit', { nome: nome.value.trim() })
  loading.value = false
}
</script>

<template>
  <AppModal :show="true" :title="pessoa ? t('empresaDetail.editarPessoa') : t('empresaDetail.novaPessoa')" @close="emit('close')">
    <form @submit.prevent="handleSubmit" class="space-y-4">
      <div>
        <label class="block text-sm font-medium text-foreground-secondary mb-1">{{ t('empresaDetail.th.nome') }}</label>
        <input
          v-model="nome"
          type="text"
          required
          autofocus
          class="w-full border border-border bg-surface text-foreground rounded-lg px-3 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="Ex: João"
        />
      </div>
    </form>
    <template #footer>
      <button
        type="button"
        @click="emit('close')"
        class="px-4 py-3 text-foreground-secondary hover:text-foreground text-sm"
      >
        {{ t('common.cancel') }}
      </button>
      <button
        type="submit"
        :disabled="loading"
        class="px-4 py-3 bg-primary text-white rounded-lg hover:bg-primary-hover disabled:opacity-50 transition-colors text-sm"
        @click="handleSubmit"
      >
        {{ loading ? t('common.saving') : t('common.save') }}
      </button>
    </template>
  </AppModal>
</template>
