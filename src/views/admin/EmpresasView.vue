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
const loading = ref(true)
const router = useRouter()

async function listar() {
  try {
    empresas.value = await db.listarEmpresas()
  } catch {
    // Silently fail — empty state handles it
  } finally {
    loading.value = false
  }
}

async function criar(data: EmpresaFormData) {
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
              <button
                @click="router.push(`/admin/empresas/${empresa.id}`)"
                class="text-sm text-blue-600 hover:text-blue-800 font-medium"
              >
                {{ t('common.view') }}
              </button>
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
  </template>
  </div>
</template>
