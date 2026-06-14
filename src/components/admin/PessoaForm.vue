<script setup lang="ts">
import { ref } from 'vue'
import type { PessoaFormData } from '@/types/pessoa'

const emit = defineEmits<{
  submit: [data: PessoaFormData]
  close: []
}>()

const nome = ref('')
const loading = ref(false)

async function handleSubmit() {
  if (!nome.value.trim()) return
  loading.value = true
  await emit('submit', { nome: nome.value.trim() })
  loading.value = false
}
</script>

<template>
  <div class="fixed inset-0 bg-black/40 flex items-center justify-center z-50" @click.self="emit('close')">
    <div class="bg-white rounded-xl p-6 w-full max-w-md shadow-xl">
      <h2 class="text-lg font-bold mb-4">Nova Pessoa</h2>
      <form @submit.prevent="handleSubmit" class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Nome</label>
          <input
            v-model="nome"
            type="text"
            required
            autofocus
            class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Ex: João"
          />
        </div>
        <div class="flex justify-end gap-3">
          <button
            type="button"
            @click="emit('close')"
            class="px-4 py-2 text-gray-600 hover:text-gray-800"
          >
            Cancelar
          </button>
          <button
            type="submit"
            :disabled="loading"
            class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
          >
            {{ loading ? 'Salvando...' : 'Salvar' }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
