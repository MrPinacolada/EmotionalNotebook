import { onBeforeUnmount, onMounted } from 'vue'

export default function useDetectOutsideClick(component: any, callback: any) {
  if (!component) return
  const listener = (event: any) => {
    if (event.target !== component.value && event.composedPath().includes(component.value)) {
      return
    }
    if (typeof callback === 'function') {
      callback()
    }
  }
  onMounted(() => {
    setTimeout(() => {
      window.addEventListener('click', listener)
    }, 1000)
  })
  onBeforeUnmount(() => {
    window.removeEventListener('click', listener)
  })

  return { listener }
}
