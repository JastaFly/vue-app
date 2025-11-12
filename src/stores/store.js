import { defineStore } from 'pinia'
import {ref} from 'vue'

export const useStore = defineStore('counter', () => {
    let count = ref(0)

    function increment() {
        count.value++
    }

    return {count, increment}
})