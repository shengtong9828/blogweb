import { onUnmounted } from "vue"

export const useWindowEvent = (eventType, callback) => {
    window.addEventListener(eventType, callback)

    const removeEventHandler = () =>
        window.removeEventListener(eventType, callback)
    onUnmounted(removeEventHandler)
}
