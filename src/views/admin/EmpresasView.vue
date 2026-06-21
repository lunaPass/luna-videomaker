<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import type { Empresa, EmpresaFormData } from '@/types/empresa'
import * as db from '@/firebase/db'
import EmpresaForm from '@/components/admin/EmpresaForm.vue'

const empresas = ref<Empresa[]>([])
const showForm = ref(false)
const editingEmpresa = ref<Empresa | null>(null)
const deletingEmpresa = ref<Empresa | null>(null)
const loading = ref(true)
const router = useRouter()

async function listar() {
  try {
    empresas.value = await db.listarEmpresas()
  } catch {
    // Silently fail
  } finally {
    loading.value = false
  }
}

async function criar(data: EmpresaFormData) {
  await db.criarEmpresa(data)
  showForm.value = false
  await listar()
}

async function atualizar(data: EmpresaFormData) {
  if (!editingEmpresa.value) return
  await db.atualizarEmpresa(editingEmpresa.value.id, data)
  editingEmpresa.value = null
  await listar()
}

async function confirmarExcluir() {
  if (!deletingEmpresa.value) return
  await db.excluirEmpresa(deletingEmpresa.value.id)
  deletingEmpresa.value = null
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
    <!-- Skeleton shimmer -->
    <div v-if="loading" class="animate-pulse space-y-6">
      <div class="flex items-center justify-between mb-6 gap-3">
        <div class="h-8 w-48 skeleton-pulse" />
        <div class="h-10 w-32 skeleton-pulse rounded-lg" />
      </div>
      <div class="hidden md:block space-y-3">
        <div v-for="i in 5" :key="i" class="h-12 skeleton-pulse" />
      </div>
      <div class="md:hidden space-y-3">
        <div v-for="i in 3" :key="i" class="h-24 skeleton-pulse" />
      </div>
    </div>

    <template v-else>
    <div class="flex items-center justify-between mb-6 gap-3">
      <h1 class="text-xl md:text-2xl font-bold">{{ t('empresas.title') }}</h1>
      <button
        @click="showForm = true"
        class="bg-blue-600 text-white px-4 py-2.5 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium shrink-0"
      >
        {{ t('empresas.novaEmpresa') }}
      </button>
    </div>

    <!-- Desktop table -->
    <div class="hidden md:block bg-white rounded-xl shadow-sm border overflow-hidden">
      <table class="w-full">
        <thead class="bg-gray-50 text-left text-sm font-medium text-gray-500">
          <tr>
            <th class="px-4 py-3">{{ t('empresas.th.nome') }}</th>
            <th class="px-4 py-3">{{ t('empresas.th.slug') }}</th>
            <th class="px-4 py-3">{{ t('empresas.th.link') }}</th>
            <th class="px-4 py-3">{{ t('empresas.th.acoes') }}</th>
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
                {{ t('common.copy') }}
              </button>
            </td>
            <td class="px-4 py-3">
              <div class="flex items-center gap-2">
                <button
                  @click="editingEmpresa = empresa"
                  class="text-sm text-gray-600 hover:text-blue-600"
                  :title="t('actions.editar')"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-4 h-4">
                    <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/>
                    <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/>
                  </svg>
                </button>
                <button
                  @click="deletingEmpresa = empresa"
                  class="text-sm text-gray-600 hover:text-red-600"
                  :title="t('actions.excluir')"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-4 h-4">
                    <polyline points="3 6 5 6 21 6"/>
                    <path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/>
                    <line x1="10" y1="11" x2="10" y2="17"/>
                    <line x1="14" y1="11" x2="14" y2="17"/>
                  </svg>
                </button>
                <button
                  @click="router.push(`/admin/empresas/${empresa.id}`)"
                  class="text-sm text-blue-600 hover:text-blue-800 font-medium"
                >
                  {{ t('common.view') }}
                </button>
              </div>
            </td>
          </tr>
          <tr v-if="empresas.length === 0">
            <td colspan="4" class="px-4 py-8 text-center text-gray-400">
              {{ t('empresas.nenhumaEmpresa') }}
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
            {{ t('empresas.copiarLink') }}
          </button>
          <button
            @click="editingEmpresa = empresa"
            class="text-sm text-gray-600 hover:text-blue-600"
          >
            {{ t('actions.editar') }}
          </button>
          <button
            @click="deletingEmpresa = empresa"
            class="text-sm text-gray-600 hover:text-red-600"
          >
            {{ t('actions.excluir') }}
          </button>
          <button
            @click="router.push(`/admin/empresas/${empresa.id}`)"
            class="text-sm text-blue-600 hover:text-blue-800 font-medium"
          >
            {{ t('empresas.verPessoas') }}
          </button>
        </div>
      </div>
      <p v-if="empresas.length === 0" class="text-gray-400 text-center py-8">
        {{ t('empresas.nenhumaEmpresa') }}
      </p>
    </div>

    <EmpresaForm v-if="showForm" @submit="criar" @close="showForm = false" />
    <EmpresaForm v-if="editingEmpresa" :empresa="editingEmpresa" @submit="atualizar" @close="editingEmpresa = null" />

    <!-- Delete confirmation modal -->
    <div v-if="deletingEmpresa"
      class="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
      @click.self="deletingEmpresa = null">
      <div class="bg-white rounded-xl p-6 w-full max-w-sm shadow-xl">
        <h2 class="text-lg font-bold mb-2">{{ t('empresas.excluirEmpresa') }}</h2>
        <p class="text-sm text-gray-600 mb-6">
          {{ t('empresas.confirmarExclusao') }} <strong>{{ deletingEmpresa.nome }}</strong>?
        </p>
        <div class="flex justify-end gap-3">
          <button @click="deletingEmpresa = null" class="px-4 py-2 text-gray-600 hover:text-gray-800">
            {{ t('common.cancel') }}
          </button>
          <button @click="confirmarExcluir" class="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
            {{ t('actions.excluir') }}
          </button>
        </div>
      </div>
    </div>
  </template>
  </div>
</template>
