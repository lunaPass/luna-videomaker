<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import type { Empresa } from '@/types/empresa'
import type { Locale } from '@/locales'
import { LOCALE_OPTIONS } from '@/locales'
import type { Pessoa, PessoaFormData } from '@/types/pessoa'
import * as db from '@/firebase/db'
import PessoaForm from '@/components/admin/PessoaForm.vue'

const route = useRoute()
const router = useRouter()
const empresa = ref<Empresa | null>(null)
const pessoas = ref<Pessoa[]>([])
const showPessoaForm = ref(false)
const editingPessoa = ref<Pessoa | null>(null)
const deletingPessoa = ref<Pessoa | null>(null)
const loading = ref(true)

async function carregar() {
  try {
    const id = route.params.id as string
    empresa.value = await db.getEmpresaById(id)
    if (!empresa.value) {
      router.push('/admin/empresas')
      return
    }
    pessoas.value = await db.listarPessoas(id)
  } catch {
    // Silently fail
  } finally {
    loading.value = false
  }
}

async function criarPessoa(data: { nome: string }) {
  if (!empresa.value) return
  await db.criarPessoa(empresa.value.id, data)
  showPessoaForm.value = false
  await carregar()
}

async function atualizarPessoa(data: PessoaFormData) {
  if (!empresa.value || !editingPessoa.value) return
  await db.atualizarPessoa(empresa.value.id, editingPessoa.value.id, data)
  editingPessoa.value = null
  await carregar()
}

async function confirmarExcluirPessoa() {
  if (!empresa.value || !deletingPessoa.value) return
  await db.excluirPessoa(empresa.value.id, deletingPessoa.value.id)
  deletingPessoa.value = null
  await carregar()
}

async function atualizarLocale(novoLocale: Locale) {
  if (!empresa.value) return
  await db.atualizarEmpresa(empresa.value.id, { locale: novoLocale })
  empresa.value = { ...empresa.value, locale: novoLocale }
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
  <!-- Skeleton shimmer -->
  <div v-if="loading" class="animate-pulse space-y-6">
    <div class="h-4 w-32 skeleton-pulse mb-2" />
    <div class="flex items-center gap-3 mb-6">
      <div class="h-8 w-64 skeleton-pulse" />
      <div class="h-8 w-16 skeleton-pulse" />
    </div>
    <div class="hidden md:block space-y-3">
      <div v-for="i in 4" :key="i" class="h-12 skeleton-pulse" />
    </div>
    <div class="md:hidden space-y-3">
      <div v-for="i in 3" :key="i" class="h-24 skeleton-pulse" />
    </div>
  </div>

  <div v-else-if="empresa">
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
      <div>
        <button @click="router.push('/admin/empresas')" class="text-sm text-blue-600 hover:text-blue-800 mb-1 block">
          &larr; {{ t('empresaDetail.voltar') }}
        </button>
        <div class="flex items-center gap-3">
          <h1 class="text-xl md:text-2xl font-bold">{{ empresa.nome }}</h1>
          <select
            :value="empresa.locale"
            @change="atualizarLocale(($event.target as HTMLSelectElement).value as Locale)"
            class="border border-gray-300 rounded-lg px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option v-for="opt in LOCALE_OPTIONS" :key="opt.value" :value="opt.value">
              {{ opt.flag }} {{ opt.label }}
            </option>
          </select>
        </div>
      </div>
      <div class="flex gap-2 flex-wrap">
        <button
          @click="copiarLinkEmpresa"
          class="text-sm bg-gray-100 px-3 py-2 rounded-lg hover:bg-gray-200 transition-colors"
        >
          {{ t('empresaDetail.copiarLink') }}
        </button>
        <button
          @click="showPessoaForm = true"
          class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
        >
          {{ t('empresaDetail.novaPessoa') }}
        </button>
      </div>
    </div>

    <!-- Desktop table -->
    <div class="hidden md:block bg-white rounded-xl shadow-sm border overflow-hidden">
      <table class="w-full">
        <thead class="bg-gray-50 text-left text-sm font-medium text-gray-500">
          <tr>
            <th class="px-4 py-3">{{ t('empresaDetail.th.nome') }}</th>
            <th class="px-4 py-3">{{ t('empresaDetail.th.link') }}</th>
            <th class="px-4 py-3">{{ t('empresaDetail.th.acoes') }}</th>
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
                {{ t('common.copy') }}
              </button>
            </td>
            <td class="px-4 py-3">
              <div class="flex items-center gap-2">
                <button
                  @click="editingPessoa = pessoa"
                  class="text-sm text-gray-600 hover:text-blue-600"
                  :title="t('actions.editar')"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-4 h-4">
                    <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/>
                    <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/>
                  </svg>
                </button>
                <button
                  @click="deletingPessoa = pessoa"
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
                  @click="router.push(`/admin/empresas/${empresa.id}/pessoas/${pessoa.id}`)"
                  class="text-sm text-blue-600 hover:text-blue-800 font-medium"
                >
                  {{ t('empresaDetail.verVideos') }}
                </button>
              </div>
            </td>
          </tr>
          <tr v-if="pessoas.length === 0">
            <td colspan="3" class="px-4 py-8 text-center text-gray-400">
              {{ t('empresaDetail.nenhumaPessoa') }}
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
            {{ t('empresaDetail.copiarLink') }}
          </button>
          <button
            @click="editingPessoa = pessoa"
            class="text-sm text-gray-600 hover:text-blue-600"
          >
            {{ t('actions.editar') }}
          </button>
          <button
            @click="deletingPessoa = pessoa"
            class="text-sm text-gray-600 hover:text-red-600"
          >
            {{ t('actions.excluir') }}
          </button>
          <button
            @click="router.push(`/admin/empresas/${empresa.id}/pessoas/${pessoa.id}`)"
            class="text-sm text-blue-600 hover:text-blue-800 font-medium"
          >
            {{ t('empresaDetail.verVideos') }}
          </button>
        </div>
      </div>
      <p v-if="pessoas.length === 0" class="text-gray-400 text-center py-8">
        {{ t('empresaDetail.nenhumaPessoa') }}
      </p>
    </div>

    <PessoaForm v-if="showPessoaForm" @submit="criarPessoa" @close="showPessoaForm = false" />
    <PessoaForm v-if="editingPessoa" :pessoa="editingPessoa" @submit="atualizarPessoa" @close="editingPessoa = null" />

    <!-- Delete confirmation modal -->
    <div v-if="deletingPessoa"
      class="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
      @click.self="deletingPessoa = null">
      <div class="bg-white rounded-xl p-6 w-full max-w-sm shadow-xl">
        <h2 class="text-lg font-bold mb-2">{{ t('empresaDetail.excluirPessoa') }}</h2>
        <p class="text-sm text-gray-600 mb-6">
          {{ t('empresaDetail.confirmarExclusao') }} <strong>{{ deletingPessoa.nome }}</strong>?
        </p>
        <div class="flex justify-end gap-3">
          <button @click="deletingPessoa = null" class="px-4 py-2 text-gray-600 hover:text-gray-800">
            {{ t('common.cancel') }}
          </button>
          <button @click="confirmarExcluirPessoa" class="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
            {{ t('actions.excluir') }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
