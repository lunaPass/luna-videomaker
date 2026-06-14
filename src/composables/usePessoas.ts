import { ref } from 'vue'
import type { Pessoa, PessoaFormData } from '@/types/pessoa'
import * as db from '@/firebase/db'

export function usePessoas() {
  const pessoas = ref<Pessoa[]>([])
  const loading = ref(false)

  async function listar(empresaId: string) {
    loading.value = true
    pessoas.value = await db.listarPessoas(empresaId)
    loading.value = false
  }

  async function criar(empresaId: string, data: PessoaFormData) {
    await db.criarPessoa(empresaId, data)
    await listar(empresaId)
  }

  async function atualizar(empresaId: string, pessoaId: string, data: Partial<PessoaFormData>) {
    await db.atualizarPessoa(empresaId, pessoaId, data)
    await listar(empresaId)
  }

  async function excluir(empresaId: string, pessoaId: string) {
    await db.excluirPessoa(empresaId, pessoaId)
    await listar(empresaId)
  }

  return { pessoas, loading, listar, criar, atualizar, excluir }
}
