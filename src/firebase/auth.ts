import { auth, isLocalMode } from './init'
import {
  signInWithEmailAndPassword as firebaseSignIn,
  signOut as firebaseSignOut,
  onAuthStateChanged,
  type User,
} from 'firebase/auth'

export async function login(email: string, password: string) {
  if (isLocalMode) {
    const user = { email }
    localStorage.setItem('luna_local_auth', JSON.stringify(user))
    auth.currentUser = user
    return
  }
  return firebaseSignIn(auth, email, password)
}

export async function logout() {
  if (isLocalMode) {
    localStorage.removeItem('luna_local_auth')
    auth.currentUser = null
    return
  }
  return firebaseSignOut(auth)
}

export function onAuthChange(callback: (user: User | null) => void) {
  if (isLocalMode) {
    const stored = localStorage.getItem('luna_local_auth')
    callback(stored ? (JSON.parse(stored) as User) : null)
    return () => {}
  }
  return onAuthStateChanged(auth, callback)
}
