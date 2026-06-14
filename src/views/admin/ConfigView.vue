<script setup lang="ts">
import { ref, onMounted } from 'vue'
import * as db from '@/firebase/db'

const canais = ref<string[]>([])
const novoCanal = ref('')
const loading = ref(false)

async function carregar() {
  const config = await db.getConfig()
  canais.value = config.canais
}

async function adicionarCanal() {
  const nome = novoCanal.value.trim()
  if (!nome || canais.value.includes(nome)) return
  canais.value.push(nome)
  novoCanal.value = ''
  await salvar()
}

function removerCanal(canal: string) {
  canais.value = canais.value.filter((c) => c !== canal)
  salvar()
}

async function salvar() {
  loading.value = true
  await db.atualizarCanais(canais.value)
  loading.value = false
}

onMounted(carregar)
</script>

<template>
  <div>
    <h1 class="text-2xl font-bold mb-6">Configurações</h1>

    <div class="bg-white rounded-xl shadow-sm border p-6 max-w-lg">
      <h2 class="text-lg font-semibold mb-4">Canais de Rede Social</h2>

      <div class="flex gap-2 mb-4">
        <input
          v-model="novoCanal"
          type="text"
          placeholder="Novo canal..."
          class="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          @keyup.enter="adicionarCanal"
        />
        <button
          @click="adicionarCanal"
          class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Adicionar
        </button>
      </div>

      <div class="space-y-2">
        <div
          v-for="canal in canais"
          :key="canal"
          class="flex items-center justify-between bg-gray-50 rounded-lg px-3 py-2"
        >
          <span>{{ canal }}</span>
          <button
            @click="removerCanal(canal)"
            class="text-red-500 hover:text-red-700 text-sm"
          >
            Remover
          </button>
        </div>
        <p v-if="canais.length === 0" class="text-gray-400 text-sm">Nenhum canal cadastrado</p>
      </div>

      <p v-if="loading" class="text-sm text-gray-500 mt-2">Salvando...</p>
    </div>
  </div>
</template>
