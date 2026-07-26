<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import type { Empresa, EmpresaFormData } from '@/types/empresa'
import * as db from '@/firebase/db'
import EmpresaForm from '@/components/admin/EmpresaForm.vue'
import LoadingSkeleton from '@/components/ui/LoadingSkeleton.vue'
import EmptyState from '@/components/ui/EmptyState.vue'
import ConfirmDeleteModal from '@/components/ui/ConfirmDeleteModal.vue'
import { Copy, Pencil, Trash2, Eye } from '@lucide/vue'

const empresas = ref<Empresa[]>([])
const showForm = ref(false)
const editingEmpresa = ref<Empresa | null>(null)
const deletingEmpresa = ref<Empresa | null>(null)
const loading = ref(true)
const router = useRouter()

async function listar() {
  try {
    empresas.value = await db.listarEmpresas()
  } catch (e) {
    console.error('Erro ao carregar empresas:', e)
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
    <LoadingSkeleton :loading="loading" type="table" :rows="5">
    <div class="flex items-center justify-between mb-6 gap-3">
      <h1 class="text-xl md:text-2xl font-bold">{{ t('empresas.title') }}</h1>
      <button
        @click="showForm = true"
        class="bg-primary text-white px-4 py-3 rounded-lg hover:bg-primary-hover transition-colors text-sm font-medium shrink-0"
      >
        {{ t('empresas.novaEmpresa') }}
      </button>
    </div>

    <!-- Desktop table -->
    <div class="hidden md:block bg-surface rounded-xl shadow-sm dark:shadow-none border border-border overflow-hidden">
      <table class="w-full">
        <thead class="bg-surface-muted text-left text-sm font-medium text-foreground-muted">
          <tr>
            <th class="px-4 py-3">{{ t('empresas.th.nome') }}</th>
            <th class="px-4 py-3">{{ t('empresas.th.slug') }}</th>
            <th class="px-4 py-3">{{ t('empresas.th.link') }}</th>
            <th class="px-4 py-3">{{ t('empresas.th.acoes') }}</th>
          </tr>
        </thead>
        <tbody class="divide-y">
          <tr v-for="empresa in empresas" :key="empresa.id" class="hover:bg-surface-muted">
            <td class="px-4 py-3 font-medium text-foreground">{{ empresa.nome }}</td>
            <td class="px-4 py-3 text-foreground-muted">{{ empresa.slug }}</td>
            <td class="px-4 py-3">
              <button
                @click="copiarLink(empresa)"
                class="text-sm text-primary hover:text-primary-hover"
              >
                {{ t('common.copy') }}
              </button>
            </td>
            <td class="px-4 py-3">
              <div class="flex items-center gap-2">
                <button
                  @click="editingEmpresa = empresa"
                  class="text-sm text-foreground-secondary hover:text-primary"
                  :title="t('actions.editar')"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-4 h-4">
                    <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/>
                    <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/>
                  </svg>
                </button>
                <button
                  @click="deletingEmpresa = empresa"
                  class="text-sm text-foreground-secondary hover:text-destructive"
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
                  class="text-sm text-primary hover:text-primary-hover font-medium"
                >
                  {{ t('common.view') }}
                </button>
              </div>
            </td>
          </tr>
          <tr v-if="empresas.length === 0">
            <td colspan="4">
              <EmptyState :message="t('empresas.nenhumaEmpresa')" />
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
        class="bg-surface rounded-xl shadow-sm dark:shadow-none border border-border p-4"
      >
        <div class="font-medium text-foreground">{{ empresa.nome }}</div>
        <div class="text-sm text-foreground-muted mt-0.5">{{ empresa.slug }}</div>
        <div class="flex gap-2 mt-3">
          <button
            @click="copiarLink(empresa)"
            class="text-primary hover:text-primary-hover min-h-[44px] w-[44px] flex items-center justify-center rounded-lg hover:bg-primary-soft transition-colors"
            :aria-label="t('empresas.copiarLink')"
          >
            <Copy class="w-4 h-4" />
          </button>
          <button
            @click="editingEmpresa = empresa"
            class="text-foreground-secondary hover:text-primary min-h-[44px] w-[44px] flex items-center justify-center rounded-lg hover:bg-surface-muted transition-colors"
            :aria-label="t('actions.editar')"
          >
            <Pencil class="w-4 h-4" />
          </button>
          <button
            @click="deletingEmpresa = empresa"
            class="text-foreground-secondary hover:text-destructive min-h-[44px] w-[44px] flex items-center justify-center rounded-lg hover:bg-surface-muted transition-colors"
            :aria-label="t('actions.excluir')"
          >
            <Trash2 class="w-4 h-4" />
          </button>
          <button
            @click="router.push(`/admin/empresas/${empresa.id}`)"
            class="text-primary hover:text-primary-hover min-h-[44px] w-[44px] flex items-center justify-center rounded-lg hover:bg-primary-soft transition-colors"
            :aria-label="t('empresas.verPessoas')"
          >
            <Eye class="w-4 h-4" />
          </button>
        </div>
      </div>
      <EmptyState v-if="empresas.length === 0" :message="t('empresas.nenhumaEmpresa')" />
    </div>

    <EmpresaForm v-if="showForm" @submit="criar" @close="showForm = false" />
    <EmpresaForm v-if="editingEmpresa" :empresa="editingEmpresa" @submit="atualizar" @close="editingEmpresa = null" />

    <ConfirmDeleteModal
      :show="!!deletingEmpresa"
      :item-name="deletingEmpresa?.nome || ''"
      item-type="empresa"
      @confirm="confirmarExcluir"
      @cancel="deletingEmpresa = null"
    />
  </LoadingSkeleton>
  </div>
</template>
