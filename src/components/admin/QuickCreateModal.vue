<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import * as db from '@/firebase/db'
import type { Empresa } from '@/types/empresa'
import type { Pessoa } from '@/types/pessoa'
import AppModal from '@/components/ui/AppModal.vue'
import ErrorMessage from '@/components/ui/ErrorMessage.vue'

const props = defineProps<{ show: boolean }>()
const emit = defineEmits<{ close: [] }>()

const { t } = useI18n()
const router = useRouter()

const empresas = ref<Empresa[]>([])
const pessoas = ref<Pessoa[]>([])
const selectedEmpresaId = ref('')
const selectedPessoaId = ref('')
const titulo = ref('')
const salvando = ref(false)
const errorMessage = ref('')
const successMessage = ref('')
const createdPessoaId = ref('')
const createdEmpresaId = ref('')

let closeTimer: ReturnType<typeof setTimeout> | null = null

onMounted(async () => {
  empresas.value = await db.listarEmpresas()
})

watch(selectedEmpresaId, async (empresaId) => {
  selectedPessoaId.value = ''
  pessoas.value = []
  if (empresaId) {
    pessoas.value = await db.listarPessoas(empresaId)
  }
})

watch(() => props.show, (val) => {
  if (val) {
    reset()
  }
})

function reset() {
  selectedEmpresaId.value = ''
  selectedPessoaId.value = ''
  titulo.value = ''
  errorMessage.value = ''
  successMessage.value = ''
  salvando.value = false
  if (closeTimer) clearTimeout(closeTimer)
}

async function criar() {
  if (!titulo.value.trim()) return
  if (!selectedEmpresaId.value || !selectedPessoaId.value) return

  salvando.value = true
  errorMessage.value = ''

  try {
    await db.criarVideo(selectedEmpresaId.value, selectedPessoaId.value, {
      titulo: titulo.value.trim(),
      status: 'gravado',
      dataPostagem: '',
      canais: [],
      ads: false,
      observacoes: '',
      valor: 0,
      moeda: 'BRL',
    })
    createdEmpresaId.value = selectedEmpresaId.value
    createdPessoaId.value = selectedPessoaId.value
    successMessage.value = t('quickCreate.criado')
    closeTimer = setTimeout(() => emit('close'), 3000)
  } catch (e: any) {
    errorMessage.value = t('quickCreate.erroCriar') + (e?.message || t('common.unknown'))
  } finally {
    salvando.value = false
  }
}

function irParaPessoa() {
  if (createdEmpresaId.value && createdPessoaId.value) {
    router.push(`/admin/empresas/${createdEmpresaId.value}/pessoas/${createdPessoaId.value}`)
    emit('close')
  }
}
</script>

<template>
  <AppModal :show="show" :title="t('quickCreate.titulo')" @close="emit('close')">
    <div v-if="successMessage" class="text-center py-4">
      <p class="text-green-600 dark:text-green-400 font-medium mb-2">{{ successMessage }}</p>
      <button @click="irParaPessoa" class="text-primary hover:underline text-sm">
        {{ t('quickCreate.verPessoa') }}
      </button>
    </div>

    <template v-else>
      <ErrorMessage :message="errorMessage" />

      <div class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-foreground-secondary mb-1">{{ t('quickCreate.empresa') }}</label>
          <select
            v-model="selectedEmpresaId"
            class="w-full border border-border bg-surface text-foreground-secondary rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="">{{ t('quickCreate.selecionarEmpresa') }}</option>
            <option v-for="empresa in empresas" :key="empresa.id" :value="empresa.id">
              {{ empresa.nome }}
            </option>
          </select>
        </div>

        <div>
          <label class="block text-sm font-medium text-foreground-secondary mb-1">{{ t('quickCreate.pessoa') }}</label>
          <select
            v-model="selectedPessoaId"
            :disabled="!selectedEmpresaId"
            class="w-full border border-border bg-surface text-foreground-secondary rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <option value="">{{ t('quickCreate.selecionarPessoa') }}</option>
            <option v-for="pessoa in pessoas" :key="pessoa.id" :value="pessoa.id">
              {{ pessoa.nome }}
            </option>
          </select>
        </div>

        <div>
          <label class="block text-sm font-medium text-foreground-secondary mb-1">{{ t('videoForm.titulo') }} <span class="text-red-500">*</span></label>
          <input
            v-model="titulo"
            type="text"
            :placeholder="t('quickCreate.placeholderTitulo')"
            class="w-full border border-border bg-surface text-foreground rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            @keyup.enter="criar"
          />
        </div>
      </div>
    </template>

    <template #footer>
      <template v-if="!successMessage">
        <button
          @click="emit('close')"
          class="px-4 py-3 text-foreground-secondary hover:text-foreground text-sm"
        >
          {{ t('common.cancel') }}
        </button>
        <button
          @click="criar"
          :disabled="salvando || !titulo.trim() || !selectedEmpresaId || !selectedPessoaId"
          class="px-4 py-3 bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors text-sm disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {{ salvando ? t('common.saving') : t('common.save') }}
        </button>
      </template>
    </template>
  </AppModal>
</template>
