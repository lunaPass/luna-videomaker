<template>
  <div>
    <h3 class="text-xl font-semibold mb-3">Pessoas</h3>
    <ul class="space-y-2">
      <li v-for="pessoa in pessoas" :key="pessoa.id">
        <router-link :to="`/admin/pessoas/${pessoa.id}`" class="block p-3 bg-white rounded shadow">
          {{ pessoa.nome }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { usePessoas } from '@/composables/usePessoas'

const { pessoas } = usePessoas()
</script>
