<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import type { Video, VideoFormData, VideoStatus, Moeda } from '@/types/video'
import { VIDEO_STATUS_ORDER, MOEDA_SIMBOLO } from '@/types/video'
import * as db from '@/firebase/db'

const { t } = useI18n()

const props = defineProps<{
  video?: Video | null
  saving?: boolean
}>()

const emit = defineEmits<{
  submit: [data: VideoFormData]
  close: []
}>()

const titulo = ref('')
const status = ref<VideoStatus>('gravado')
const dataPostagem = ref('')
const canais = ref<string[]>([])
const ads = ref(false)
const priorizado = ref(false)
const valor = ref(0)
const moeda = ref<Moeda>('BRL')
const observacoes = ref('')
const linkMaterialBruto = ref('')
const linkVideoFinal = ref('')
const loading = ref(false)
const canaisDisponiveis = ref<string[]>([])

onMounted(async () => {
  if (props.video) {
    titulo.value = props.video.titulo
    status.value = props.video.status
    dataPostagem.value = props.video.dataPostagem
      ? props.video.dataPostagem.toISOString().split('T')[0]
      : ''
    canais.value = [...props.video.canais]
    ads.value = props.video.ads
    priorizado.value = props.video.priorizado ?? false
    valor.value = props.video.valor ?? 0
    moeda.value = props.video.moeda ?? 'BRL'
    observacoes.value = props.video.observacoes
    linkMaterialBruto.value = props.video.linkMaterialBruto ?? ''
    linkVideoFinal.value = props.video.linkVideoFinal ?? ''
  }
  const config = await db.getConfig()
  canaisDisponiveis.value = config.canais
})

function toggleCanal(canal: string) {
  const idx = canais.value.indexOf(canal)
  if (idx >= 0) {
    canais.value.splice(idx, 1)
  } else {
    canais.value.push(canal)
  }
}

function handleSubmit() {
  if (!titulo.value.trim()) return
  emit('submit', {
    titulo: titulo.value.trim(),
    status: status.value,
    dataPostagem: dataPostagem.value,
    canais: canais.value,
    ads: ads.value,
    priorizado: priorizado.value,
    valor: valor.value,
    moeda: moeda.value,
    observacoes: observacoes.value,
    linkMaterialBruto: linkMaterialBruto.value.trim(),
    linkVideoFinal: linkVideoFinal.value.trim(),
  })
}
</script>

<template>
  <div class="fixed inset-0 bg-black/40 flex items-center justify-center z-50" @click.self="emit('close')">
    <div class="bg-white rounded-xl p-6 w-full max-w-lg shadow-xl max-h-[90vh] overflow-y-auto">
      <h2 class="text-lg font-bold mb-4">{{ video ? t('videoForm.editar') : t('videoForm.novo') }}</h2>
      <form @submit.prevent="handleSubmit" class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">{{ t('videoForm.titulo') }}</label>
          <input
            v-model="titulo"
            type="text"
            required
            autofocus
            class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            :placeholder="t('videoForm.placeholderTitulo')"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">{{ t('videoForm.status') }}</label>
          <select
            v-model="status"
            class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option v-for="s in VIDEO_STATUS_ORDER" :key="s" :value="s">
              {{ t('status.' + s) }}
            </option>
          </select>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">{{ t('videoForm.dataPostagem') }}</label>
          <input
            v-model="dataPostagem"
            type="date"
            class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">{{ t('videoForm.canais') }}</label>
          <div class="flex flex-wrap gap-2">
            <label
              v-for="canal in canaisDisponiveis"
              :key="canal"
              class="flex items-center gap-2 px-3 py-1.5 border rounded-lg cursor-pointer hover:bg-gray-50"
              :class="{ 'bg-blue-50 border-blue-300': canais.includes(canal) }"
            >
              <input
                type="checkbox"
                :checked="canais.includes(canal)"
                @change="toggleCanal(canal)"
                class="rounded"
              />
              {{ canal }}
            </label>
          </div>
        </div>

        <div class="flex items-center gap-2">
          <input
            v-model="ads"
            type="checkbox"
            id="ads-check"
            class="rounded"
          />
          <label for="ads-check" class="text-sm font-medium text-gray-700">{{ t('videoForm.paraAds') }}</label>
        </div>

        <div class="flex items-center gap-2">
          <input
            v-model="priorizado"
            type="checkbox"
            id="priorizado-check"
            class="rounded"
          />
          <label for="priorizado-check" class="text-sm font-medium text-gray-700">
            {{ t('videoForm.priorizado') }}
            <span class="text-yellow-500 ml-1">★</span>
          </label>
        </div>

        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">{{ t('videoForm.valor') }}</label>
            <input
              v-model.number="valor"
              type="number"
              step="0.01"
              min="0"
              class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="0,00"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">{{ t('videoForm.moeda') }}</label>
            <select
              v-model="moeda"
              class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option v-for="m in (['BRL', 'USD', 'EUR'] as Moeda[])" :key="m" :value="m">
                {{ MOEDA_SIMBOLO[m] }} {{ m }}
              </option>
            </select>
          </div>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">{{ t('videoForm.observacoes') }}</label>
          <textarea
            v-model="observacoes"
            rows="3"
            class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            :placeholder="t('videoForm.placeholderObservacoes')"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">{{ t('videoForm.linkMaterialBruto') }}</label>
          <input
            v-model="linkMaterialBruto"
            type="url"
            class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            :placeholder="t('videoForm.placeholderDrive')"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">{{ t('videoForm.linkVideoFinal') }}</label>
          <input
            v-model="linkVideoFinal"
            type="url"
            class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            :placeholder="t('videoForm.placeholderDrive')"
          />
        </div>

        <div class="flex justify-end gap-3 pt-2">
          <button
            type="button"
            @click="emit('close')"
            class="px-4 py-2 text-gray-600 hover:text-gray-800"
          >
            {{ t('common.cancel') }}
          </button>
          <button
            type="submit"
            :disabled="loading || saving"
            class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
          >
            {{ loading || saving ? t('common.saving') : t('common.save') }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
