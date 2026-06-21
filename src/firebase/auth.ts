import { auth } from './init'
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  type User,
} from 'firebase/auth'

export function login(email: string, password: string) {
  return signInWithEmailAndPassword(auth, email, password)
}

export function logout() {
  return signOut(auth)
}

export function onAuthChange(callback: (user: User | null) => void) {
  return onAuthStateChanged(auth, callback)
}
