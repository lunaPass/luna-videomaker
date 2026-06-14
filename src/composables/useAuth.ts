import { ref, onMounted } from 'vue'
import type { User } from 'firebase/auth'
import { login as firebaseLogin, logout as firebaseLogout, onAuthChange } from '@/firebase/auth'

const user = ref<User | null>(null)
const loading = ref(true)

export function useAuth() {
  onMounted(() => {
    onAuthChange((u) => {
      user.value = u
      loading.value = false
    })
  })

  async function login(email: string, password: string) {
    await firebaseLogin(email, password)
  }

  async function logout() {
    await firebaseLogout()
  }

  return { user, loading, login, logout }
}
