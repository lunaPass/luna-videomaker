<template>
  <div>
    <h2 class="text-2xl font-bold mb-4">Empresas</h2>
    <ul class="space-y-2">
      <li v-for="empresa in empresas" :key="empresa.id">
        <router-link :to="`/admin/empresas/${empresa.id}`" class="block p-3 bg-white rounded shadow hover:shadow-md">
          {{ empresa.nome }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useEmpresas } from '@/composables/useEmpresas'

const { empresas } = useEmpresas()
</script>
