import { ref } from 'vue'
import type { Empresa, EmpresaFormData } from '@/types/empresa'
import * as db from '@/firebase/db'

export function useEmpresas() {
  const empresas = ref<Empresa[]>([])
  const loading = ref(false)

  async function listar() {
    loading.value = true
    empresas.value = await db.listarEmpresas()
    loading.value = false
  }

  async function criar(data: EmpresaFormData) {
    await db.criarEmpresa(data)
    await listar()
  }

  async function atualizar(id: string, data: Partial<EmpresaFormData>) {
    await db.atualizarEmpresa(id, data)
    await listar()
  }

  async function excluir(id: string) {
    await db.excluirEmpresa(id)
    await listar()
  }

  return { empresas, loading, listar, criar, atualizar, excluir }
}
