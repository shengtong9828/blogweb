import { ref } from "vue"
import { useWindowEvent } from "./event.js"

export const useWindowScrollStatus = () => {
    const status = ref(false)
    const judgeScrollStatusHandler = () => {
        const { scrollTop } = document.documentElement
        status.value = scrollTop > 0 ? true : false
    }
    useWindowEvent("scroll", judgeScrollStatusHandler)
    return status
}
