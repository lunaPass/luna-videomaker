import { ref } from 'vue'

export function useWebPush() {
  const supported = ref('Notification' in window)
  const permission = ref(Notification.permission)

  const request = async () => {
    const result = await Notification.requestPermission()
    permission.value = result
    return result
  }

  const notify = (title: string, options?: NotificationOptions) => {
    if (permission.value === 'granted') {
      new Notification(title, options)
    }
  }

  return { supported, permission, request, notify }
}
