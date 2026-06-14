import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
}

export const isLocalMode = !firebaseConfig.apiKey

let firebaseApp: ReturnType<typeof initializeApp> | null = null
let firebaseDb: ReturnType<typeof getFirestore> | null = null
let firebaseAuth: ReturnType<typeof getAuth> | null = null

if (!isLocalMode) {
  firebaseApp = initializeApp(firebaseConfig)
  firebaseDb = getFirestore(firebaseApp)
  firebaseAuth = getAuth(firebaseApp)
}

export const db = firebaseDb

function getStoredUser() {
  try {
    const stored = localStorage.getItem('luna_local_auth')
    return stored ? JSON.parse(stored) : null
  } catch {
    return null
  }
}

export const auth: any = isLocalMode
  ? { currentUser: getStoredUser() }
  : firebaseAuth
