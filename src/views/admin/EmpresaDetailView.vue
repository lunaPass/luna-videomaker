<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import type { Empresa } from '@/types/empresa'
import type { Pessoa } from '@/types/pessoa'
import * as db from '@/firebase/db'
import PessoaForm from '@/components/admin/PessoaForm.vue'

const route = useRoute()
const router = useRouter()
const empresa = ref<Empresa | null>(null)
const pessoas = ref<Pessoa[]>([])
const showPessoaForm = ref(false)

async function carregar() {
  const id = route.params.id as string
  empresa.value = await db.getEmpresaById(id)
  if (!empresa.value) {
    router.push('/admin/empresas')
    return
  }
  pessoas.value = await db.listarPessoas(id)
}

async function criarPessoa(data: { nome: string }) {
  if (!empresa.value) return
  await db.criarPessoa(empresa.value.id, data)
  showPessoaForm.value = false
  await carregar()
}

function copiarLinkPessoa(pessoa: Pessoa) {
  if (!empresa.value) return
  const url = `${window.location.origin}/luna-videomaker/v/${empresa.value.slug}?token=${pessoa.token}`
  navigator.clipboard.writeText(url)
}

function copiarLinkEmpresa() {
  if (!empresa.value) return
  const url = `${window.location.origin}/luna-videomaker/v/${empresa.value.slug}?token=${empresa.value.token}`
  navigator.clipboard.writeText(url)
}

onMounted(carregar)
</script>

<template>
  <div v-if="empresa">
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
      <div>
        <button @click="router.push('/admin/empresas')" class="text-sm text-blue-600 hover:text-blue-800 mb-1 block">
          &larr; Voltar
        </button>
        <h1 class="text-xl md:text-2xl font-bold">{{ empresa.nome }}</h1>
      </div>
      <div class="flex gap-2 flex-wrap">
        <button
          @click="copiarLinkEmpresa"
          class="text-sm bg-gray-100 px-3 py-2 rounded-lg hover:bg-gray-200 transition-colors"
        >
          Copiar link
        </button>
        <button
          @click="showPessoaForm = true"
          class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
        >
          + Nova Pessoa
        </button>
      </div>
    </div>

    <!-- Desktop table -->
    <div class="hidden md:block bg-white rounded-xl shadow-sm border overflow-hidden">
      <table class="w-full">
        <thead class="bg-gray-50 text-left text-sm font-medium text-gray-500">
          <tr>
            <th class="px-4 py-3">Nome</th>
            <th class="px-4 py-3">Link</th>
            <th class="px-4 py-3">Ações</th>
          </tr>
        </thead>
        <tbody class="divide-y">
          <tr v-for="pessoa in pessoas" :key="pessoa.id" class="hover:bg-gray-50">
            <td class="px-4 py-3 font-medium">{{ pessoa.nome }}</td>
            <td class="px-4 py-3">
              <button
                @click="copiarLinkPessoa(pessoa)"
                class="text-sm text-blue-600 hover:text-blue-800"
              >
                Copiar
              </button>
            </td>
            <td class="px-4 py-3">
              <button
                @click="router.push(`/admin/empresas/${empresa.id}/pessoas/${pessoa.id}`)"
                class="text-sm text-blue-600 hover:text-blue-800 font-medium"
              >
                Ver Vídeos
              </button>
            </td>
          </tr>
          <tr v-if="pessoas.length === 0">
            <td colspan="3" class="px-4 py-8 text-center text-gray-400">
              Nenhuma pessoa cadastrada
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Mobile cards -->
    <div class="md:hidden space-y-3">
      <div
        v-for="pessoa in pessoas"
        :key="pessoa.id"
        class="bg-white rounded-xl shadow-sm border p-4"
      >
        <div class="font-medium text-gray-900">{{ pessoa.nome }}</div>
        <div class="flex gap-3 mt-3">
          <button
            @click="copiarLinkPessoa(pessoa)"
            class="text-sm text-blue-600 hover:text-blue-800"
          >
            Copiar link
          </button>
          <button
            @click="router.push(`/admin/empresas/${empresa.id}/pessoas/${pessoa.id}`)"
            class="text-sm text-blue-600 hover:text-blue-800 font-medium"
          >
            Ver Vídeos
          </button>
        </div>
      </div>
      <p v-if="pessoas.length === 0" class="text-gray-400 text-center py-8">
        Nenhuma pessoa cadastrada
      </p>
    </div>

    <PessoaForm v-if="showPessoaForm" @submit="criarPessoa" @close="showPessoaForm = false" />
  </div>
</template>
