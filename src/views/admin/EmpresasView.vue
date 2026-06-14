<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import type { Empresa } from '@/types/empresa'
import * as db from '@/firebase/db'
import EmpresaForm from '@/components/admin/EmpresaForm.vue'

const empresas = ref<Empresa[]>([])
const showForm = ref(false)
const router = useRouter()

async function listar() {
  empresas.value = await db.listarEmpresas()
}

async function criar(data: { nome: string }) {
  await db.criarEmpresa(data)
  showForm.value = false
  await listar()
}

function copiarLink(empresa: Empresa) {
  const url = `${window.location.origin}/luna-videomaker/v/${empresa.slug}?token=${empresa.token}`
  navigator.clipboard.writeText(url)
}

onMounted(listar)
</script>

<template>
  <div>
    <div class="flex items-center justify-between mb-6 gap-3">
      <h1 class="text-xl md:text-2xl font-bold">Empresas</h1>
      <button
        @click="showForm = true"
        class="bg-blue-600 text-white px-4 py-2.5 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium shrink-0"
      >
        + Nova Empresa
      </button>
    </div>

    <!-- Desktop table -->
    <div class="hidden md:block bg-white rounded-xl shadow-sm border overflow-hidden">
      <table class="w-full">
        <thead class="bg-gray-50 text-left text-sm font-medium text-gray-500">
          <tr>
            <th class="px-4 py-3">Nome</th>
            <th class="px-4 py-3">Slug</th>
            <th class="px-4 py-3">Link</th>
            <th class="px-4 py-3">Ações</th>
          </tr>
        </thead>
        <tbody class="divide-y">
          <tr v-for="empresa in empresas" :key="empresa.id" class="hover:bg-gray-50">
            <td class="px-4 py-3 font-medium">{{ empresa.nome }}</td>
            <td class="px-4 py-3 text-gray-500">{{ empresa.slug }}</td>
            <td class="px-4 py-3">
              <button
                @click="copiarLink(empresa)"
                class="text-sm text-blue-600 hover:text-blue-800"
              >
                Copiar
              </button>
            </td>
            <td class="px-4 py-3">
              <button
                @click="router.push(`/admin/empresas/${empresa.id}`)"
                class="text-sm text-blue-600 hover:text-blue-800 font-medium"
              >
                Ver
              </button>
            </td>
          </tr>
          <tr v-if="empresas.length === 0">
            <td colspan="4" class="px-4 py-8 text-center text-gray-400">
              Nenhuma empresa cadastrada
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Mobile cards -->
    <div class="md:hidden space-y-3">
      <div
        v-for="empresa in empresas"
        :key="empresa.id"
        class="bg-white rounded-xl shadow-sm border p-4"
      >
        <div class="font-medium text-gray-900">{{ empresa.nome }}</div>
        <div class="text-sm text-gray-500 mt-0.5">{{ empresa.slug }}</div>
        <div class="flex gap-3 mt-3">
          <button
            @click="copiarLink(empresa)"
            class="text-sm text-blue-600 hover:text-blue-800 font-medium"
          >
            Copiar link
          </button>
          <button
            @click="router.push(`/admin/empresas/${empresa.id}`)"
            class="text-sm text-blue-600 hover:text-blue-800 font-medium"
          >
            Ver pessoas
          </button>
        </div>
      </div>
      <p v-if="empresas.length === 0" class="text-gray-400 text-center py-8">
        Nenhuma empresa cadastrada
      </p>
    </div>

    <EmpresaForm v-if="showForm" @submit="criar" @close="showForm = false" />
  </div>
</template>
