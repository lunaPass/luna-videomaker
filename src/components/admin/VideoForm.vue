<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { Video, VideoFormData, VideoStatus } from '@/types/video'
import { VIDEO_STATUS_LABELS, VIDEO_STATUS_ORDER } from '@/types/video'
import * as db from '@/firebase/db'

const props = defineProps<{
  video?: Video | null
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
const observacoes = ref('')
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
    observacoes.value = props.video.observacoes
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

async function handleSubmit() {
  if (!titulo.value.trim()) return
  loading.value = true
  await emit('submit', {
    titulo: titulo.value.trim(),
    status: status.value,
    dataPostagem: dataPostagem.value,
    canais: canais.value,
    ads: ads.value,
    observacoes: observacoes.value,
  })
  loading.value = false
}
</script>

<template>
  <div class="fixed inset-0 bg-black/40 flex items-center justify-center z-50" @click.self="emit('close')">
    <div class="bg-white rounded-xl p-6 w-full max-w-lg shadow-xl max-h-[90vh] overflow-y-auto">
      <h2 class="text-lg font-bold mb-4">{{ video ? 'Editar Vídeo' : 'Novo Vídeo' }}</h2>
      <form @submit.prevent="handleSubmit" class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Título</label>
          <input
            v-model="titulo"
            type="text"
            required
            autofocus
            class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Ex: Aula de inglês #42"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Status</label>
          <select
            v-model="status"
            class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option v-for="s in VIDEO_STATUS_ORDER" :key="s" :value="s">
              {{ VIDEO_STATUS_LABELS[s] }}
            </option>
          </select>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Data de Postagem</label>
          <input
            v-model="dataPostagem"
            type="date"
            class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Canais</label>
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
          <label for="ads-check" class="text-sm font-medium text-gray-700">É para Ads</label>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Observações</label>
          <textarea
            v-model="observacoes"
            rows="3"
            class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Observações opcionais..."
          />
        </div>

        <div class="flex justify-end gap-3 pt-2">
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
